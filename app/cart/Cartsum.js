import { getspringseeds } from '../../databaseSpring/spring';
import { getCookie } from '../../utils/cookies';
import { parseJson } from '../../utils/json';
import styles from './cart.module.scss';

export default async function CartSum() {
  const springseeds = await getspringseeds();
  const springseedQuantityCookie = getCookie('cart');
  const springseedQuantities = !springseedQuantityCookie
    ? []
    : parseJson(springseedQuantityCookie);
  const springseedtWithQuantities = springseeds.map((springseed) => {
    const matchingValueFromCookie = springseedQuantities?.find(
      (springseedObject) => springseed.id === springseedObject.id,
    );
    return { ...springseed, quantity: matchingValueFromCookie?.quantity };
  });
  const springseedInCart = springseedtWithQuantities.filter(
    (item) => item.quantity,
  );

  const totalPrice = springseedInCart.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0,
  );
  return (
    <div className={styles.iteminthecardtotalprieses}>
      <h3>Cart Total</h3>
      <div>€{totalPrice}</div>
    </div>
  );
}
