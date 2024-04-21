'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export const Navbar = () => {
    const pathName = usePathname()
    return (
        <nav className='flex w-[800px] justify-between rounded-xl bg-secondary p-4 shadow-xl'>
            <div>
                <Button
                    asChild
                    variant={pathName === '/settings' ? 'default' : 'outline'}>
                    <Link href='/settings'>Ustawienia</Link>
                </Button>
            </div>
            <p>User</p>
        </nav>
    )
}
