// Lấy nút giỏ hàng và số lượng
const cartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');

// Lấy giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
if (cartCount) cartCount.innerText = cart.length;

// Lấy tất cả nút thêm vào giỏ hàng (cả 2 trang)
const addButtons = document.querySelectorAll('.desc, .add-to-cart');

addButtons.forEach(button => {
    button.addEventListener('click', () => {

        // Lấy khối sản phẩm
        const product = button.closest('.item') || button.closest('.info-box');

        const imgSrc = product.querySelector('img').src;
        const name = product.querySelector('.name') 
                    ? product.querySelector('.name').innerText
                    : document.querySelector('h2').innerText;

        const price = product.querySelector('.price').innerText;

        // Thêm vào mảng cart
        cart.push({ imgSrc, name, price });

        // Lưu vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Cập nhật số giỏ hàng
        if (cartCount) cartCount.innerText = cart.length;

        alert(`${name} đã được thêm vào giỏ hàng!`);
    });
});

// Click icon giỏ hàng
if (cartBtn) {
    cartBtn.addEventListener('click', () => {
        window.location.href = '/tranggiohang.html';
    });
}

