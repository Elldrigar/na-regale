import { Speech } from 'lucide-react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/utils/auth'

const LandingPage = async () => {
    const session = await getServerSession(authOptions)
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <div className='mb-4 flex items-center rounded-full border bg-amber-100 p-3 uppercase shadow-lg'>
                    <Speech className='mr-4 h-10 w-10' />{' '}
                    <p>
                        <span className='text-red-500'>AI</span> will speak to
                        you
                    </p>
                    <Speech className='ml-4 h-10 w-10 scale-x-[-1]' />
                </div>
                <h1 className='md:test-6xl text center mb-6 text-4xl text-neutral-800'>
                    Wysłuchaj AI aj, aj ajjjj
                </h1>
                <div className='text-3xl'></div>
                {session ? <h1>JESTES ZALOGOWANY</h1> : <h1>ZALOGUJ SIĘ!</h1>}
            </div>
        </div>
    )
}

export default LandingPage
