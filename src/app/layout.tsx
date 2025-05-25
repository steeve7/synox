import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/HomeLayout/Header'
import Footer from '../components/HomeLayout/Footer'
import { Providers } from '../redux/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Synox',
  description: 'Online Banking System ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
        <div className={inter.className}>{children}</div>
        <Footer />
        </Providers>
      </body>
    </html>
  )
}
