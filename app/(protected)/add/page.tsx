'use client'
import { currentUser } from '@/lib/auth'
import { UserRole } from '@prisma/client'
import { RoleGate } from '@/components/auth/role-gate'
import { FormSuccess } from '@/components/notification/form-success'

const add = () => {
    return (
        <div>
            <h1>DODAJ PAGE</h1>
            <RoleGate allowedRole={UserRole.ADMIN}>
                <FormSuccess message='Jesteś Adminem! Enjoy the power!' />
            </RoleGate>
            <RoleGate allowedRole={UserRole.USER}>
                <FormSuccess message='Jesteś Adminem! Enjoy the power!' />
            </RoleGate>
        </div>
    )
}

export default add
