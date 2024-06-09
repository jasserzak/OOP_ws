// Product class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Shopping cart item class
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Method to calculate total price of the item
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// Shopping cart class
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Method to get total number of items inside the cart
  getTotalItems() {
    return this.items.length;
  }

  // Method to add items to the cart
  addItem(item) {
    this.items.push(item);
  }

  // Method to remove items from the cart
  removeItem(itemIndex) {
    this.items.splice(itemIndex, 1);
  }

  // Method to display cart items
  displayCart() {
    console.log("Shopping Cart Items:");
    this.items.forEach((item, index) => {
      console.log(
        `Item ${index + 1}: ${item.product.name} - Quantity: ${item.quantity}`
      );
    });
  }
}

// Test
// Create products
const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Phone", 500);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(new ShoppingCartItem(product1, 2));
cart.addItem(new ShoppingCartItem(product2, 1));

// Display the cart
cart.displayCart();

// Get total items inside the cart
console.log("Total Items in Cart:", cart.getTotalItems());

// Remove an item from the cart
cart.removeItem(0);

// Display the updated cart
cart.displayCart();
