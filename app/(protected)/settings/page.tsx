'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { SettingsSchema } from '@/schemas'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { settingsAction } from '@/actions/settings-action'
import { useTransition, useState } from 'react'
import { Input } from '@/components/ui/input'
import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormLabel,
    FormDescription,
    FormMessage
} from '@/components/ui/form'

const settings = () => {
    const [success, setSuccess] = useState<string | undefined>()
    const [error, setError] = useState<string | undefined>()
    const [isPending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues: {
            name: ''
        }
    })

    const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
        startTransition(() => {
            settingsAction(values)
                .then((data) => {
                    if (data.error) {
                        setError(data.error)
                    }
                    if (data.success) {
                        setSuccess(data.success)
                    }
                })
                .catch(() => setError('Coś poszło nie tak!'))
        })
    }

    return (
        <Card className='w-[700px] shadow-md'>
            <CardHeader>
                <p className='text-center text-2xl font-semibold'>USTAWIENIA</p>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        className='space-y-6'
                        onSubmit={form.handleSubmit(onSubmit)}>
                        <div>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Imię</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder='Imię'
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type='submit'>Update!</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default settings
