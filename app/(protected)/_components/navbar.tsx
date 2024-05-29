'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { UserButton } from '@/components/auth/user-button'

const links = [
    { id: 1, label: 'Start', href: '/start' },
    { id: 2, label: 'Czytaj', href: '/ai' },
    { id: 3, label: 'Dodaj', href: '/add' },
    { id: 4, label: 'Przeglądaj', href: '/browse' }
]

export const Navbar = () => {
    const pathName = usePathname()
    return (
        <nav className='flex w-[1000px] justify-between rounded-xl bg-secondary p-4 shadow-xl'>
            <div className='flex gap-x-2'>
                {links.map((link) => (
                    <Button
                        key={link.id}
                        asChild
                        variant={
                            pathName === `${link.href}` ? 'default' : 'outline'
                        }>
                        <Link href={link.href}>{link.label}</Link>
                    </Button>
                ))}
            </div>
            <UserButton />
        </nav>
    )
}
