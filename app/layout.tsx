import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Zahlenimkorb from './components/zahlen';
import styles from './layout.module.scss';

const poppins = Inter({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Pierres Shop',
  description: 'A Farmer Shop run by Pierrer',
};

type LayoutProps = {
  children: string;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className={styles.navbar}>
          <ul>
            <li>
              <a href="http://localhost:3000">Home</a>
            </li>
            <li>
              <a href="http://localhost:3000/spring">Spring</a>
            </li>
            <li>
              <a href="http://localhost:3000/Summer">Summer</a>
            </li>
            <li>
              <a href="http://localhost:3000/Fall">Fall</a>
            </li>
            <li>
              <a href="http://localhost:3000/Winter">Winter</a>
            </li>
            <li>
              <div>
                <a href="http://localhost:3000/cart">
                  <Image
                    className={styles.navbarbaskedimg}
                    src="/basked.png"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <span className={styles.basked}>
                    <Zahlenimkorb />
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}
