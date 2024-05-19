import { Smooch_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'

const font = Smooch_Sans({
    subsets: ['latin'],
    weight: ['600']
})

interface HeaderProps {
    header: string
    label: string
}
export const Header = ({ header, label }: HeaderProps) => {
    return (
        <div className='flex w-full flex-col items-center justify-center gap-y-4'>
            <h1 className={cn('text-5xl font-semibold', font.className)}>
                {header}
            </h1>
            <p className='text-sm text-muted-foreground'>{label}</p>
        </div>
    )
}
