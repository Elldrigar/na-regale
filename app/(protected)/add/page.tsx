'use client'
import { UserRole } from '@prisma/client'
import { RoleGate } from '@/components/auth/role-gate'
import { FormSuccess } from '@/components/notification/form-success'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { adminActions } from '@/actions/admin-action'

const add = () => {
    const onApiRouteClick = () => {
        fetch('/api/admin').then((response) => {
            if (response.ok) {
                toast.success('Masz dostęp!')
            } else {
                toast.error('Brak dostepu')
            }
        })
    }

    const onServerActionClick = () => {
        adminActions().then((data) => {
            if (data.error) {
                toast.error(data.error)
            }
            if (data.succes) {
                toast.success(data.succes)
            }
        })
    }

    return (
        <div>
            <h1>DODAJ PAGE</h1>
            <RoleGate allowedRole={UserRole.ADMIN}>
                <FormSuccess message='Jesteś Adminem! Enjoy the power!' />
            </RoleGate>
            <RoleGate allowedRole={UserRole.USER}>
                <FormSuccess message='Jesteś Adminem! Enjoy the power!' />
            </RoleGate>

            <Button onClick={onApiRouteClick}>Testuj API</Button>
            <Button onClick={onServerActionClick}>Testuj Server action</Button>
        </div>
    )
}

export default add
