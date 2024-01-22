import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PFTopBar from '@web/components/layout/PFTopBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Peasy Fit',
  description: 'Peasy Fit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className + ' dark'}>
        <PFTopBar/>
        {children}
      </body>
    </html>
  )
}
