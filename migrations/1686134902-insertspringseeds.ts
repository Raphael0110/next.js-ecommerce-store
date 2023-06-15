import { Sql } from 'postgres';

export const springseeds = [
  {
    id: 1,
    name: 'Cauliflower',
    type: 'veggi',
    description:
      'Experience the magic of Stardew Valley with our premium cauliflower seeds! Grow delicious and vibrant white heads in your own garden. These high-quality seeds offer a quick grow time, allowing you to enjoy your bountiful harvest in no time. With affordable prices, you can start your cauliflower garden and indulge in mouthwatering dishes. Start your gardening adventure today!',
    preis: 80,
  },
  {
    id: 2,
    name: 'Potato',
    type: 'veggi',
    description:
      '"Fresh and nutritious, our potatoes are a staple crop for any aspiring farmer. These versatile tubers are known for their delicious taste and smooth texture. With a relatively short growth time of 6 days, youll be able to harvest your bountiful crop in no time. Perfect for a hearty meal or as an ingredient in your favorite recipes. Buy our high-quality potatoes today and experience the satisfaction of growing your own farm-fresh produce."',
    preis: 50,
  },
  {
    id: 3,
    name: 'Green Beans',
    type: 'veggi',
    description:
      'Discover the joy of growing fresh green beans with our premium seeds. These vibrant legumes offer a rapid growth time of just 10 days, ensuring a bountiful harvest in record time. Packed with flavor and essential nutrients, green beans are a versatile addition to your meals. From salads to stir-fries, unlock a world of culinary possibilities. Start your green bean journey today!',
    preis: 60,
  },
  {
    id: 4,
    name: 'Kale',
    type: 'veggi',
    description:
      "Discover the goodness of kale with our quality seeds. Grow nutritious kale in just 25 days. Packed with vitamins, minerals, and antioxidants, it's a superfood for a healthy lifestyle. Enjoy in salads, smoothies, and more. Start growing kale now!",
    preis: 70,
  },
  {
    id: 5,
    name: 'Parsnips',
    type: 'veggi',
    description:
      "Experience the delightful flavor of parsnips with our premium seeds. In just 10 days, you'll harvest tender and sweet parsnips that add a unique touch to your culinary creations. With their earthy and nutty taste, parsnips are perfect for roasting, soups, and stews. Begin your parsnip-growing journey today!",
    preis: 20,
  },
  {
    id: 6,
    name: 'Garlic',
    type: 'veggi',
    description:
      'Elevate your dishes with our aromatic garlic seeds. In 9 days, harvest flavorful bulbs to enhance any recipe. Versatile and robust, our garlic adds depth to sauces and roasted veggies. Start your garlic garden for rich, distinct flavors!',
    preis: 40,
  },
  {
    id: 7,
    name: 'Strawberries',
    type: 'frui',
    description:
      'Experience the delightful sweetness of our homegrown strawberries. These luscious berries are ready to pick in just 12 days, offering a burst of flavor in every bite. Enjoy them fresh as a healthy snack, or incorporate them into desserts and smoothies for a delightful treat. Cultivate your own strawberry patch and indulge in the taste of summer!',
    preis: 100,
  },
  {
    id: 8,
    name: 'Wild Horseradish',
    type: 'veggi',
    description:
      'Discover the thrill of foraging for wild horseradish, a spicy and pungent root that adds a bold kick to your culinary adventures. With its quick growth cycle of just 4 days, you can gather this flavorful ingredient from the untamed wilderness. Whether you use it in condiments, marinades, or as a unique seasoning, wild horseradish is sure to bring a wild and fiery flavor to your dishes!',
    preis: 35,
  },
  {
    id: 9,
    name: 'Leek',
    type: 'veggi',
    description:
      'Indulge in the delicate and subtle flavors of leek, a versatile vegetable that adds a touch of elegance to your culinary creations. With its graceful growth process spanning 6 days, you can cultivate these tender and aromatic stalks in your own garden. From comforting soups to vibrant stir-fries, leeks lend a unique depth of flavor to a wide range of dishes. Elevate your cooking with the enchanting taste of leek and savor the culinary possibilities it brings to your table!',
    preis: 35,
  },
];

export async function up(sql: Sql) {
  for (const springseed of springseeds) {
    await sql`
 INSERT INTO springseeds
 (name, type , description, preis)
 VALUES
 (${springseed.name}, ${springseed.type}, ${springseed.description}, ${springseed.preis})

  `;
  }
}

export async function down(sql: Sql) {
  for (const springseed of springseeds) {
    await sql`
DELETE FROM springseeds WHERE id = ${springseed.id}

  `;
  }
}
