// Define an array of inventory items, each represented as an object with id, description, price, and type properties
const inventory = [
    { id: 1, description: "9 ft longboard surfboard", price: 499.99, type: "surfboard" },
    { id: 2, description: "5 ft shortboard surfboard", price: 399.99, type: "surfboard" },
    { id: 3, description: "Full wetsuit with hood and boots", price: 199.99, type: "clothing" },
    { id: 4, description: "Surfboard leash", price: 29.99, type: "gear" },
    { id: 5, description: "Surf wax", price: 9.99, type: "gear" },
    { id: 6, description: "Surfboard fins", price: 39.99, type: "gear" },
    { id: 7, description: "Rashguard shirt", price: 49.99, type: "clothing" },
    { id: 8, description: "Surfboard rack for car", price: 99.99, type: "gear" },
    { id: 9, description: "Beach towel", price: 24.99, type: "clothing" },
    { id: 10, description: "Surfboard repair kit", price: 19.99, type: "gear" }
];

// Function to check if an inventory item is a bargain (price less than $50)
const isBargain = (inventoryItem) => {
    // Initialize a variable to hold the return value, defaulting to false
    let returnValue = false;

    // Check if the item's price is less than $50.00
    if (inventoryItem.price < 50.00) {
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

// Iterate over each product in the inventory array
for (let surfProduct of inventory) {
    // Initialize an empty string to hold the message for the current product
    let message = "";

    // Check if the current product is clothing using the isClothing function
    if (isClothing(surfProduct)) {
        // Set the message to indicate that the current product is a clothing item
        message = `${surfProduct.description} is a clothing product`;
    }

    // Check if the current product is gear using the isGear function
    if (isGear(surfProduct)) {
        // Set the message to indicate that the current product is surfing gear
        message = `${surfProduct.description} is a surfing gear product`;
    }

    // Check if the current product is a surfboard using the isSurfboard function
    if (isSurfboard(surfProduct)) {
        // Set the message to indicate that the current product is a surfboard
        message = `${surfProduct.description} is a surfboard`;
    }

    // Check if the current product is a bargain using the isBargain function
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

// Iterate over each item in the inventory array
for (const item of inventory) {
    // Convert the current item data for accounting purposes using the convertDataForAccounting function
    const modifiedData = convertDataForAccounting(item);
    // Print the modified item data
    console.log(modifiedData);
}
