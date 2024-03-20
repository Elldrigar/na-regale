import { Button } from '@/components/ui/button'
import { Roboto, Smooch_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Smooch_Sans({
    weight: '200',
    subsets: ['latin']
})

export default function Landing() {
    return (
        <main className='flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-700 to-violet-900'>
            <div className='space-y-6 text-center'>
                <h1
                    className={cn(
                        'text-8xl font-semibold text-white drop-shadow-md',
                        font.className
                    )}>
                    Voice of Artificial Intelligence
                </h1>
                <p className='text-lg text-white'>During your meetings with the team</p>
                <div>
                    <Button size='lg' variant='secondary'>
                       🤖 Start Here
                    </Button>
                </div>
            </div>
        </main>
    )
}
