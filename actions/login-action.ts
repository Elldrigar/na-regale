'use server'

import * as z from 'zod'
import { LoginSchema } from '@/schemas'
import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import { generateVerificationToken } from "@/lib/tokens";
import {getUserByEmail} from "@/services/user/getUser";

export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values)

    if (!validatedFields.success) {
        return { error: 'Invalid fields' }
    }

    const { email, password } = validatedFields.data
    const existingUser = await getUserByEmail(email)

    if (!existingUser || !existingUser.email || !existingUser.password) {
        return { error: 'Użytkownik nie istnieje!' }
    }

    if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(
            existingUser.email
        )

        return { success: 'Email do weryfikacji wysłany!' }
    }

    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
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
