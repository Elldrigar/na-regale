'use client'

import React from 'react'

export const Main = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className='flex h-[800px] w-[950px] flex-col items-center justify-center rounded-xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 to-violet-400 p-5 shadow-xl'>
            {children}
        </main>
    )
}
