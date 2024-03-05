const LandingPage = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-full bg-sky-300'>
            {/* NAVBAR */}
            <main className='pb-20 pt-40'>{children}</main>
            {/* FOOTER */}
        </div>
    )
}

export default LandingPage
