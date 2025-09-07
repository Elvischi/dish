"use strict";

const products = [
  {
    image: "./image/skull.jpeg",
    name: "Skull Tee",
    price: 5000
  },
  {
    image: "./image/omw.jpg",
    name: "Regular Fit Shortsleeve",
    price: 5000
  },
  {
    image: "./image/under black.jpeg",
    name: "Underworld Tees",
    price: 5000
  },
  {
    image: "./image/omw update black.jpeg",
    name: "Graphics Tees",
    price: 5000
  },
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
                                    <p class="para-style"></p>
                                    <button  class="btn-outline">Purchase</button>
                                </div>
                        </div>
                </div>
            </div>
    `;
});

const productGrid = document.querySelector('.product-js');
productGrid.innerHTML = productHTML;