// ===== DANH SÁCH TỔNG HỢP TOÀN BỘ SẢN PHẨM TRÊN CÁC TRANG =====
const products = [
    // 1. DANH MỤC: TEDDY (ID từ 1 - 12)
    { id: 1, name: "Tuyết say hi", price: 250000, category: "teddy", image: "IMG/teddy 1.jpg" },
    { id: 2, name: "Pig thư giãn", price: 270000, category: "teddy", image: "IMG/teddy 2.jpg" },
    { id: 3, name: "Cà rốt yêu củ cải", price: 300000, category: "teddy", image: "IMG/teddy 3.jpg" },
    { id: 4, name: "Teddy thất tình", price: 230000, category: "teddy", image: "IMG/teddy 4.jpg" },
    { id: 5, name: "Teddy Nâu Cổ Điển", price: 250000, category: "teddy", image: "img/teddy 5.jpg" },
    { id: 6, name: "Gấu Hồng Vui Vẻ", price: 270000, category: "teddy", image: "img/teddy 6.jpg" },
    { id: 7, name: "Vịt Say Hi", price: 300000, category: "teddy", image: "img/teddy 7.jpg" },
    { id: 8, name: "Gà Dễ Thương", price: 230000, category: "teddy", image: "img/teddy 8.jpg" },
    { id: 9, name: "Gà Rất vui vẻ", price: 250000, category: "teddy", image: "img/teddy 9.jpg" },
    { id: 10, name: "Teddy Zô Truy", price: 270000, category: "teddy", image: "img/teddy 10.jpg" },
    { id: 11, name: "Teddy Tuộc Happy", price: 300000, category: "teddy", image: "img/teddy 11.jpg" },
    { id: 12, name: "Dog Cute", price: 230000, category: "teddy", image: "img/teddy 12.jpg" },

    // 2. DANH MỤC: GẤU HOẠT HÌNH (ID từ 101 - 112)
    { id: 101, name: "Shin quạu quọ", price: 250000, category: "cartoon", image: "IMG/hh1.jpg" },
    { id: 102, name: "Chuột Cherry Mặt trời", price: 270000, category: "cartoon", image: "IMG/hh2.jpg" },
    { id: 103, name: "Gấu Say Hi", price: 300000, category: "cartoon", image: "IMG/hh3.jpg" },
    { id: 104, name: "Cat vui vẻ", price: 230000, category: "cartoon", image: "IMG/hh4.jpg" },
    { id: 105, name: "Thỏ Cáo 'Chúng ta chỉ là bạn' M1", price: 250000, category: "cartoon", image: "img/hh5.jpg" },
    { id: 106, name: "Thỏ Cáo 'Chúng ta chỉ là bạn' M2", price: 270000, category: "cartoon", image: "img/hh6.jpg" },
    { id: 107, name: "Shin Hip hop", price: 300000, category: "cartoon", image: "img/hh7.jpg" },
    { id: 108, name: "Doraemon Happy", price: 230000, category: "IMG/hh8.jpg" },
    { id: 109, name: "Bông Tuyết Hồng", price: 250000, category: "cartoon", image: "img/hh9.jpg" },
    { id: 110, name: "Vịt Trầm Cảm", price: 270000, category: "cartoon", image: "img/hh10.jpg" },
    { id: 111, name: "Gấu Ôm Bình Sữa", price: 300000, category: "cartoon", image: "img/hh11.jpg" },
    { id: 112, name: "Bé Khóc Nhè", price: 230000, category: "cartoon", image: "img/hh12.jpg" },

    // 3. DANH MỤC: HÀNG MỚI VỀ (ID từ 201 - 210)
    { id: 201, name: "Gấu Đô Con Giúp Bảo Vệ Chủ Nhân", price: 250000, category: "new", image: "IMG/new1.jpg" },
    { id: 202, name: "Bé Gấu Có Mái Tóc Đặc Biệt", price: 270000, category: "new", image: "IMG/new2.jpg" },
    { id: 203, name: "Tiểu Cường Thơm Tho", price: 300000, category: "new", image: "IMG/new3.jpg" },
    { id: 204, name: "Khỉ Đột Cô Đơn", price: 230000, category: "new", image: "IMG/new4.jpg" },
    { id: 205, name: "Súp Lơ Ngon Miệng", price: 250000, category: "new", image: "img/new5.jpg" },
    { id: 206, name: "Bà Cụ Vịt CuTe", price: 270000, category: "new", image: "img/new6.jpg" },
    { id: 207, name: "Heo Tinh Nghịch", price: 300000, category: "new", image: "img/new7.jpg" },
    { id: 208, name: "Gấu Trúc Đắp Mặt Nạ", price: 230000, category: "new", image: "img/new8.jpg" },
    { id: 209, name: "Cá Sấu Điệu Đà", price: 250000, category: "new", image: "img/new9.jpg" },
    { id: 210, name: "Khủng Long Mập Mạp", price: 270000, category: "new", image: "img/new10.jpg" },

    // 4. DANH MỤC: HOA GẤU BÔNG (ID từ 301 - 311)
    { id: 301, name: "Bó hoa Ngựa Pony Hồng Ngọc Ngào", price: 250000, category: "flower", image: "IMG/hoa1.jpg" },
    { id: 302, name: "Bó hoa Bơ Xanh và Những Người Bạn Mini", price: 270000, category: "flower", image: "IMG/hoa2.jpg" },
    { id: 303, name: "Bó hoa Thỏ Bông & Đào Tiên May Mắn", price: 300000, category: "flower", image: "IMG/hoa3.jpg" },
    { id: 304, name: "Bó hoa Gấu Lotso Hương Dâu Hamburg", price: 230000, category: "flower", image: "IMG/hoa4.jpg" },
    { id: 305, name: "Bó hoa Cừu Bông Pinky Giáng Sinh", price: 250000, category: "flower", image: "img/hoa5.jpg" },
    { id: 306, name: "Bó hoa Voi Con & Khủng Long Tinh Nghịch", price: 270000, category: "flower", image: "img/hoa6.jpg" },
    { id: 307, name: "Bó hoa Thần Tài Nhí Pooh & Sư Tử Vàng", price: 300000, category: "flower", image: "img/hoa7.jpg" },
    { id: 308, name: "Bó hoa Capybara Quý Tộc Trưởng Thành", price: 230000, category: "flower", image: "img/hoa8.jpg" },
    { id: 309, name: "Bó hoa Mèo Hello Kitty Nơ Hồng Quý Phái", price: 250000, category: "flower", image: "img/hoa9.jpg" },
    { id: 310, name: "Bó hoa Chó Corgi Chân Ngắn Đại Công Tước", price: 270000, category: "flower", image: "img/hoa10.jpg" },
    { id: 311, name: "Bó hoa Chuột Mickey Đi Học Ngày Đầu Tiên", price: 300000, category: "flower", image: "img/hoa11.jpg" },

    // 5. DANH MỤC: BLIND BOX / TÚI MÙ (ID từ 401 - 410)
    { id: 401, name: "Blindbox Zịt Sang Chấn: Gấu Mù Ngẫu Nhiên", price: 250000, category: "blindbox", image: "IMG/mu1.jpg" },
    { id: 402, name: "Blindbox Pokémon M1: Gấu Mù Ngẫu Nhiên", price: 270000, category: "blindbox", image: "IMG/mu2.jpg" },
    { id: 403, name: "Blindbox Pokémon M2: Gấu Mù Ngẫu Nhiên", price: 300000, category: "blindbox", image: "IMG/mu3.jpg" },
    { id: 404, name: "Blindbox Chopper: Gấu Mù Ngẫu Nhiên", price: 230000, category: "blindbox", image: "IMG/mu4.jpg" },
    { id: 405, name: "Blindbox Zoro: Gấu Mù Ngẫu Nhiên", price: 250000, category: "blindbox", image: "img/mu5.jpg" },
    { id: 406, name: "Blindbox Ace: Gấu Mù Ngẫu Nhiên", price: 270000, category: "blindbox", image: "img/mu6.jpg" },
    { id: 407, name: "Blindbox Luffy: Gấu Mù Ngẫu Nhiên", price: 300000, category: "blindbox", image: "img/mu7.jpg" },
    { id: 408, name: "Blindbox Sanji: Gấu Mù Ngẫu Nhiên", price: 230000, category: "blindbox", image: "img/mu8.jpg" },
    { id: 409, name: "Blindbox Nami: Gấu Mù Ngẫu Nhiên", price: 250000, category: "blindbox", image: "img/mu9.jpg" },
    { id: 410, name: "Blindbox Robin: Gấu Mù Ngẫu Nhiên", price: 270000, category: "blindbox", image: "img/mu10.jpg" },

    // 6. DANH MỤC: TÚI ĐEO CHÉO (ID từ 501 - 511)
    { id: 501, name: "Túi Đeo Hình ngựa", price: 250000, category: "bag", image: "IMG/tui1.jpg" },
    { id: 502, name: "Túi Đeo Hình chó", price: 270000, category: "bag", image: "IMG/tui2.jpg" },
    { id: 503, name: "Túi Đeo Hình mèo", price: 300000, category: "bag", image: "IMG/tui3.jpg" },
    { id: 504, name: "Túi Đeo Hình chó hamburge", price: 230000, category: "bag", image: "IMG/tui4.jpg" },
    { id: 505, name: "Túi Đeo Hình cừu", price: 250000, category: "bag", image: "img/tui5.jpg" },
    { id: 506, name: "Túi Đeo Hình voi", price: 270000, category: "bag", image: "img/tui6.jpg" },
    { id: 507, name: "Túi Đeo Hình chó xám", price: 300000, category: "bag", image: "img/tui7.jpg" },
    { id: 508, name: "Túi Đeo Hình gấu trúc", price: 230000, category: "bag", image: "img/tui8.jpg" },
    { id: 509, name: "Túi Đeo Hình heo", price: 250000, category: "bag", image: "img/tui9.jpg" },
    { id: 510, name: "Túi Đeo Hình thỏ trắng", price: 270000, category: "bag", image: "img/tui10.jpg" },
    { id: 511, name: "Túi Đeo Hình thỏ ngọc", price: 300000, category: "bag", image: "img/tui11.jpg" },

    // 7. DANH MỤC: GẤU SIZE LỚN (Đã sửa đổi sang ID từ 701 - 710)
    { id: 701, name: "Gấu Teddy Tuyết Khổng Lồ Đội Mũ Cà Rốt", price: 450000, category: "giant", image: "IMG/teddy 1.jpg" },
    { id: 702, name: "Gấu Gấu Hồng Lotso Đại Thơm Hương Dâu", price: 490000, category: "giant", image: "IMG/teddy 2.jpg" },
    { id: 703, name: "Teddy Cà Rốt Ôm Củ Cải Ôm Ngủ Siêu Bự", price: 520000, category: "giant", image: "IMG/teddy 3.jpg" },
    { id: 704, name: "Shin Cậu Bé Bút Chì Đại Cosplay Khủng Long", price: 420000, category: "giant", image: "IMG/hh1.jpg" },
    { id: 705, name: "Chuột Cherry Tai To Đáng Yêu Bản Giới Hạn", price: 460000, category: "giant", image: "IMG/hh2.jpg" },
    { id: 706, name: "Mèo Máy Doraemon Happy Khổng Lồ Tròn Trịat", price: 390000, category: "giant", image: "IMG/hh8.jpg" },
    { id: 707, name: "Gấu Bông Capybara Ôm Bộ Đồ Trầm Cảm Size Đại", price: 550000, category: "giant", image: "IMG/new1.jpg" },
    { id: 708, name: "Heo Hồng Pig Thư Giãn Siêu Dài Ôm Ngủ Gối Ôm", price: 380000, category: "giant", image: "IMG/teddy 2.jpg" },
    { id: 709, name: "Cá Sấu Xanh Híp Mắt Siêu Bự Êm Ái", price: 410000, category: "giant", image: "IMG/teddy 3.jpg" },
    { id: 710, name: "Gấu Pooh Áo Đỏ Thần Tài Phiên Bản Khổng Lồ", price: 580000, category: "giant", image: "IMG/teddy 1.jpg" },

    // 8. DANH MỤC: GẤU SIZE NHỎ & MÓC KHÓA (Đã sửa đổi sang ID từ 801 - 810)
    { id: 801, name: "Móc Khóa Teddy Tuyết Trắng Bông Xù Đáng Yêu", price: 45000, category: "small", image: "IMG/teddy 1.jpg" },
    { id: 802, name: "Gấu Bông Heo Hồng Nhỏ Ôm Bình Sữa Đi Học", price: 55000, category: "small", image: "IMG/teddy 2.jpg" },
    { id: 803, name: "Móc Treo Balo Cà Rốt Cute Đeo Nơ Chuông", price: 49000, category: "small", image: "IMG/teddy 3.jpg" },
    { id: 804, name: "Móc Khóa Shin Cosplay Siêu Quậy Cực Chất", price: 60000, category: "small", image: "IMG/hh1.jpg" },
    { id: 805, name: "Chuột Cherry Đeo Balô Nhỏ Nhắn Xinh Xinh", price: 52000, category: "small", image: "IMG/hh2.jpg" },
    { id: 806, name: "Móc Khóa Doraemon Đeo Lắc Chuông Vàng Bằng Bông", price: 45000, category: "small", image: "IMG/hh8.jpg" },
    { id: 807, name: "Móc Khóa Capybara Chảy Mũi Gảy Rút Siêu Lầy", price: 65000, category: "small", image: "IMG/new1.jpg" },
    { id: 808, name: "Gấu Bông Trứng Lười Gudetama Đệm Mông Nhỏ", price: 48000, category: "small", image: "IMG/teddy 2.jpg" },
    { id: 809, name: "Móc Treo Mèo Thần Tài Mang Lại May Mắn", price: 50000, category: "small", image: "IMG/teddy 3.jpg" },
    { id: 810, name: "Móc Khóa Gấu Dâu Lotso Phấn Hồng Đáng Yêu", price: 58000, category: "small", image: "IMG/teddy 1.jpg" }
];

