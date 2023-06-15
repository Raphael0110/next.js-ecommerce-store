import { parseJson } from '../../../utils/json';

export type ItemsInCart = {
  id: number;
  quantity: number;
};

export function updateQuantity(
  quantityInCart: string | undefined,
  springseedId: number,
  quantity: number,
) {
  const springseedQuantities = !quantityInCart ? [] : parseJson(quantityInCart);

  const springseedToUpdate = springseedQuantities?.find(
    (springseedQuantity) => {
      return springseedQuantity.id === springseedId;
    },
  );

  if (springseedToUpdate) {
    springseedToUpdate.quantity =
      Number(springseedToUpdate.quantity) + Number(quantity);
  } else {
    springseedQuantities?.push({
      id: springseedId,
      quantity: Number(quantity),
    });
  }

  return JSON.stringify(springseedQuantities);
}
