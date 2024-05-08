'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { settingsAction } from '@/actions/settings-action'
import { useTransition } from 'react'

const settings = () => {
    const [isPending, startTransition] = useTransition()
    const onClick = () => {
        startTransition(() => {
            settingsAction({
                name: 'new name!'
            })
        })
    }
    return (
        <Card className='w-[700px] shadow-md'>
            <CardHeader>
                <p className='text-center text-2xl font-semibold'>USTAWIENIA</p>
            </CardHeader>
            <CardContent>
                <Button disabled={isPending} onClick={onClick}>
                    Update
                </Button>
            </CardContent>
        </Card>
    )
}

export default settings
