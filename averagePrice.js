// averagePrice.js

// Destructuring assignment to import the inventory array from the "data" module
const { inventory } = require("./data");

// Destructuring assignment to import the calculateAveragePrice function from the "functions" module
const { calculateAveragePrice } = require("./functions");

// Calculate the average price of all products in the inventory using the calculateAveragePrice function
const averagePrice = calculateAveragePrice(inventory);

// Print the average price of the products in the inventory
console.log(averagePrice);
