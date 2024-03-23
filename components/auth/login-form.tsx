'use client'

import * as z from 'zod'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/schemas'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    FormLabel
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    return (
        <CardWrapper
            header='Nazwa Aplikacji'
            headerLabel='Welcome back'
            backButtonLabel='test'
            backButtonHref='test'
            showSocial>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(() => {})}
                    className='space-y-6'>
                    <div className='space-y-4'>
                        <FormField
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder='email@email.pl'
                                            type='email'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </form>
            </Form>
        </CardWrapper>
    )
}
