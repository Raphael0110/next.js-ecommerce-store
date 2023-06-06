import { getCookie } from '../../utils/cookies';
import { parseJson } from '../../utils/json';
import styles from './zahlen.module.scss';

export default function Zahlenimkorb() {
  const springseedQuantityCookie = getCookie('cart');
  const springseedQuantities = !springseedQuantityCookie
    ? []
    : parseJson(springseedQuantityCookie);

  const quantity = springseedQuantities?.map((item) => item.quantity);
  const total = quantity?.reduce(
    (accumulator, currentNumber) => accumulator + currentNumber,
    0,
  );
  return <div className={styles.nummberofitemsincart}> {total}</div>;
}
