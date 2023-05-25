export const springseeds = [
  {
    id: 1,
    name: 'Cauliflower',
    type: 'veggi',
    growtime: 12,
    preis: 80,
  },
  {
    id: 2,
    name: 'Potato',
    type: 'veggi',
    growtime: 6,
    preis: 50,
  },
  {
    id: 3,
    name: 'Green Beans',
    type: 'veggi',
    growtime: 10,
    preis: 60,
  },
  { id: 4, name: 'Kale', type: 'veggi', growtime: 6, preis: 70 },
  {
    id: 5,
    name: 'Parsnips',
    type: 'veggi',
    growtime: 4,
    preis: 20,
  },
  {
    id: 6,
    name: 'Garlic',
    type: 'veggi',
    growtime: 4,
    preis: 40,
  },
  {
    id: 7,
    name: 'Strawberries',
    type: 'frui',
    growtime: 8,
    preis: 100,
  },
  {
    id: 8,
    name: 'Wild Horseradish',
    type: 'veggi',
    growtime: 7,
    preis: 35,
  },
  { id: 9, name: 'Leek', type: 'veggi', growtime: 7, preis: 35 },
];

export function getspringseedById(id) {
  return springseeds.find((springseed) => springseed.id === id);
}
