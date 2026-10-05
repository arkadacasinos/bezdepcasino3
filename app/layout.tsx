import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Бездепозитный бонус за регистрацию в Bezdep Casino — бездепы и фриспины даром',
  description:
    'Bezdep Casino дарит бездепозитный бонус за регистрацию: бездеп бонусы, фриспины и бонусы в казино без пополнения. Получи бездеп за регистрацию и начни играть бесплатно.',
  alternates: {
    canonical: 'https://bezdepcasino3.vercel.app/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Бездепозитный бонус за регистрацию в Bezdep Casino',
    description:
      'Бездепозитные бонусы за регистрацию, бездеп бонусы и бонусы в казино без пополнения. Получи бездеп за регистрацию и начни играть бесплатно.',
    url: 'https://bezdepcasino3.vercel.app/',
    siteName: 'Bezdep Casino',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://bezdepcasino3.vercel.app/images/hero-casino.jpg',
        width: 1200,
        height: 670,
        alt: 'Бездепозитный бонус казино',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Бездепозитный бонус за регистрацию в Bezdep Casino',
    description:
      'Бездепозитные бонусы за регистрацию, бездеп бонусы и бонусы в казино без пополнения.',
    images: ['https://bezdepcasino3.vercel.app/images/hero-casino.jpg'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0b0f14',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
