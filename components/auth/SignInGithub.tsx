'use client'

import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

export default function SignInGithub() {
    return (
        <Button onClick='' variant='secondary' className='mt-4'>
            Zaloguj się Githubem
            <Github className='ml-2 w-4 h-4' />
        </Button>
    )
}
