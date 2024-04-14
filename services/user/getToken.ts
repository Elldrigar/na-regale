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

export const getPasswordResetTokenByToken = async (token: string) => {
    try {
        return await db.passwordResetToken.findUnique({
            where: { token }
        })
    } catch {
        return null
    }
}

export const getPasswordResetTokenByEmail = async (email: string) => {
    try {
        return await db.passwordResetToken.findFirst({
            where: { email }
        })
    } catch {
        return null
    }
}

export const getTwoFactorTokenByToken = async (token: string) => {
    try {
        return await db.twoFactorToken.findUnique({
            where: { token }
        })
    } catch {
        return null
    }
}

export const getTwoFactorTokenByEmail = async (email: string) => {
    try {
        return await db.twoFactorToken.findFirst({
            where: { email }
        })
    } catch {
        return null
    }
}

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
    try {
        return await db.confirmation2FA.findUnique({
            where: { userId }
        })
    } catch {
        return null
    }
}
