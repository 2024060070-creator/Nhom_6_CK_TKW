// ===== DANH SÁCH SẢN PHẨM =====
const products = [

    // TEDDY
    { id: 1, name: "Tuyết say hi", price: 250000, category: "teddy", image: "IMG/teddy 1.jpg" },
    { id: 2, name: "Pig thư giãn", price: 270000, category: "teddy", image: "IMG/teddy 2.jpg" },
    { id: 3, name: "Cà rốt yêu củ cải", price: 300000, category: "teddy", image: "IMG/teddy 3.jpg" },

    // HOẠT HÌNH
    { id: 4, name: "Shin quạu quọ", price: 250000, category: "cartoon", image: "IMG/hh1.jpg" },
    { id: 5, name: "Chuột Cherry", price: 270000, category: "cartoon", image: "IMG/hh2.jpg" },
    { id: 6, name: "Doraemon Happy", price: 230000, category: "cartoon", image: "IMG/hh8.jpg" },

    // NEW
    { id: 7, name: "Gấu Hồng Mới", price: 220000, category: "new", image: "IMG/new1.jpg" }
];



// ===== GIỎ HÀNG (CHUNG 2 TRANG) =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===== HIỂN THỊ PAGE =====
function showPage(page) {

    const sections = document.querySelectorAll(".page-section");
    sections.forEach(p => p.classList.add("d-none"));

    const target = document.getElementById(page);
    if (target) target.classList.remove("d-none");

    if (page === "products") renderProducts(products);
    if (page === "cart") renderCart();
}

// ===== RENDER PRODUCTS =====
function renderProducts(list) {

    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    grid.innerHTML = list.map(p => `
        <div class="col-md-4">
            <div class="card">
                <img src="${p.image}" class="product-img w-100">
                <div class="card-body text-center">
                    <h5>${p.name}</h5>
                    <p class="text-danger fw-bold">
                        ${p.price.toLocaleString()} đ
                    </p>
                    <button class="btn btn-danger"
                        onclick="addToCart(${p.id})">
                        Thêm vào giỏ
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}

// ===== THÊM VÀO GIỎ =====
function addToCart(id) {

    const product = products.find(p => p.id === id);
    if (!product) return;

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert("Đã thêm vào giỏ 🧸");
}

// ===== CẬP NHẬT SỐ LƯỢNG =====
function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// ===== HIỂN THỊ GIỎ HÀNG =====
function renderCart() {

    const cartDiv = document.getElementById("cartItems");
    const totalDiv = document.getElementById("cartTotal");

    if (!cartDiv || !totalDiv) return;

    let total = 0;

    cartDiv.innerHTML = cart.map(item => {
        total += item.price;
        return `
            <div class="cart-item d-flex justify-content-between border-bottom py-2">
                <span>${item.name}</span>
                <span>${item.price.toLocaleString()} đ</span>
            </div>
        `;
    }).join("");

    totalDiv.textContent = total.toLocaleString();
}

// ===== LOAD TRANG =====
document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
    renderCart();
});