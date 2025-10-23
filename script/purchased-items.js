const purchasedItems = [
  {
    id: "item1",
    image: "./image/skull.jpeg",
    name: "Skull Tee",
    price: 19.99,
    quantity: 2,
  },
  {
    id: "item1",
    image: "./image/omw.jpg",
    name: "omw",
    price: 50,
    quantity: 2,
  },
];
// Example item structure:
// {
//   id: 'item1',
//   name: 'Sample Item',
//   price: 19.99,
//   quantity: 2
// }
let purchasedItemsHTML = "";
purchasedItems.forEach((purchasedItem) => {
    purchasedItemsHTML += ` 
            <ul class="space-y-4">
                <li class="flex items-center justify-between space-x-4 p-4">
                    <img src=${
                      purchasedItem.image
                    } alt="skull" class="w-16 h-16 object-cover rounded-md">
                    <div class="flex items-center justify-items-centercenter space-x-4">
                        <h3 class="text-lg font-medium">${
                          purchasedItem.name
                        }</h3>
                        <p class="text-gray-600">$${purchasedItem.price.toFixed(
                          2
                        )}</p>
                        <button class="bg-gray-500 p-2 rounded-full">+</button> <span>1</span> <button class="bg-gray-500 p-3 rounded-full">-</button>
                    </div>
                </li><hr>
            </ul> `;
});
