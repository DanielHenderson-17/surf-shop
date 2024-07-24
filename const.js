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

// Function to check if an item is a surfboard
const isSurfboard = (item) => {
    // Return true if the item's type is "surfboard"
    return item.type === "surfboard";
};

// Function to check if an item is a bargain (price less than $50)
const isBargain = (inventoryItem) => {
    // Return true if the item's price is less than $50.00
    return inventoryItem.price < 50.00;
};

// Function to check if an item is clothing
const isClothing = (item) => {
    // Return true if the item's type is "clothing"
    return item.type === "clothing";
};

// Function to check if an item is gear
const isGear = (gear) => {
    // Return true if the item's type is "gear"
    return gear.type === "gear";
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

    // Check if the current product is a bargain using the isBargain function
    if (isBargain(surfProduct)) {
        // Set the message to indicate that the current product is on sale
        message = `${surfProduct.description} is currently on sale`;
    }

    // Check if the current product is a surfboard using the isSurfboard function
    if (isSurfboard(surfProduct)) {
        // Set the message to indicate that the current product is a surfboard
        message = `${surfProduct.description} is a surfboard`;
    }

    // Check if the current product is gear using the isGear function
    if (isGear(surfProduct)) {
        // Set the message to indicate that the current product is surfing gear
        message = `${surfProduct.description} is a surfing gear product`;
    }

    // If a message was set, print the message
    if (message !== "") {
        console.log(message);
    }
}
