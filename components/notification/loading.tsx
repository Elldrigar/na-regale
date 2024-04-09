import { BarLoader } from 'react-spinners'

export const Loading = () => {
    return (
        <div className='flex items-center justify-center'>
            <BarLoader
                color='#1E5CB4'
                height={9}
                loading
                speedMultiplier={1}
                width={200}
            />
        </div>
    )
}
