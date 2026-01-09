import { cart, removeFromCart } from "../data/cart.js";
import { products } from "../data/tops.js";

let cartSummaryHTML = "";
cart.forEach((cartItem) => {

  const cartProduct = cartItem.productName

  let matchingProduct;

  products.forEach((product) => {
    if (product.name === cartProduct) {
      matchingProduct = product
    }
    
  })
  

  cartSummaryHTML += `
    <div class="p-4 bg-white shadow-lg js-cart-item-container" data-product-name="${matchingProduct.name}">
      <p class="text-green-500 font-bold">
        Delivery date: Tuesday, June 21
      </p>
      <div class="grid grid-cols-3 gap-8 mt-3">
        <div>
          <img src="${matchingProduct.image}" class="rounded-2xl" />
        </div>
        <div>
          <h2 class="font-semibold capitalize">${matchingProduct.name}</h2>
          <p class="text-red-400">$${(matchingProduct.price / 100).toFixed(
            2
          )}</p>
          <p>
            Quantity:${
              cartItem.quantity
            } <span class="text-blue-400 cursor-pointer">-</span>
            <span class="text-blue-400 cursor-pointer">+</span><br />
            <span class="text-blue-400 cursor-pointer js-delete-link" data-product-name="${matchingProduct.name}">Delete</span>
          </p>
        </div>
        <div>
          <h2 class="font-bold">Choose a delivery Option:</h2>
          <div class="flex space-x-3">
            <input type="radio" name="delivery-option-${
              matchingProduct.name
            }" />
            <p>
              <span class="text-green-600 font-bold"
                >Tuesday, June 21</span
              ><br />
              FREE Shipping
            </p>
          </div>
          <div class="flex space-x-3">
            <input type="radio" name="delivery-option-${
              matchingProduct.name
            }" />
            <p>
              <span class="text-green-600 font-bold"
                >Wednesday, June 15</span
              ><br />
              $4.99 - Shipping
            </p>
          </div>
          <div class="flex space-x-3">
            <input type="radio" name="delivery-option-${
              matchingProduct.name
            }" />
            <p>
              <span class="text-green-600 font-bold">Monday, June 13</span
              ><br />
              $9.99 - Shipping
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
});

const displayHtml = document.querySelector('.list-js');
displayHtml.innerHTML = cartSummaryHTML;

// delete item
const deleteItem = document.querySelectorAll(".js-delete-link");

deleteItem.forEach((link) => {
  link.addEventListener('click', () => {
    const deleteName = link.dataset.productName;
    removeFromCart(deleteName); 
    const container = link.closest('.js-cart-item-container');

    container.remove();
   });
  });