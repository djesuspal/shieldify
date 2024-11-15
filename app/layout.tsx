import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Denis Jesus Palma Abanto | Blockchain Security Expert & Former Solana Lead SRE',
  description: 'Denis Palma Abanto is a blockchain security expert and former Lead SRE at Solana. Founder of Shieldify, providing expert smart contract and dApp auditing services.',
  keywords: ['Denis Jesus Palma Abanto', 'Denis Palma Abanto', 'Blockchain Security', 'Smart Contract Audit', 'Solana SRE', 'Shieldify'],
  authors: [{ name: 'Denis Jesus Palma Abanto' }],
  openGraph: {
    title: 'Denis Jesus Palma Abanto | Blockchain Security Expert',
    description: 'Former Solana Lead SRE and founder of Shieldify, providing blockchain security auditing services.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
