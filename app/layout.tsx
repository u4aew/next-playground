'use client';

import './globals.css';
import styles from './layout.module.scss';
import Footer from '@/components/Footer/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.layout}>
        <div className={styles.header}>Header</div>
        <div className={styles.main}>
          <div className={styles.sidebar}>sidebar</div>
          <div className={styles.content}>{children}</div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
