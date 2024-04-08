'use server'

import * as z from 'zod'
import bcrypt from 'bcryptjs'
import { RegisterSchema } from '@/schemas'
import { db } from '@/lib/db'
import { getUserByEmail } from '@/services/user/getUser'
import { generateVerificationToken } from '@/lib/tokens'
import { sendVerificationEmail } from '@/lib/email'

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

    const existingUserEmail = await getUserByEmail(email)

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

    const verificationToken = await generateVerificationToken(email)
    await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token
    )

    return { success: 'Wysłany został e-mail do weryfikacji' }
}
