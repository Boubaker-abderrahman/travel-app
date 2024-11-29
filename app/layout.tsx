import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Hilink',
  description: 'Discover and Enjoy the World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <NavBar/>
        <main>
          {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
