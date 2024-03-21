'use client'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

export const SocialLogin = () => {
    return (
        <div className='flex w-full items-center gap-x-2'>
            <Button
                size='lg'
                className='w-full'
                variant='outline'
                onClick={() => {}}>
                <FcGoogle className='h-5 w-5' />
            </Button>
            <Button
                size='lg'
                className='w-full'
                variant='outline'
                onClick={() => {}}>
                <FaGithub className='h-5 w-5' />
            </Button>
        </div>
    )
}
