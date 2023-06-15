import Image from 'next/image';
import Link from 'next/link';
import { getspringseeds } from '../../databaseSpring/spring';
import { getCookie } from '../../utils/cookies';
import { parseJson } from '../../utils/json';
import styles from './cart.module.scss';
import RemoveButton from './removebutton';

export const dynamic = 'force-dynamic';

export default async function CartPage() {
  const springseeds = await getspringseeds();
  const springseedQuantityCookie = getCookie('cart');
  const springseedQuantities = !springseedQuantityCookie
    ? []
    : parseJson(springseedQuantityCookie);
  const springseedWithQuantities = springseeds.map((springseed) => {
    const matchingValueFromCookie = springseedQuantities.find(
      (springseedObject) => springseed.id === springseedObject.id,
    );
    return { ...springseed, quantity: matchingValueFromCookie?.quantity };
  });
  const springseedInCart = springseedWithQuantities.filter(
    (item) => item.quantity,
  );
  const totalPrice = springseedInCart.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0,
  );

  return (
    <main>
      <div>
        {springseedInCart.length === 0 ? (
          <h1> Your cart is empty </h1>
        ) : (
          <div>
            <div className={styles.iteminthecardall}>
              {springseedInCart.map((springseed) => {
                let subTotal = 0;
                subTotal = springseed.quantity * springseed.preis;
                return (
                  <div
                    className={styles.iteminthecard}
                    key={`product-div-${springseed.id}`}
                  >
                    <div className={styles.iteminthecardimagediv}>
                      <Image
                        className={styles.iteminthecardimage}
                        src={`/images/${springseed.name}.png`}
                        width={40}
                        height={40}
                        alt=""
                      />
                    </div>

                    <Link
                      className={styles.iteminthecardname}
                      href={`/spring/${springseed.id}`}
                    >
                      {springseed.name}
                    </Link>
                    <Link href={`/spring/${springseed.id}`} />
                    <p className={styles.iteminthecardpries}>
                      € {springseed.preis}
                    </p>
                    <p className={styles.strich}>|</p>
                    <div className={styles.iteminthecardtotalpries}>
                      €{subTotal}
                    </div>

                    <RemoveButton />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div>
        <Link href="http://localhost:3000/checkout">checkout</Link>
      </div>
    </main>
  );
}
