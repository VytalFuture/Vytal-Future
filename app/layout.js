import './globals.css'

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
        <link 
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=DM+Mono:wght@400;500&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
