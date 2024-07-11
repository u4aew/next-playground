import { Open_Sans } from 'next/font/google';
import './globals.css';
import styles from './layout.module.scss';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header';

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
