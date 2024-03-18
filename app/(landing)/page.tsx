'use client'

import { Speech } from 'lucide-react'

import LogoutButton from '@/components/auth/LogoutButton'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const LandingPage = () => {
    const { data: session } = useSession()
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <div className='mb-4 flex items-center rounded-full border bg-amber-100 p-3 uppercase shadow-lg'>
                    <Speech className='mr-4 h-10 w-10' />{' '}
                    <p>
                        <span className='text-red-500'>AI</span> will speak to
                        you
                    </p>
                    <Speech className='ml-4 h-10 w-10 scale-x-[-1]' />
                </div>
                <h1 className='md:test-6xl text center mb-6 text-4xl text-neutral-800'>
                    Wysłuchaj AI aj, aj ajjjj
                </h1>
                <div className='text-3xl'></div>
                {session? (
                    <div>
                        <h1>JESTES ZALOGOWANY</h1>
                        <LogoutButton />
                        {console.log(session.user)}

                    </div>
                ) : (
                    <div>
                        <h1>ZALOGUJ SIĘ!</h1>
                        <Button asChild>
                            <Link href='/auth'>Zaloguj się</Link>
                        </Button>
                    </div>

                )}
            </div>
        </div>
    )
}

export default LandingPage
