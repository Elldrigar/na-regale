import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Poprawny email jest wymagany'
    }),
    password: z.string().min(1, {
        message: 'Hasło jest wymagane'
    })
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
