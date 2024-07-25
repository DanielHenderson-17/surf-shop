const { inventory } = require("./data");
const { isBargain, isClothing, isGear, isSurfboard } = require("./functions");

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
