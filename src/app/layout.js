import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins(
  {
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ["400", "500", "600", "700", "800", "900"]
  })

export const metadata = {
  title: 'Abstract',
  description: 'Coded By Abdullah',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  )
}
