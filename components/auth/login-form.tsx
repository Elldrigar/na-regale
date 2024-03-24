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
import {Button} from "@/components/ui/button";

export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        console.log(values)
    }

    return (
        <CardWrapper
            header='Nazwa Aplikacji'
            headerLabel='Welcome back'
            backButtonLabel='test'
            backButtonHref='test'
            showSocial>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(() => onSubmit)}
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
                        <FormField
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder='******'
                                            type='password'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type='submit' className='w-full' >Login</Button>
                </form>
            </Form>
        </CardWrapper>
    )
}
