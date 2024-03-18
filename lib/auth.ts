import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'
import { getServerSession } from 'next-auth'

export const currentUser = async () => {
    const session = await getServerSession(authOptions)
    return session?.user
}

export const currentRole = async () => {
    const session = await getServerSession(authOptions)
    return session?.user?.role
}
