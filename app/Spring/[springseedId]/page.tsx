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
        <p>
          if you want to grow {singlespringseed.name} you need to wait at least
          {singlespringseed.growtime} days
        </p>
        <br />
        the price for 1 bag of {singlespringseed.name}seeds is
        {singlespringseed.preis}
      </section>
      <div>
        <AddtoCart springseedId={singlespringseed.id} />
      </div>
    </main>
  );
}
