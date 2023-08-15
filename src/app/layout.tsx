'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { WagmiConfig } from 'wagmi'
import { ethereumClient, projectId, wagmiConfig } from './components/walletConnect/config'
import { Web3Modal } from '@web3modal/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BuyTicket',
  description: 'Superhack Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiConfig config={wagmiConfig}>

          
          {children}
          <Footer />

          <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </WagmiConfig>
        

      </body>

    </html>
  )
}