'use client'

import { CardWrapper } from '@/components/auth/card-wrapper'
import { useSearchParams } from 'next/navigation'
import { useCallback, useState, useEffect } from 'react'
import { newVerification } from '@/actions/new-verification-action'
import { FormError } from '@/components/notification/form-error'
import { FormSuccess } from '@/components/notification/form-success'
import { Loading } from '@/components/notification/loading'

export const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()
    const searchParams = useSearchParams()
    const token = searchParams.get('token')

    const onSubmit = useCallback(() => {
        if (success || error) return

        if (!token) {
            setError('Nima tokena!')
            return
        }

        newVerification(token)
            .then((data) => {
                setSuccess(data.success)
                setError(data.error)
            })
            .catch(() => {
                setError('Coś poszło nie tak!')
            })
    }, [error, success, token])

    useEffect(() => {
        onSubmit()
    }, [onSubmit])

    return (
        <CardWrapper
            header='E-Mail Veryfikacja'
            headerLabel='Potwierdzenie twojej weryfikacji'
            backButtonLabel='Wróć do Logowania'
            backButtonHref='/auth/login'>
            <div className='flex w-full items-center justify-center'>
                {!success && !error && <Loading />}
                <FormSuccess message={success} />
                <FormError message={error} />
            </div>
        </CardWrapper>
    )
}
