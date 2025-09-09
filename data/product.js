"use strict";

const products = [
  {
    image: "./image/skull.jpeg",
    name: "Skull Tee",
    price: 5000,
  },
  {
    image: "./image/omw.jpg",
    name: "Regular Fit Shortsleeve",
    price: 5000,
  },
  {
    image: "./image/under black.jpeg",
    name: "Underworld Tees",
    price: 5000,
  },
  {
    image: "./image/omw update black.jpeg",
    name: "Graphics Tees",
    price: 5000,
  },
  {
    image: "./image/armless.jpg",
    name: "Armless Piece",
    price: 5000,
  },
  {
    image: "./image/shortsleeves.jpg",
    name: "Brand T-Shirt Shortsleeves",
    price: 5000,
  },
  {
    image: "./image/smoke black.jpeg",
    name: "Deep Thoughts Tees",
    price: 5000,
  },
  {
    image: "./image/wolf tee.jpg",
    name: "Wolf Tee",
    price: 5000
  }
];

let productHTML = '';
products.forEach((product) => {
  productHTML += `
        <div class="container-size">
                <div class="sub-container-size">
                     <img class="image-size" src="${product.image}" alt="cloth-image">
                        <div class="text-center">
                            <h3 class="cloth-name">${product.name}</h3>
                            <p class="cloth-price">Price: <span class="price-span">$${(product.price / 100).toFixed(2)}</span></p>
                                <div class="mb-1">
                                    <p class="para-style added"></p>
                                    <button class="btn-outline js-add-to-cart" data-product-name ="${product.name}">Purchase</button>
                                </div>
                        </div>
                </div>
            </div>
    `;
});

const productGrid = document.querySelector('.product-js');
productGrid.innerHTML = productHTML;

const addToCart = document.querySelectorAll('.js-add-to-cart');
addToCart.forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.productName;

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

    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });
    const cartQuantityHTML = document.querySelector('.cart-quantity');
    cartQuantityHTML.innerText = cartQuantity;
    //Added to cart!
     const addedMessage = button.parentElement.querySelector(".added");
     if (addedMessage) {
       addedMessage.innerText = "Added to cart!";
       setTimeout(() => {
         addedMessage.innerText = "";
       }, 1000);
    };
  });
});