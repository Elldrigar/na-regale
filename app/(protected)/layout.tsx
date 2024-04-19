import React from 'react'

interface ProtectedLayoutProps {
    children: React.ReactNode
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
    return (
        <div className='flex h-full w-full flex-col items-center justify-center gap-y-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-700 to-violet-900'>
            {children}
        </div>
    )
}

export default ProtectedLayout
