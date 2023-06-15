'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../utils/cookies';
import { parseJson } from '../../utils/json';

export async function removeItem(item) {
  const springseedQuantityCookie = getCookie('cart');
  const springseedQuantities = !springseedQuantityCookie
    ? []
    : parseJson(springseedQuantityCookie);

  const removeFromCart = springseedQuantities.filter(
    (springseed) => springseed.id !== springseed.id,
  );
  await cookies().set('cart', JSON.stringify(removeFromCart));
}
