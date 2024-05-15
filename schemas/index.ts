import * as z from 'zod'
import { UserRole } from '@prisma/client'

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Poprawny email jest wymagany'
    }),
    password: z.string().min(1, {
        message: 'Hasło jest wymagane'
    }),
    code: z.optional(z.string())
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: 'Poprawny email jest wymagany'
    }),
    password: z.string().min(6, {
        message: 'Minimum 6 znaków'
    }),
    name: z.string().min(2, {
        message: 'Imię jest wymagane'
    })
})

export const ResetSchema = z.object({
    email: z.string().email({
        message: 'Poprawny email jest wymagany'
    })
})

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: 'Minimum 6 znaków'
    })
})

export const SettingsSchema = z
    .object({
        name: z.optional(z.string().min(2, {
            message: 'Minimum 2 znaki!'
        })),
        email: z.optional(z.string().email({
            message: 'Poprawny email jest wymagany!'
        })),
        is2FAEnabled: z.optional(z.boolean()),
        role: z.enum([UserRole.ADMIN, UserRole.USER]),
        password: z.optional(z.string().min(6, {
            message: '6 znaków min!'
        })),
        newPassword: z.optional(z.string().min(6, {
            message: 'New Password to tez 6 znaków min'
        }))
    })
    .refine(
        (data) => {
            return !(data.password && !data.newPassword)
        },
        {
            message: 'Nowe Hasło wymagane!',
            path: ['newPassword']
        }
    )
    .refine(
        (data) => {
            return !(data.newPassword && !data.password)
        },
        {
            message: 'Hasło jest wymagane',
            path: ['password']
        }
    )
