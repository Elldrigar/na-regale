'use client'

import React from 'react'

export const Main = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className='flex h-[500px] w-[950px] rounded-xl p-4 shadow-xl flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 to-violet-400'>
            {children}
        </main>
    )
}
