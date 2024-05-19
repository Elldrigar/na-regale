'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { UserButton } from '@/components/auth/user-button'

export const Navbar = () => {
    const pathName = usePathname()
    return (
        <nav className='flex w-[1000px] justify-between rounded-xl bg-secondary p-4 shadow-xl'>
            <div className='flex gap-x-2'>
                <Button
                    asChild
                    variant={pathName === '/start' ? 'default' : 'outline'}>
                    <Link href='/start'>Start</Link>
                </Button>
                <Button
                    asChild
                    variant={pathName === '/ai' ? 'default' : 'outline'}>
                    <Link href='/ai'>
                        Czyt
                        <span className='font-bold text-fuchsia-700'>AI</span>
                    </Link>
                </Button>
                <Button
                    asChild
                    variant={pathName === '/add' ? 'default' : 'outline'}>
                    <Link href='/add'>Dodaj</Link>
                </Button>
                <Button
                    asChild
                    variant={pathName === '/browse' ? 'default' : 'outline'}>
                    <Link href='/browse'>Przeglądaj</Link>
                </Button>
            </div>
            <UserButton />
        </nav>
    )
}
