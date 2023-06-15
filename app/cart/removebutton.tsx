'use client';
import { useRouter } from 'next/navigation';
import { removeItem } from './actions';
import styles from './cart.module.scss';

type Props = {
  springseed: number;
};

export default function RemoveButton(props: Props) {
  const router = useRouter();

  const handleRemoveItem = async () => {
    await removeItem(props.springseed);
    router.refresh();
  };

  return (
    <button
      className={styles.removebutton}
      name="remove-button"
      onClick={handleRemoveItem}
    >
      Remove
    </button>
  );
}
