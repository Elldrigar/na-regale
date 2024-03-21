'use client'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Header } from '@/components/auth/card-header'
import { SocialLogin } from '@/components/auth/card-socials-login'
import { BackButton } from '@/components/auth/back-button'

interface CardWrapperProps {
    children: React.ReactNode
    header: string
    headerLabel: string
    backButtonLabel: string
    backButtonHref: string
    showSocial?: boolean
}

export const CardWrapper = ({
    children,
    header,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {
    return (
        <Card className='w-[600px] shadow-xl'>
            <CardHeader>
                <Header header={header} label={headerLabel} />
            </CardHeader>
            <CardContent>{children}</CardContent>
            {showSocial && (
                <CardFooter>
                    <SocialLogin />
                </CardFooter>
            )}
            <CardFooter className='justify-center'>
                <BackButton href={backButtonHref} label={backButtonLabel} />
            </CardFooter>
        </Card>
    )
}
