'use server'

import * as z from 'zod'
import { db } from '@/lib/db'
import { SettingsSchema } from '@/schemas'
import { getUserByEmail, getUserById } from '@/services/user/getUser'
import { currentUser } from '@/lib/auth'
import { generateVerificationToken } from '@/lib/tokens'
import { sendVerificationEmail } from '@/lib/email'
import bcrypt from 'bcryptjs'

export const settingsAction = async (
    values: z.infer<typeof SettingsSchema>
) => {
    const user = await currentUser()

    if (!user) {
        return { error: 'Brak autoryzacji' }
    }

    const dbUser = await getUserById(user.id)

    if (!dbUser) {
        return { error: "'Brak autoryzacji" }
    }
    if (user.isOAuth) {
        values.email = undefined
        values.password = undefined
        values.newPassword = undefined
        values.is2FAEnabled = undefined
    }

    if (values.email && values.email !== user.email) {
        const existingUser = await getUserByEmail(values.email)

        if (existingUser && existingUser.id !== user.id) {
            return { error: 'E-mail jest zajęty!' }
        }

        const verificationToken = await generateVerificationToken(values.email)
        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token
        )

        return { success: `Email weryfikacyjny wsyłany do ${values.email}` }
    }

    if (values.password && values.newPassword && dbUser.password) {
        const passwordsMatch = await bcrypt.compare(
            values.password,
            dbUser.password
        )

        if (!passwordsMatch) {
            return { error: 'Nieprawidłowe hasło!' }
        }

        const hashedPassword = await bcrypt.hash(values.newPassword, 10)
        values.password = hashedPassword
        values.newPassword = undefined
    }

    await db.user.update({
        where: { id: dbUser.id },
        data: {
            ...values
        }
    })

    return { success: 'Ustawienia zaktualizowane!' }
}
