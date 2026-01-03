export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [
      {
        productName: "Skull Tee",
        quantity: 2,
      },
      {
        productName: "Wolf Tee",
        quantity: 1,
      },
    ];
  }
  
 

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
};

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
      quantity: 1,
    });
  }

  saveToStorage();
};

export function deleteFromCart(productName) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productName !== productName) {
      newCart.push(cartItem);
    }
  })
  cart = newCart;

  saveToStorage();
}
// Generate purchased items list
