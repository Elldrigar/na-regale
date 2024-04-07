import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { CardWrapper } from '@/components/auth/card-wrapper'

export const ErrorCard = () => {
    return (
        <CardWrapper
            header='Oops! Coś poszło nie tak!'
            backButtonHref='/auth/login'
            headerLabel='Spróbuj się zalogować jeszcze raz'
            backButtonLabel='Powrót do logowania'>
            <div className='flex w-full items-center justify-center'>
                <ExclamationTriangleIcon className='size-10 text-destructive' />
            </div>
        </CardWrapper>
    )
}
