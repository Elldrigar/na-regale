import React from 'react'
import { Navbar } from '@/app/(protected)/_components/navbar'
import { Main } from '@/components/ui/main'

interface ProtectedLayoutProps {
    children: React.ReactNode
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
    return (
        <div className='flex h-full w-full flex-col items-center justify-center gap-y-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-700 to-violet-900'>
            <Navbar />
            <Main>{children}</Main>
        </div>
    )
}

export default ProtectedLayout
