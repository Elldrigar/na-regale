'use server'

import * as z from 'zod'
import bcrypt from 'bcrypt'
import { RegisterSchema } from '@/schemas'
import { db } from '@/lib/db'

export const registerAction = async (
    values: z.infer<typeof RegisterSchema>
) => {
    const validatedFields = RegisterSchema.safeParse(values)
    const salt: number = 10

    if (!validatedFields.success) {
        return { error: 'Invalid fields' }
    }

    const { email, password, name } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, salt)

    const existingUserEmail = await db.user.findUnique({
        where: {
            email
        }
    })

    if (existingUserEmail) {
        return { error: 'Email is already taken!' }
    }

    await db.user.create({
        data: {
            name: name,
            email: email,
            password: hashedPassword
        }
    })

    return { success: 'Success!' }
}
