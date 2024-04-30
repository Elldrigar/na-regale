import { UserRole } from '@prisma/client'
import { type DefaultSession } from 'next-auth'

export type ExtendedUser = DefaultSession['user'] & {
    role: UserRole
    is2FAEnabled: boolean
}

declare module 'next-auth' {
    interface Session {
        user: ExtendedUser
    }
}
