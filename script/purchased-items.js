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
        <div class="p-4 bg-white shadow-lg delete-from-cart delete-items-${
          matchingProduct.name
        }">
            <p class="text-green-500 font-bold">
              Delivery date: Tuesday, June 21
            </p>
            <div class="grid grid-cols-3 gap-8 mt-3 del">
              <div>
                <img src="${matchingProduct.image}" class="rounded-2xl" />
              </div>
              <div>
                <h2 class="font-semibold capitalize">${
                  matchingProduct.name
                }</h2>
                <p class="text-red-400">$${(
                  matchingProduct.price / 100
                ).toFixed(2)}</p>
                <p>
                  Quantity:${
                    purchasedItem.quantity
                  } <button class="text-blue-400">Update</button>
                  <button class="text-blue-400 js-delete-btn" data-product-name="${
                    matchingProduct.name
                  }">Delete</button>
                </p>
              </div>
              <div>
                <h2 class="font-bold">Choose a delivery Option:</h2>
                <div class="flex space-x-3">
                  <input type="radio" />
                  <p>
                    <span class="text-green-600 font-bold"
                      >Tuesday, June 21</span
                    ><br />
                    FREE Shipping
                  </p>
                </div>
                <div class="flex space-x-3">
                  <input type="radio" />
                  <p>
                    <span class="text-green-600 font-bold"
                      >Wednesday, June 15</span
                    ><br />
                    $4.99 - Shipping
                  </p>
                </div>
                <div class="flex space-x-3">
                  <input type="radio" />
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

const purchasedItemsList = document.querySelector(".list-js");
purchasedItemsList.innerHTML = purchasedItemsHTML;

const deleteButtons = document.querySelectorAll(".js-delete-btn");
deleteButtons.forEach((link) => {
  link.addEventListener("click", () => {
    const productName = link.dataset.productName;
    deleteFromCart(productName);
     const deletedGoods = link.closest(".delete-from-cart");
     if (deletedGoods) {
       deletedGoods.remove();
    }
    
    saveToStorage();
  });
});


  //old version
        // <li class="flex items-center justify-between space-x-4 p-4 delete-items-${
        //   matchingProduct.name
        // }">
        //             <img src="${
        //               matchingProduct.image
        //             }" alt="skull" class="w-16 h-16 object-cover rounded-md">
        //             <div class="flex items-center justify-items-centercenter space-x-4">
        //                 <h3 class="text-lg font-medium">"${
        //                   matchingProduct.name
        //                 }"</h3>
        //                 <p class="text-gray-600">$${(
        //                   matchingProduct.price / 100
        //                 ).toFixed(2)}</p>
        //                 <button class="bg-gray-500 p-2 rounded-full">+</button> <span>${
        //                   purchasedItem.quantity
        //                 }</span> <button class="bg-gray-500 p-3 rounded-full">-</button>
        //                 <button class="bg-gray-500 p-3 rounded-full hover:bg-gray-900 hover:text-white js-delete-btn" data-product-name ="${
        //                   matchingProduct.name
        //                 }">Delete</button>
        //             </div>
        // </li>