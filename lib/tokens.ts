import { v4 as uuid } from 'uuid'
import { db } from '@/lib/db'
import { getVerificationTokenByEmail } from '@/services/user/getToken'
import { getPasswordResetTokenByEmail } from '@/services/user/getToken'

export const generateVerificationToken = async (email: string) => {
    const token = uuid()
    const expires = new Date(new Date().getTime() + 3600 * 1000) //one hour
    const existingToken = await getVerificationTokenByEmail(email)

    if (existingToken) {
        await db.verificationToken.delete({
            where: {
                id: existingToken.id
            }
        })
    }

    const verificationToken = await db.verificationToken.create({
        data: {
            email,
            token,
            expires
        }
    })

    return verificationToken
}

export const generatePasswordResetToken = async (email: string) => {
    const token = uuid()
    const expires = new Date(new Date().getTime() + 3600 * 1000) //one hour

    const existingToken = await getPasswordResetTokenByEmail(email)

    if (existingToken) {
        await db.passwordResetToken.delete({
            where: { id: existingToken.id }
        })
    }

    const passwordResetToken = await db.passwordResetToken.create({
        data: {
            email,
            token,
            expires
        }
    })

    return passwordResetToken
}
