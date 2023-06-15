import Image from 'next/image';
import Link from 'next/link';
import { getspringseeds } from '../../databaseSpring/spring.ts';
import styles from './springpage.module.scss';

export default async function Springpage() {
  const springseeds = await getspringseeds();
  return (
    <>
      <main className={styles.einkaufen}>
        {springseeds.map((springseed) => {
          return (
            <main
              className={styles.backgroungichnixwill}
              key={`spring-div-${springseed.id}`}
            >
              <ul className={styles.listitemsinspring}>
                <li>
                  <Image
                    className={styles.photoslistspring}
                    src={`/images/${springseed.name}.png`}
                    width={40}
                    height={40}
                  />
                </li>
                <li className={styles.springseedname}>
                  <Link href={`/spring/${springseed.id}`}>
                    {springseed.name}
                  </Link>
                </li>
                <li>🪙{springseed.preis}</li>
              </ul>
            </main>
          );
        })}
      </main>
      <div>
        <Image src="/Krobus_Trenchcoat.png" alt="s" width={30} height={30} />
      </div>
    </>
  );
}
