import Link from 'next/link';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.navbar}>
      <ul>
        <li>
          <a href="http://localhost:3000/Spring">Spring</a>
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
      </ul>
    </main>
  );
}
