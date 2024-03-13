import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Github, KeyRound } from 'lucide-react'


export default function AuthRoute() {
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <Card>
                <CardHeader className='text-center'>
                    <CardTitle>Prosimy o Zalogowanie się</CardTitle>
                    <CardDescription>Aby dostać się do Prywatnej strony musisz być zalogowany!</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='flex flex-col'>
                        <div className='flex flex-col gap-y-2'>
                            <Label>E-mail</Label>
                            <Input name='email' type='email' placeholder='name@test.pl'/>
                        </div>
                        <Button className='mt-4'>Zaloguj się E-Mailem</Button>
                        <p className='text-center mt-4'>LUB</p>
                        <Button variant='secondary' className='mt-4'>Zaloguj się Githubem<Github className='ml-2'/></Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}