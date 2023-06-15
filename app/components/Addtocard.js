'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../utils/cookies';
import { parseJson } from '../../utils/json';

export async function addQuantity(item) {
  const productQuantityCookie = getCookie('cart');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);
  const increase = productQuantities.find((product) => {
    return product.id === item.id;
  });
  increase.quantity += 1;
  await cookies().set('cart', JSON.stringify(productQuantities));
}
