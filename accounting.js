// accounting.js

// Destructuring assignment to import the inventory array from the "data" module
const { inventory } = require("./data");

// Destructuring assignment to import the convertDataForAccounting function from the "functions" module
const { convertDataForAccounting } = require("./functions");

// Iterate over each product in the inventory array
for (const product of inventory) {
  // Convert the current product data for accounting purposes using the convertDataForAccounting function
  const modifiedData = convertDataForAccounting(product);
  // Print the modified product data
  console.log(modifiedData);
}
