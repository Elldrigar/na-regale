'use client'

import * as z from 'zod'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
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
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/notification/form-error'
import { FormSuccess } from '@/components/notification/form-success'
import { loginAction } from '@/actions/login-action'
import { useState, useTransition } from 'react'
import { useSearchParams } from 'next/navigation'
import { data } from 'autoprefixer'

export const LoginForm = () => {
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const [showTwoFactor, setShowTwoFactor] = useState<boolean>(false)
    const searchParams = useSearchParams()
    const urlError =
        searchParams.get('error') === 'OAuthAccountNotLinked'
            ? 'Email już użyty!'
            : ''

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError('')
        setSuccess('')

        startTransition(() => {
            loginAction(values)
                .then((data) => {
                    if (data?.error) {
                        form.reset()
                        setError(data?.error)
                    }
                    if (data?.success) {
                        form.reset()
                        setSuccess(data?.success)
                    }
                    if (data?.twoFactor) {
                        setShowTwoFactor(true)
                    }
                })
                .catch(() => setError('Coś poszło nie tak'))
        })
    }

    return (
        <CardWrapper
            header='Nazwa Aplikacji(LOG)'
            headerLabel='Welcome back'
            backButtonLabel='test'
            backButtonHref='register'
            showSocial>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'>
                    <div className='space-y-4'>
                        {showTwoFactor && (
                            <FormField
                                name='code'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>2FA kod</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isPending}
                                                {...field}
                                                placeholder='123456'
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                        {!showTwoFactor && (
                            <>
                                <FormField
                                    name='email'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={isPending}
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
                                                    disabled={isPending}
                                                    {...field}
                                                    placeholder='******'
                                                    type='password'
                                                />
                                            </FormControl>
                                            <Button
                                                size='sm'
                                                variant='link'
                                                asChild
                                                className='px-0 font-light'>
                                                <Link href='/auth/reset'>
                                                    Zapomniałeś hasła? 😎
                                                </Link>
                                            </Button>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        )}
                    </div>
                    <FormError message={error || urlError} />
                    <FormSuccess message={success} />
                    <Button
                        type='submit'
                        className='w-full'
                        disabled={isPending}>
                        {showTwoFactor ? 'Powtierdź' : 'Zaloguj'}
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}
