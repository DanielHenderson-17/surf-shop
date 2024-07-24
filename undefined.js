// Define an array of inventory items, each represented as an object with id, description, price, and type properties
const inventory = [
    { id: 1, description: "9 ft longboard surfboard", price: 499.99, type: "surfboard" },
    { id: 2, description: "5 ft shortboard surfboard", price: 399.99, type: "surfboard" },
    { id: 3, description: "Full wetsuit with hood and boots", price: 199.99, type: "clothing" },
    { id: 4, description: "Surfboard leash", price: 29.99, type: "surfboard" },
    { id: 5, description: "Surf wax", price: 9.99, type: "surfboard" },
    { id: 6, description: "Surfboard fins", price: 39.99, type: "surfboard" },
    { id: 7, description: "Rashguard shirt", price: 49.99, type: "clothing" },
    { id: 8, description: "Surfboard rack for car", price: 99.99, type: "surfboard" },
    { id: 9, description: "Beach towel", price: 24.99, type: "clothing" },
    { id: 10, description: "Surfboard repair kit", price: 19.99, type: "surfboard" }
];

// Function to check if an inventory item is a bargain (price less than $50)
const isBargain = (inventoryItem) => {
    // Check if the item's price is less than $50.00
    if (inventoryItem.price < 50.00) {
        // Return true if the condition is met
        return true;
    }

    // Return false if the condition is not met
    return false;
};

// Function to check if an item is clothing
const isClothing = (item) => {
    // Check if the item's type is "clothing"
    if (item.type === "clothing") {
        // Return true if the condition is met
        return true;
    }

    // Return false if the condition is not met
    return false;
};

// Function to check if an item is gear (in this case, surfboard)
const isGear = (gear) => {
    // Check if the item's type is "surfboard"
    if (gear.type === "surfboard") {
        // Return true if the condition is met
        return true;
    }

    // Return false if the condition is not met
    return false;
};

// Iterate over each product in the inventory array
for (const surfProduct of inventory) {
    // Print the description of the current product
    console.log(surfProduct.description);

    // Check if the current product is a bargain using the isBargain function
    if (isBargain(surfProduct)) {
        // Print that the product is on sale
        console.log("\t* Is currently on sale");
    }
    
    // Check if the current product is clothing using the isClothing function
    if (isClothing(surfProduct)) {
        // Print that the product is a clothing item
        console.log("\t* Is a clothing product");
    }
    
    // Check if the current product is gear using the isGear function
    if (isGear(surfProduct)) {
        // Print that the product is a surfing gear item
        console.log("\t* Is a surfing gear product");
    }
}
