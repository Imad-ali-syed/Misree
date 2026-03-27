// Menu items pulled from menu listings (Grubhub, DoorDash, Uber Eats)  
const menuItems = [
    { id: 1, name: "Falooda Kulfi Milk Tea", price: 7.49 },
    { id: 2, name: "Mango Kulfi Milk Tea", price: 7.49 },
    { id: 3, name: "Masala Chai", price: 4.00 },
    { id: 4, name: "Zafrani Chai", price: 3.49 },
    { id: 5, name: "Bun Maska", price: 4.49 },
    { id: 6, name: "Elaichi Chai", price: 4.25 }
  ];
  
  // Cart array  
  let cart = [];
  
  // Render menu items dynamically  
  function renderMenu() {
    const container = document.getElementById("menu-items");
    container.innerHTML = "";
    menuItems.forEach(item => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: $${item.price.toFixed(2)}</p>
        <button class="btn-primary full-width" onclick="addToCart(${item.id})">Add to Cart</button>
      `;
      container.appendChild(div);
    });
  }
  
  // Add to cart  
  function addToCart(id) {
    const item = menuItems.find(m => m.id === id);
    if (!item) return;
    cart.push(item);
    renderCart();
  }
  
  // Render cart  
  function renderCart() {
    const list = document.getElementById("cart-list");
    const totalEl = document.getElementById("cart-total");
    list.innerHTML = "";
    let total = 0;
    cart.forEach((i, idx) => {
      total += i.price;
      const li = document.createElement("li");
      li.textContent = `${i.name} – $${i.price.toFixed(2)}`;
      list.appendChild(li);
    });
    totalEl.textContent = `Total: $${total.toFixed(2)}`;
  }
  
  // Checkout (redirect to vendor platform)  
  function checkout() {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // Choose vendor link (Uber Eats)  
    const vendorUrl = "https://www.ubereats.com/store/misree-chai/WD4OQXx5XaaWosChalkFYA";  
    window.location.href = vendorUrl;
  }
  
  // Initial render  
  window.onload = () => {
    renderMenu();
    renderCart();
  };
  