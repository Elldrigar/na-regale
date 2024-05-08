'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const settings = () => {
    return (
        <Card className='w-[700px] shadow-md'>
            <CardHeader>
                <p className='text-center text-2xl font-semibold'>USTAWIENIA</p>
            </CardHeader>
            <CardContent>
                <Button>Update</Button>
            </CardContent>
        </Card>
    )
}

export default settings
