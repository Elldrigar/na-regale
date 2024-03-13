'use client'

import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { signIn } from 'next-auth/react'

export default function SignInGithub() {
    return (
        <Button
            onClick={() =>
                signIn('github', { callbackUrl: `${window.location.origin}` })
            }
            variant='secondary'
            className='mt-4'>
            Zaloguj się Githubem
            <Github className='ml-2 h-4 w-4' />
        </Button>
    )
}
