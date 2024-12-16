import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arthalfa - Empower Your Financial Influence',
  description: 'Streamline your financial advisory business with our all-in-one platform. Manage subscribers, send signals, and grow your community effortlessly.',
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
