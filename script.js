// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    const product = products.find((p) => p.id === item.id);
    li.innerHTML = `${product.name} - $${product.price} <button class="remove-from-cart-btn" data-id="${product.id}">Remove</button>`;
    cartList.appendChild(li);
  });
}

// Add item to cart
function addToCart(productId) {
  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Clear cart
function clearCart() {
  cart = [];
  sessionStorage.removeItem("cart");
  renderCart();
}

// Initial render
renderProducts();
renderCart();

// Add event listener to add-to-cart buttons
productList.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart-btn")) {
    const productId = parseInt(event.target.getAttribute("data-id"));
    addToCart(productId);
  }
});

// Add event listener to remove-from-cart buttons
cartList.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-from-cart-btn")) {
    const productId = parseInt(event.target.getAttribute("data-id"));
    removeFromCart(productId);
  }
});

// Add event listener to clear-cart button
clearCartBtn.addEventListener("click", clearCart);

