'use server'

import { currentRole } from '@/lib/auth'
import { UserRole } from '@prisma/client'

export const adminActions = async () => {
    const role = await currentRole()

    if (role !== UserRole.ADMIN) {
        return { error: 'Brak dostępu!' }
    }

    return { succes: 'Witaj adminie, lecimy dalej!' }
}
