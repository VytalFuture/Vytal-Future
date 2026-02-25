import { Rajdhani, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-d',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-b',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-m',
})

export const metadata = {
  title: 'Vytal Future — Own Your Health',
  description: 'Personalized health optimization for busy professionals. Wearable data, bloodwork, and AI-driven protocols to improve your Vytal Score.',
  keywords: ['health optimization', 'wearable tracking', 'biomarkers', 'wellness', 'performance'],
  metadataBase: new URL('https://vytalfuture.com'),
  openGraph: {
    title: 'Vytal Future — Own Your Health',
    description: 'Personalized health optimization for busy professionals.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vytal Future — Own Your Health',
    description: 'Personalized health optimization for busy professionals.',
  },
  robots: 'index, follow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}