// ===== KHỞI TẠO GIỎ HÀNG (CHỈ KHAI BÁO MỘT LẦN DUY NHẤT) =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===== KHI TRANG TẢI XONG =====
document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
    renderCart();
});

// ===== HÀM CHUYỂN ĐẾN TRANG GIỎ HÀNG (NẾU FILE HTML RIÊNG BIỆT) =====
function goToCart() {
    window.location.href = "GIOHANG.html";
}

// ===== HIỂN THỊ CHUYỂN ĐỔI PAGE =====
function showPage(page) {
    const sections = document.querySelectorAll(".page-section");
    sections.forEach(p => p.classList.add("d-none"));

    const target = document.getElementById(page);
    if (target) target.classList.remove("d-none");

    if (page === "products") renderProducts(products);
    if (page === "cart") renderCart();
}

// ===== RENDER DANH SÁCH SẢN PHẨM TRÊN ĐỐI TƯỢNG GRID =====
function renderProducts(list) {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    grid.innerHTML = list.map(p => `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${p.image}" class="product-img w-100">
                <div class="card-body text-center">
                    <h5>${p.name}</h5>
                    <p class="text-danger fw-bold">
                        ${p.price.toLocaleString()} đ
                    </p>
                    <button class="btn btn-danger" onclick="addToCart(${p.id})">
                        Thêm vào giỏ
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}

// ===== HÀM THÊM VÀO GIỎ (ĐÃ TỐI ƯU HIỂN THỊ ALERT CUSTOM CỰC CUTE) =====
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) {
        console.error("Không tìm thấy sản phẩm có ID: " + id);
        return;
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    
    showSweetAlert(
        "Đã Thêm Vào Giỏ! 🧸", 
        `Bé gấu bông "${product.name}" đã nằm gọn trong giỏ hàng rồi nè!`
    );
}

// ===== CẬP NHẬT BADGE SỐ LƯỢNG TRÊN CÁC ICON GIỎ HÀNG =====
function updateCartCount() {
    const cartCountElements = document.querySelectorAll("#cartCount");
    if (cartCountElements.length > 0) {
        cartCountElements.forEach(el => {
            el.textContent = cart.length;
        });
    }
}

// ===== HIỂN THỊ CHI TIẾT GIỎ HÀNG CÓ NÚT XÓA VÀ HÌNH ẢNH =====
function renderCart() {
    const cartDiv = document.getElementById("cartItems");
    const totalDiv = document.getElementById("cartTotal");

    if (!cartDiv || !totalDiv) return;

    if (cart.length === 0) {
        cartDiv.innerHTML = `
            <div class="text-center py-5">
                <p class="text-muted fs-5 mb-0">Giỏ hàng của bạn đang trống rỗng... 🧸</p>
            </div>`;
        totalDiv.textContent = "0";
        return;
    }

    let total = 0;

    cartDiv.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `
            <div class="cart-item d-flex align-items-center justify-content-between border-bottom py-3">
                <div class="d-flex align-items-center">
                    <img src="${item.image}" width="60" class="rounded me-3" style="height:60px; object-fit:cover; border: 1px solid #ffd1e8;">
                    <div>
                        <h6 class="mb-1 fw-bold text-dark">${item.name}</h6>
                        <span class="text-pink fw-bold">${item.price.toLocaleString()} đ</span>
                    </div>
                </div>
                <button class="btn btn-outline-danger btn-sm rounded-pill px-3" onclick="removeFromCart(${index})">
                    ❌ Xóa
                </button>
            </div>
        `;
    }).join("");

    totalDiv.textContent = total.toLocaleString();
}

// ===== HÀM XÓA SẢN PHẨM KHỎI GIỎ =====
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

// ===== HÀM XỬ LÝ FORM THANH TOÁN ĐẶT HÀNG =====
function handleCheckout(event) {
    event.preventDefault();

    if (cart.length === 0) {
        showSweetAlert("Ối!! 🧸", "Giỏ hàng đang trống, cậu chọn vài bé gấu trước khi thanh toán nha!");
        return;
    }

    const nameEl = document.getElementById("orderName");
    const phoneEl = document.getElementById("orderPhone");
    const addressEl = document.getElementById("orderAddress");

    const name = nameEl ? nameEl.value : "Khách hàng";
    const phone = phoneEl ? phoneEl.value : "";
    const address = addressEl ? addressEl.value : "";

    showSweetAlert(
        "Đặt Hàng Thành Công! 🎉", 
        `Cảm ơn ${name} đã ủng hộ shop nha! Đơn hàng sẽ sớm được gửi tới địa chỉ: ${address} ${phone ? '(SĐT: ' + phone + ')' : ''}.`
    );

    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    
    const form = document.getElementById("checkoutForm");
    if (form) form.reset();
    
    updateCartCount();
    renderCart();
}

// ===== HÀM BẬT THÔNG BÁO CUTE CHÍNH GIỮA MÀN HÌNH =====
function showSweetAlert(title, message) {
    const modal = document.getElementById("sweetAlertModal");
    if (modal) {
        const titleEl = document.getElementById("sweetAlertTitle");
        const msgEl = document.getElementById("sweetAlertMsg");
        if (titleEl) titleEl.innerText = title;
        if (msgEl) msgEl.innerText = message;
        modal.classList.remove("d-none");
    } else {
        alert(title + "\n" + message);
    }
}

// ===== HÀM ĐÓNG THÔNG BÁO =====
function closeSweetAlert() {
    const modal = document.getElementById("sweetAlertModal");
    if (modal) {
        modal.classList.add("d-none");
    }
}