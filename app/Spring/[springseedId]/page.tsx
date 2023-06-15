import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getspringseedById } from '../../../databaseSpring/spring';
import AddtoCart from './AddtoCart';
import styles from './springseedId.module.scss';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    springseedId: string;
  };
};

export type CookieQuantityItem = {
  id: number;
  comment?: number;
};

export default async function singlespringseedpage(props: Props) {
  const singlespringseed = await getspringseedById(
    Number(props.params.springseedId),
  );

  if (!singlespringseed) {
    notFound();
  }

  return (
    <main>
      <section className={styles.springseedId}>
        <h1>{singlespringseed.name}</h1>
        <Image
          className={styles.individualimage}
          src={`/images/${singlespringseed.name}.png`}
          width={50}
          height={50}
          alt="springseeds"
        />
        <div className={styles.seedsdescription}>
          {singlespringseed.description}
        </div>
        <div className={styles.moneyshow}>
          The price for 1 bag of {singlespringseed.name}seeds is
          <div className={styles.howmutchisthefish}>
            🪙{singlespringseed.preis}
          </div>
        </div>
        <div>
          <AddtoCart springseedId={singlespringseed.id} quantity={0} />
        </div>
      </section>
    </main>
  );
}
