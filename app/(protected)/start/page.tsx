'use client'

import { logoutAction } from '@/actions/logout-action'
import { useCurrentUser } from '@/hooks/use-current.user'

const SettingsPage = () => {
    const user = useCurrentUser()
    const onClick = () => {
        logoutAction()
    }

    return (
        <div>
            <button onClick={onClick} type='button'>
                WYLOGUJ
            </button>
        </div>
    )
}

export default SettingsPage
