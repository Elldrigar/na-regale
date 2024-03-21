'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'

interface CardWrapperProps {
    children: React.ReactNode
    header: string
    backButtonLabel: string
    backButtonHref: string
    showSocial?: boolean
}

export const CordWrapper = ({
    children,
    header,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {
    return <Card className='w-[500px] shadow-md'></Card>
}
