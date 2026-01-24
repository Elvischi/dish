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

//Add To Cart
export function addedToCart(productName) {
  let matchedItem;
  cart.forEach((item) => {
    if (productName === item.productName) {
      matchedItem = item;
    }
  });
  if (matchedItem) {
    alert("Already Added To Your Cart")
  } else {
    cart.push({
      productName: productName,
      quantity: 1,
    });
  }

  saveToStorage();
};

//Delete From Cart
export function removeFromCart(productName) {
  const newCart = [];

  cart.forEach((deleteCartItem) => {
    if (deleteCartItem.productName !== productName) {
      newCart.push(deleteCartItem);
    }
  });

  cart = newCart;

  saveToStorage();
};
  
//cart increment
export function incrementCartItem(productName) {
  cart.forEach((item) => {
    if (item.productName === productName) {
      if(item.quantity >= 10) {
        return;
      }
      item.quantity += 1;
    }
  });
  saveToStorage();
};

//cart decrement
export function decrementCartItem(productName) {
  cart.forEach((decrement) => {
    if (decrement.productName === productName) {
      decrement.quantity -= 1;
    }
  });
  saveToStorage();
};

