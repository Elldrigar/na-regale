import { Speech } from 'lucide-react'

const LandingPage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-b mb-4 flex items-center rounded-full border bg-amber-100 p-3 uppercase shadow-lg'>
                    <Speech className='mr-4 h-10 w-10' />{' '}
                    <p>Zamień tekst na mowę</p>
                    <Speech className='ml-4 h-10 w-10 scale-x-[-1]' />
                </div>
            </div>
        </div>
    )
}

export default LandingPage
