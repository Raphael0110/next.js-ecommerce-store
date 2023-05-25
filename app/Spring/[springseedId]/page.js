import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getspringseedById } from '../../../databaseSpring/spring';
import styles from '../../page.module.scss';

export const dynamic = 'force-dynamic';

export default async function springseedPage({ params }) {
  const singlespringseed = await getspringseedById(Number(params.springseedId));

  if (!singlespringseed) {
    notFound();
  }

  return (
    <main>
      <main className={styles.springseedIdnavbar}>
        <ul>
          <li>
            <a href="http://localhost:3000/">home</a>
          </li>
          <li>
            <a href="http://localhost:3000/Spring"> back </a>
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
      <section className={styles.springseedId}>
        <h1>{singlespringseed.name}</h1>
        <Image
          src={`/images/${singlespringseed.name}.png`}
          width={50}
          height={50}
        />
      </section>
    </main>
  );
}
