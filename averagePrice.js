// Destructuring assignment to import the inventory array from the "data" module
const { inventory } = require("./data");

// Destructuring assignment to import specific functions from the "functions" module
const { isBargain, isClothing, isGear, isSurfboard, convertDataForAccounting, calculateAveragePrice } = require("./functions");

// Iterate over each product in the inventory array
for (let surfProduct of inventory) {
  // Initialize an empty string to hold the message for the current product
  let message = "";

  // Check if the current product is a clothing item using the isClothing function
  if (isClothing(surfProduct)) {
    // Set the message to indicate that the current product is a clothing item
    message = `${surfProduct.description} is a clothing product`;
  }

  // Check if the current product is surfing gear using the isGear function
  if (isGear(surfProduct)) {
    // Set the message to indicate that the current product is surfing gear
    message = `${surfProduct.description} is a surfing gear product`;
  }

  // Check if the current product is a surfboard using the isSurfboard function
  if (isSurfboard(surfProduct)) {
    // Set the message to indicate that the current product is a surfboard
    message = `${surfProduct.description} is a surfboard`;
  }

  // Check if the current product is on sale using the isBargain function
  if (isBargain(surfProduct)) {
    // Set the message to indicate that the current product is on sale
    message = `${surfProduct.description} is currently on sale`;
  }

  // If a message was set, print the message
  if (message !== "") {
    console.log(message);
  }
}

console.log("\n------------------------\n");

// Iterate over each product in the inventory array
for (const product of inventory) {
  // Convert the current product data for accounting purposes using the convertDataForAccounting function
  const modifiedData = convertDataForAccounting(product);
  // Print the modified product data
  console.log(modifiedData);
}

console.log("\n------------------------\n");

// Calculate the average price of all products in the inventory using the calculateAveragePrice function
const averagePrice = calculateAveragePrice(inventory);

// Print the average price of the products in the inventory
console.log(averagePrice);
