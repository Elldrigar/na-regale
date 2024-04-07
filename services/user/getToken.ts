import { db } from '@/lib/db'

export const getVerificationTokenByToken = async (token: string) => {
    try {
        return await db.verificationToken.findUnique({
            where: { token }
        })
    } catch {
        return null
    }
}

export const getVerificationTokenByEmail = async (email: string) => {
    try {
        return await db.verificationToken.findFirst({
            where: { email }
        })
    } catch {
        return null
    }
}
