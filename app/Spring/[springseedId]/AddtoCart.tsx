'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { addToCart } from './actions';
import styles from './springseedId.module.scss';

type Props = {
  springseedId: number;
  quantity: number;
};

export default function AddtoCart(props: Props) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  return (
    <form className={styles.addthings}>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setQuantity(Number(event.currentTarget.value))
        }
      />

      <button
        formAction={async () => {
          router.refresh();
          await addToCart(props.springseedId, quantity);
        }}
      >
        Add to cart
      </button>
    </form>
  );
}
