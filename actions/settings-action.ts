'use server'

import * as z from 'zod'
import { db } from '@/lib/db'
import { SettingsSchema } from '@/schemas'
import { getUserById } from '@/services/user/getUser'
import { currentUser } from '@/lib/auth'

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

    await db.user.update({
        where: { id: dbUser.id },
        data: {
            ...values
        }
    })

    return { success: 'Ustawienia zaktualizowane!' }
}
