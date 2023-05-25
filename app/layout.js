import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import styles from './page.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pierres Shop',
  description: 'A Farmer Shop run by Pierrer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
