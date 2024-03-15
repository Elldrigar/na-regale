'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function SigninForm() {
    const [email, setEmail] = useState<null | string>(null)

    async function signInWithEmail() {
        const signInResult = await signIn('email', {
            email: email,
            callbackUrl: `${window.location.origin}`
        })
    }

    return (
        <form action={signInWithEmail}>
            <div className='flex flex-col gap-y-2'>
                <Label>E-mail</Label>
                <Input
                    onChange={(e) => setEmail(e.target.value)}
                    name='email'
                    type='email'
                    placeholder='name@test.pl'
                />
            </div>
            <Button type='submit' className='mt-4 w-full'>
                Zaloguj się E-Mailem
            </Button>
        </form>
    )
}
