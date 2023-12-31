import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sandbox',
  description: 'A sandbox of re-useable react components',
  icons: {
    icon: '/icon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className='w-full min-h-screen flex justify-center items-center pt-[10em]'>
            {children}
        </main>
      </body>
    </html>
  )
}
