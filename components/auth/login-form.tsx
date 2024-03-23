'use client'

import * as z from "zod"
import { CardWrapper } from '@/components/auth/card-wrapper'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from "@/schemas";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    FormLabel
} from '@/components/ui/form'

export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    return (
        <CardWrapper
            header='Nazwa Aplikacji'
            headerLabel='Welcome back'
            backButtonLabel='test'
            backButtonHref='test'
            showSocial>
            Login
        </CardWrapper>
    )
}
