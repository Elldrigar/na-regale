import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import SignInGithub from '@/components/auth/SignInGithub'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/utils/auth'
import { redirect } from 'next/navigation'
import SigninForm from '@/components/auth/SigninForm'

export default async function AuthRoute() {
    const session = await getServerSession(authOptions)

    if (session) {
        return redirect('/')
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <Card>
                <CardHeader className='text-center'>
                    <CardTitle>Prosimy o Zalogowanie się</CardTitle>
                    <CardDescription>
                        Aby dostać się do Prywatnej strony musisz być
                        zalogowany!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='flex flex-col'>
                        <SigninForm />
                        <p className='mt-4 text-center'>LUB</p>
                        <SignInGithub />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
