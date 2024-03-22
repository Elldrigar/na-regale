import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Poprawny email jest wymagany'
    }),
    password: z.string().min(1, {
        message: 'Hasło jest wymagane'
    }),
})
