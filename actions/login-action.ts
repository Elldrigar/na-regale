'use server'

import * as z from 'zod'
import { db } from '@/lib/db'
import { LoginSchema } from '@/schemas'
import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import { generateVerificationToken, generateTwoFactorToken } from '@/lib/tokens'
import {
    getTwoFactorTokenByEmail,
    getTwoFactorConfirmationByUserId
} from '@/services/user/getToken'
import { getUserByEmail } from '@/services/user/getUser'
import { sendVerificationEmail, sendTwoFactorTokenEmail } from '@/lib/email'

export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values)

    if (!validatedFields.success) {
        return { error: 'Invalid fields' }
    }

    const { email, password, code } = validatedFields.data
    const existingUser = await getUserByEmail(email)

    if (!existingUser || !existingUser.email || !existingUser.password) {
        return { error: 'Użytkownik nie istnieje!' }
    }

    if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(
            existingUser.email
        )

        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token
        )

        return { success: 'Email do weryfikacji wysłany!' }
    }

    if (existingUser.is2FAEnabled && existingUser.email) {
        if (code) {
            const twoFactorToken = await getTwoFactorTokenByEmail(
                existingUser.email
            )

            if (!twoFactorToken) {
                return { error: 'Nieprawidłowy kod!' }
            }

            if (twoFactorToken.token !== code) {
                return { error: 'Nieprawidłowy kod!' }
            }

            const hasExpired = new Date(twoFactorToken.expires) < new Date()

            if (hasExpired) {
                return { error: 'Kod przedawniony' }
            }

            await db.twoFactorToken.delete({
                where: { id: twoFactorToken.id }
            })

            const existingConfirmation = await getTwoFactorConfirmationByUserId(
                existingUser.id
            )

            if (existingConfirmation) {
                await db.confirmation2FA.delete({
                    where: { id: existingConfirmation.id }
                })
            }

            await db.confirmation2FA.create({
                data: {
                    userId: existingUser.id
                }
            })
        } else {
            const twoFactorToken = await generateTwoFactorToken(
                existingUser.email
            )
            await sendTwoFactorTokenEmail(
                twoFactorToken.email,
                twoFactorToken.token
            )

            return { twoFactor: true }
        }
    }

    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (err) {
        if (err instanceof AuthError) {
            switch (err.type) {
                case 'CredentialsSignin':
                    return { error: 'Nieprawidłowe dane logowania!' }
                default:
                    return { error: 'Ups, cos poszło nie tak!' }
            }
        }
        throw err
    }
}
