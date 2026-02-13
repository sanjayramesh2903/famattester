import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FAMAT Trivial',
  description: 'FAMAT problem trainer in a trivia-style format',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
