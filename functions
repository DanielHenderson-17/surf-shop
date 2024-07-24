// Function to check if an inventory item is a bargain (price less than $50)
const isBargain = (inventoryItem) => {
  // Initialize a variable to hold the return value, defaulting to false
  let returnValue = false;

  // Check if the item's price is less than $50.00
  if (inventoryItem.price < 50.0) {
    // Set the return value to true if the condition is met
    returnValue = true;
  }

  // Return the final value of returnValue (true if the item is a bargain, false otherwise)
  return returnValue;
};

// Function to check if an item is clothing
const isClothing = (item) => {
  // Initialize a variable to hold the return value, defaulting to false
  let returnValue = false;

  // Check if the item's type is "clothing"
  if (item.type === "clothing") {
    // Set the return value to true if the condition is met
    returnValue = true;
  }

  // Return the final value of returnValue (true if the item is clothing, false otherwise)
  return returnValue;
};

// Function to check if an item is a surfboard
const isSurfboard = (item) => {
  // Initialize a variable to hold the return value, defaulting to false
  let returnValue = false;

  // Check if the item's type is "surfboard"
  if (item.type === "surfboard") {
    // Set the return value to true if the condition is met
    returnValue = true;
  }

  // Return the final value of returnValue (true if the item is a surfboard, false otherwise)
  return returnValue;
};

// Function to check if an item is gear
const isGear = (gear) => {
  // Initialize a variable to hold the return value, defaulting to false
  let returnValue = false;

  // Check if the item's type is "gear"
  if (gear.type === "gear") {
    // Set the return value to true if the condition is met
    returnValue = true;
  }

  // Return the final value of returnValue (true if the item is gear, false otherwise)
  return returnValue;
};

// Function to convert product data for accounting purposes
const convertDataForAccounting = (product) => {
  // Convert the product's description, type, and price to a single uppercase string
  const allUpperCase = `${product.description.toUpperCase()} - ${product.type.toUpperCase()} - ${product.price}`;
  // Return the converted string
  return allUpperCase;
};

// Function to calculate the average price of an array of products
const calculateAveragePrice = (products) => {
  // Initialize an array to hold the prices of all products
  const allPrices = [];
  // Iterate over each product in the products array
  for (const product of products) {
    // Add the product's price to the allPrices array
    allPrices.push(product.price);
  }
  // Initialize a variable to hold the sum of all prices, starting at 0
  let totalSum = 0;
  // Iterate over each price in the allPrices array
  for (const price of allPrices) {
    // Add the current price to the total sum
    totalSum += price;
  }
  // Calculate the average price by dividing the total sum by the number of products
  const averagePrice = totalSum / products.length;
  // Return the calculated average price
  return averagePrice;
};

// Export the functions to be used in other modules
module.exports = {
  isBargain, isClothing, isGear,
  isSurfboard, convertDataForAccounting,
  calculateAveragePrice
};
