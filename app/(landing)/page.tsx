import { Speech } from 'lucide-react'

const LandingPage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <div className='mb-4 flex items-center rounded-full border bg-amber-100 p-3 uppercase shadow-lg'>
                    <Speech className='mr-4 h-10 w-10' />{' '}
                    <p><span className='text-red-500 text-b'>AI</span> will speak to you</p>
                    <Speech className='ml-4 h-10 w-10 scale-x-[-1]' />
                </div>
                <h1 className='text-4xl md:test-6xl text center text-neutral-800 mb-6'>Wysłuchaj AI aj, aj ajjjj</h1>
                <div className='text-3xl'></div>
            </div>
        </div>
    )
}

export default LandingPage
