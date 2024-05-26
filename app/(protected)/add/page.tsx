'use client'
import { UserRole } from '@prisma/client'
import { RoleGate } from '@/components/auth/role-gate'
import { FormSuccess } from '@/components/notification/form-success'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { adminActions } from '@/actions/admin-action'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel, FormMessage
} from '@/components/ui/form'
import { PostSchema } from '@/schemas'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type PostFormData = z.infer<typeof PostSchema>

const add = () => {
    const form = useForm<PostFormData>({
        resolver: zodResolver(PostSchema)
    })
    const onApiRouteClick = () => {
        fetch('/api/admin').then((response) => {
            if (response.ok) {
                toast.success('Masz dostęp!')
            } else {
                toast.error('Brak dostepu')
            }
        })
    }

    const onServerActionClick = () => {
        adminActions().then((data) => {
            if (data.error) {
                toast.error(data.error)
            }
            if (data.succes) {
                toast.success(data.succes)
            }
        })
    }

    const onSubmit = async (values: z.infer<typeof PostSchema>) => {
        console.log(values)
    }

    return (
        <div>
            <h1>DODAJ PAGE</h1>
            {/*<RoleGate allowedRole={UserRole.ADMIN}>*/}
            {/*    <FormSuccess message='Jesteś Adminem! Enjoy the power!' />*/}
            {/*</RoleGate>*/}
            {/*<RoleGate allowedRole={UserRole.USER}>*/}
            {/*    <FormSuccess message='Jesteś Adminem! Enjoy the power!' />*/}
            {/*</RoleGate>*/}

            {/*<Button onClick={onApiRouteClick}>Testuj API</Button>*/}
            {/*<Button onClick={onServerActionClick}>Testuj Server action</Button>*/}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='title'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tytuł</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='tytuł' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </div>
    )
}

export default add
