import { currentUser } from '@/lib/auth'

const add = async () => {
    const user = await currentUser()
    return (
        <div>
            <h1>DODAJ PAGE</h1>
            <h2>{JSON.stringify(user)}</h2>
        </div>
    )
}

export default add
