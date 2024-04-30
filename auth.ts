import NextAuth from 'next-auth'
import authConfig from '@/auth.config'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from '@/lib/db'
import { getUserById } from '@/services/user/getUser'
import { getTwoFactorConfirmationByUserId } from '@/services/user/getToken'
import { UserRole } from '@prisma/client'

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    pages: {
        signIn: '/auth/login',
        error: '/auth/error'
    },
    events: {
        async linkAccount({ user }) {
            await db.user.update({
                where: { id: user.id },
                data: { emailVerified: new Date() }
            })
        }
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider !== 'credentials') return true // bez weryfikacji e-maila przepuszczam innych providerów

            const existingUser = await getUserById(user.id as string)

            if (!existingUser?.emailVerified) return false // zabezpiecza logowanie bez weryfikacji e-maila

            if (existingUser.is2FAEnabled) {
                const twoFactorConfirmation =
                    await getTwoFactorConfirmationByUserId(existingUser.id)

                if (!twoFactorConfirmation) return false

                await db.confirmation2FA.delete({
                    where: { id: twoFactorConfirmation.id }
                })
            }

            return true
        },
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub
            }
            if (token.role && session.user) {
                session.user.role = token.role as UserRole
            }
            if (session.user) {
                session.user.is2FAEnabled = token.is2FAEnabled as boolean
            }
            return session
        },
        async jwt({ token }) {
            if (!token.sub) return token

            const existingUser = await getUserById(token.sub)

            if (!existingUser) return token

            token.role = existingUser.role
            token.is2FAEnabled = existingUser.is2FAEnabled
            return token
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt' },
    ...authConfig
})
