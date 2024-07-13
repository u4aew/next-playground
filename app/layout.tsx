import { Open_Sans } from 'next/font/google';
import './globals.css';
import styles from './layout.module.scss';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header';
import { Metadata } from 'next';
import type { Viewport } from 'next';

const roboto = Open_Sans({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className={styles.layout}>
        <header className={styles.header}>
          <Header />
        </header>
        <main className={styles.main}>
          <div className={styles.content}>{children}</div>
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: '#2196f3',
};

export const metadata: Metadata = {
  title: {
    default: 'Financial Exchange Platform',
    template: '%s | Financial Exchange Platform',
  },
  description:
    'A leading financial exchange platform for trading and investment.',
  applicationName: 'Financial Exchange Platform',
  authors: [
    {
      name: 'Financial Exchange Team',
      url: 'https://stock-exchange.fancy-app.site',
    },
  ],
  metadataBase: new URL('https://stock-exchange.fancy-app.site'),
  generator: 'Next.js',
  keywords: ['financial', 'exchange', 'trading', 'investment', 'platform'],
  referrer: 'origin',
  creator: 'Financial Exchange Team',
  publisher: 'Financial Exchange Inc.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://stock-exchange.fancy-app.site',
    languages: {
      en: 'https://stock-exchange.fancy-app.site/en',
      es: 'https://stock-exchange.fancy-app.site/es',
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'Financial Exchange Platform',
    description:
      'A leading financial exchange platform for trading and investment.',
    type: 'website',
    url: 'https://stock-exchange.fancy-app.site',
    siteName: 'Financial Exchange Platform',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Financial Exchange Platform',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: 'Financial Exchange Platform',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
  abstract: 'A leading financial exchange platform for trading and investment.',
  category: 'Finance',
  classification: 'Financial Services',
  other: {
    'msapplication-TileColor': '#0a74da',
  },
};
