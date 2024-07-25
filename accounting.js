const { inventory } = require("./data");
const { convertDataForAccounting } = require("./functions");

// Iterate over each product in the inventory array
for (const product of inventory) {
  // Convert the current product data for accounting purposes using the convertDataForAccounting function
  const modifiedData = convertDataForAccounting(product);
  // Print the modified product data
  console.log(modifiedData);
}
