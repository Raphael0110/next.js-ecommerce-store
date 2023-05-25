import Image from 'next/image';
import Link from 'next/link';
import { springseeds } from '../../databaseSpring/spring';
import styles from '../page.module.scss';

export default function Springpage() {
  return (
    <main>
      <a className={styles.navbarspring} href="http://localhost:3000/">
        home
      </a>
      <main className={styles.einkaufen}>
        {springseeds.map((springseed) => {
          return (
            <div
              key={`spring-div-${springseed.id}`}
              className={styles.seedItem}
            >
              <Image
                src={`/images/${springseed.name}.png`}
                width={30}
                height={30}
              />
              <section>
                <Link href={`/spring/${springseed.id}`}>{springseed.name}</Link>
                {springseed.preis}
              </section>
            </div>
          );
        })}
      </main>
    </main>
  );
}
