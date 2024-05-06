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
}
