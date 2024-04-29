import { currentUser } from '@/lib/auth'
import { UserProfile } from '@/components/user-profile'

const profile = async () => {
    const user = await currentUser()
    return <UserProfile user={user} label='Profil' />
}

export default profile
