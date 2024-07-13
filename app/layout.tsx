import { Open_Sans } from 'next/font/google';
import './globals.css';
import styles from './layout.module.scss';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header';
import { Metadata } from 'next';

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

export const metadata: Metadata = {
  title: 'Financial Exchange Platform',
  description:
    'A leading financial exchange platform for trading and investment.',
  keywords: 'financial, exchange, trading, investment, platform',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Financial Exchange Platform',
    description:
      'A leading financial exchange platform for trading and investment.',
    type: 'website',
    url: 'https://stock-exchange.fancy-app.site',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Financial Exchange Platform',
      },
    ],
  },
};
