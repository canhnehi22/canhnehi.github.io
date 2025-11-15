const cartItems = document.getElementById('cart-items');
const cartEmpty = document.getElementById('cart-empty');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

if(cart.length > 0) {
    cartEmpty.style.display = 'none';
    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <img src="${item.imgSrc}" alt="">
            <div class="info">
                <h4>${item.name}</h4>
                <p>${item.price}</p>
            </div>
            <button class="remove">Xóa</button>
        `;
        cartItems.appendChild(div);

        // Xóa sản phẩm
        div.querySelector('.remove').addEventListener('click', () => {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            location.reload();
        });
    });
}
