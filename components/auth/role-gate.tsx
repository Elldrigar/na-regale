'use client'

import { UserRole } from '@prisma/client'
import { useCurrentRole } from '@/hooks/use-current-role'
import { FormError } from '@/components/notification/form-error'

interface RoleGateProps {
    children: React.ReactNode
    allowedRole: UserRole
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
    const role = useCurrentRole()

    if (role !== allowedRole) {
        return (
            <FormError message='Nie masz uprawnień do oglądania tej strony!' />
        )
    }

    return <>{children}</>
}
