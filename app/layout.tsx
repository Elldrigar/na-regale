import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import AuthProvider from '@/app/(components)/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Title in progress...',
    description: '100 Commits'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <AuthProvider>
            <html lang='pl'>
                <body className={inter.className}>
                    {children}
                    <Toaster />
                </body>
            </html>
        </AuthProvider>
    )
}
