import type { NextAuthConfig } from 'next-auth'
import Credentials from '@auth/core/providers/credentials'
import { LoginSchema } from '@/schemas'
import bcrypt from 'bcryptjs'
import { getUserByEmail } from '@/services/user/getUser'
import GitHub from "next-auth/providers/github";

export default {
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials)

                if (validatedFields.success) {
                    const { email, password } = validatedFields.data

                    const user = await getUserByEmail(email)
                    if (!user || !user.password) return null

                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password
                    )

                    if (passwordsMatch) return user
                }

                return null
            }
        })
    ]
} satisfies NextAuthConfig
