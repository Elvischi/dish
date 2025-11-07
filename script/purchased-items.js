import { cart, deleteFromCart } from "../data/cart.js";
import { products } from "../data/tops.js";

let purchasedItemsHTML = '';
cart.forEach((purchasedItem) => {

  const productName = purchasedItem.productName;

  let matchingProduct;
  products.forEach((product) => {
    if (product.name === productName) {
      matchingProduct = product;
    };
  });
  
  purchasedItemsHTML += `
        <li class="flex items-center justify-between space-x-4 p-4 delete-items-${matchingProduct.name}">
                    <img src="${
                      matchingProduct.image
                    }" alt="skull" class="w-16 h-16 object-cover rounded-md">
                    <div class="flex items-center justify-items-centercenter space-x-4">
                        <h3 class="text-lg font-medium">"${
                          matchingProduct.name
                        }"</h3>
                        <p class="text-gray-600">$${(
                          matchingProduct.price / 100
                        ).toFixed(2)}</p>
                        <button class="bg-gray-500 p-2 rounded-full">+</button> <span>${
                          purchasedItem.quantity
                        }</span> <button class="bg-gray-500 p-3 rounded-full">-</button>
                        <button class="bg-gray-500 p-3 rounded-full hover:bg-gray-900 hover:text-white js-delete-btn" data-product-name ="${matchingProduct.name}">Delete</button>
                    </div>
        </li>
  `;
});

const purchasedItemsList = document.querySelector(".list-js");
purchasedItemsList.innerHTML = purchasedItemsHTML;

const deleteButtons = document.querySelectorAll(".js-delete-btn");
deleteButtons.forEach((link) => {
  link.addEventListener("click", () => {
    const productName = link.dataset.productName;
    deleteFromCart(productName);
     const deletedGoods = link.closest("li");
     if (deletedGoods) {
       deletedGoods.remove();
    }
    
    saveToStorage();
  });
});
