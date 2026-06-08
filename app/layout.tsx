import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OnePath Lab — AI-Powered Pathology Lab Software',
  description: 'AI-powered Lab Information System. Trusted by NABL Labs across India.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}