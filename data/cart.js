export const cart = [
  {
    productName: "Skull Tee",
    quantity: 2,
  },
  {
    productName: "Wolf Tee",
    quantity: 1,
  },
];

export function addedToCart(productName) {
  let matchedItem;
  cart.forEach((item) => {
    if (productName === item.productName) {
      matchedItem = item;
    }
  });
  if (matchedItem) {
    matchedItem.quantity += 1;
  } else {
    cart.push({
      productName: productName,
      quantity: 1
    });
  }
};