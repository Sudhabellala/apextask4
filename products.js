// Product data with images
const products = [
  { name: "Phone", category: "electronics", price: 17699, image: "https://images.unsplash.com/photo-1521939094609-93aba1af40d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Laptop", category: "electronics", price: 40999, image: "https://img.freepik.com/free-photo/gray-laptop-simple-wooden-desk_23-2148267466.jpg" },
  { name: "T-shirt", category: "clothing", price: 2900, image: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fHww" },
  { name: "Headphones", category: "electronics", price: 1999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Jeans", category: "clothing", price: 3049, image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

// Display products
function displayProducts(productArray) {
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // Clear previous products

  productArray.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    const details = document.createElement("div");
    details.className = "product-details";
    details.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ${product.price}/-</p>
    `;

    productCard.appendChild(img);
    productCard.appendChild(details);
    productList.appendChild(productCard);
  });
}

// Filter and sort products
function filterAndSortProducts() {
  const filterValue = document.getElementById("filter").value;
  const sortValue = document.getElementById("sort").value;

  // Filter products
  let filteredProducts = products;
  if (filterValue !== "all") {
    filteredProducts = products.filter((product) => product.category === filterValue);
  }

  // Sort products
  filteredProducts.sort((a, b) => {
    if (sortValue === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortValue === "price") {
      return a.price - b.price;
    }
  });

  // Display the filtered and sorted products
  displayProducts(filteredProducts);
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
});
