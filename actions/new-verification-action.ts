'use server'

import { db } from '@/lib/db'
import { getUserByEmail } from '@/services/user/getUser'
import { getVerificationTokenByToken } from '@/services/user/getToken'

export const newVerification = async (token: string) => {
    const existingToken = await getVerificationTokenByToken(token)

    if (!existingToken) {
        return { error: 'Token nie istnieje!' }
    }

    const hasExpired = new Date(existingToken.expires) < new Date()

    if (hasExpired) {
        return { error: 'Twój token wygasł!' }
    }

    const existingUser = await getUserByEmail(existingToken.email)

    if (!existingUser) {
        return { error: 'Email nie istnieje!' }
    }

    await db.user.update({
        where: { id: existingUser.id },
        data: {
            emailVerified: new Date(),
            email: existingToken.email
        }
    })

    await db.verificationToken.delete({
        where: { id: existingToken.id }
    })

    return { success: 'Twój Email został Potwierdzony!' }
}
