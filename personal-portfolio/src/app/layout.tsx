import './globals.css'
import { Metadata } from 'next'
import Template from './template'

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
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Template>{children}</Template>
      </body>
    </html>
  )
}