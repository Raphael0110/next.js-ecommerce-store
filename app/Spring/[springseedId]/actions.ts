'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../utils/cookies';
import { parseJson } from '../../../utils/json';

export async function addToCart(springseedId: number, quantity: string) {
  // 1. get the current cookie
  // This get the cookies from the Request Headers
  const springseedQuantityCookie = getCookie('cart');
  // 2. we parse the cookie
  const springseedQuantitys = !springseedQuantityCookie
    ? // case A: cookie is undefined
      // undefined
      // we need to create the new array with the fruitCommnet inside
      []
    : parseJson(springseedQuantityCookie);

  // 3. we edit the object

  // We get the object for the fruit in cookies or undefined
  const springseedToUpdate = springseedQuantitys?.find((springseedQuantity) => {
    return springseedQuantity.id === springseedId;
  });

  // case B: the cookie is defined but have the fruit in the action
  // if we are in fruit 1
  // [{id:1, comment:"abc"}]
  if (springseedToUpdate) {
    // we need to update the fruitComment
    springseedToUpdate.quantity =
      Number(springseedToUpdate.quantity) + Number(quantity);
  } else {
    // case C: the cookie is defined but doesn't have the fruit in the action
    // if we are in fruit 1
    // [{id:2, comment:"abc"}]
    //
    // WARNING: Be careful of using the exclamation mark
    // Only use it if you know that you want the error!
    springseedQuantitys!.push({
      // we need insert the fruitCommnet
      id: springseedId,
      quantity: Number(quantity),
    });
  }

  // 4. we override the cookie
  // This set the cookies into the Response Headers
  await cookies().set('cart', JSON.stringify(springseedQuantitys));
}
