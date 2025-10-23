
import {cart} from "../data/cart.js";
import { products } from '../data/tops.js'; 


 

let productHTML = '';
products.forEach((product) => {
  productHTML += `
        <div class="container-size">
                <div class="sub-container-size">
                     <img class="image-size" src="${product.image}">
                        <div class="text-center">
                            <h3 class="cloth-name">${product.name}</h3>
                            <p class="cloth-price">Price: <span class="price-span">$${(
                              product.price / 100
                            ).toFixed(2)}</span></p>
                                <div class="mb-1">
                                    <p class="para-style added"></p>
                                    <button class="btn-outline js-add-to-cart" data-product-name ="${
                                      product.name
                                    }">purchase</button>
                                </div>
                        </div>
                </div>
        </div>
  `;
});

const productGrid = document.querySelector(".product-js");
productGrid.innerHTML = productHTML;

function addedToCart(productName) {
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

function updateCartQuantity() {
    let cartQuantity = 0;
      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });
       const cartQuantityHTML = document.querySelector(".cart-quantity");
        cartQuantityHTML.innerText = cartQuantity;
};
//message:Added to cart!
function cartAdded(addedMessage) {
  if (addedMessage) {
    addedMessage.innerText = "Added to cart!";
    setTimeout(() => {
      addedMessage.innerText = "";
    }, 1500);
  }
}


const addToCart = document.querySelectorAll(".js-add-to-cart");
addToCart.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.productName;
    addedToCart(productName);
    updateCartQuantity();

    //Added to cart!
    const addedMessage = button.parentElement.querySelector(".added");
    cartAdded(addedMessage);
    
  });
});
