import './globals.css'
import { Analytics } from '@vercel/analytics/next'

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
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}