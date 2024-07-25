const { inventory } = require("./data");
const { calculateAveragePrice } = require("./functions");

// Calculate the average price of all products in the inventory using the calculateAveragePrice function
const averagePrice = calculateAveragePrice(inventory);

// Print the average price of the products in the inventory
console.log(averagePrice);
