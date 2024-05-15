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
import { useCurrentUser } from '@/hooks/use-current-user'
import { FormSuccess } from '@/components/notification/form-success'
import { FormError } from '@/components/notification/form-error'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectValue,
    SelectTrigger
} from '@/components/ui/select'
import {UserRole} from "@prisma/client";

const Settings = () => {
    const user = useCurrentUser()
    const [success, setSuccess] = useState<string | undefined>()
    const [error, setError] = useState<string | undefined>()
    const [isPending, startTransition] = useTransition()
    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues: {
            name: user?.name || undefined,
            email: user?.email || undefined,
            password: undefined,
            newPassword: undefined,
            role: user?.role || undefined,
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
                        className='test space-y-6'
                        onSubmit={form.handleSubmit(onSubmit)}>
                        <div className='space-y-4'>
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
                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>E-Mail</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder='E-Mail'
                                                type='email'
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='password'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder='******'
                                                type='password'
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='newPassword'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>New Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder='******'
                                                type='password'
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name='role'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Rola</FormLabel>
                                        <Select
                                            disabled={isPending}
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='Wybierz Role' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem
                                                    value={UserRole.ADMIN}>
                                                    Admin
                                                </SelectItem>
                                                <SelectItem
                                                    value={UserRole.USER}>
                                                    User
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormSuccess message={success} />
                        <FormError message={error} />
                        <Button disabled={isPending} type='submit'>
                            Update!
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default Settings
