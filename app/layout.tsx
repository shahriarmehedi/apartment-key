import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'


const manrope = Manrope({ subsets: ['latin'] })


export const metadata: Metadata = {
    title: 'Apartment Key - Houston Apartment Locators | Fast, Free & Fun',
    description: 'Find your perfect Houston apartment with Apartment Key. 100% free for renters. Expert locators with 11+ years experience. Houston apartments made easy.',
    keywords: 'Houston apartment locators, Houston apartments, free apartment locating, find Houston apartments, apartment search Houston',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/Done-03.png" type="image/png" />
            </head>
            <body className={manrope.className}>{children}</body>
        </html>
    )
}
