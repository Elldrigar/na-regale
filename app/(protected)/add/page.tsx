'use client'
import { currentUser } from '@/lib/auth'
import { UserRole } from '@prisma/client'
import { RoleGate } from '@/components/auth/role-gate'
import { FormSuccess } from '@/components/notification/form-success'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

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

    return (
        <div>
            <h1>DODAJ PAGE</h1>
            <RoleGate allowedRole={UserRole.ADMIN}>
                <FormSuccess message='Jesteś Adminem! Enjoy the power!' />
            </RoleGate>
            <RoleGate allowedRole={UserRole.USER}>
                <FormSuccess message='Jesteś Adminem! Enjoy the power!' />
            </RoleGate>

            <Button onClick={onApiRouteClick}>Testuj</Button>
        </div>
    )
}

export default add
