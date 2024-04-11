'use server'

import * as z from 'zod'
import bcrypt from 'bcryptjs'
import { NewPasswordSchema } from '@/schemas'
import { getPasswordResetTokenByToken } from '@/services/user/getToken'
import { getUserByEmail } from '@/services/user/getUser'
import { db } from '@/lib/db'

export const newPassword = async (
    values: z.infer<typeof NewPasswordSchema>,
    token?: string | null
) => {
    if (!token) {
        return { error: 'Brakuje tokena!' }
    }

    const validatedFields = NewPasswordSchema.safeParse(values)

    if (!validatedFields.success) {
        return { error: 'Nieprawidłowe hasło' }
    }

    const { password } = validatedFields.data
    const existingToken = await getPasswordResetTokenByToken(token)

    if (!existingToken) {
        return { error: 'Nieprawidłowy token!' }
    }

    const hasExpired = new Date(existingToken.expires) < new Date()

    if (hasExpired) {
        return { error: 'Token wygasł!' }
    }

    const existingUser = await getUserByEmail(existingToken.email)

    if (!existingUser) {
        return { error: 'Email nie istnieje!' }
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await db.user.update({
        where: { id: existingUser.id },
        data: { password: hashedPassword }
    })

    await db.passwordResetToken.delete({
        where: { id: existingToken.id }
    })

    return { success: 'Hasełko zresetowane!' }
}
