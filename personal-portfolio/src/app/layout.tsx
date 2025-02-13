import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arman Fathabadi | Portfolio',
  description: 'Professional portfolio website of Arman Fathabadi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}