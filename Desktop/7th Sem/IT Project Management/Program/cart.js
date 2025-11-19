// cart.js
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartContainer = document.querySelector('#cart-items');
    const cartTotal = document.querySelector('#cart-total');
    const menu = document.querySelector('#menu');

    // Function to update the cart display
    function renderCart() {
        cartContainer.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            const cartItem = document.createElement('div');
            cartItem.classList.add('flex', 'justify-between', 'items-center', 'mb-2');
            cartItem.innerHTML = `
                <div>
                    <h4 class="font-bold">${item.name}</h4>
                    <p>Quantity: ${item.quantity}</p>
                </div>
                <div>
                    <span class="font-bold">$${(item.price * item.quantity).toFixed(2)}</span>
                    <button class="btn btn-sm btn-outline btn-primary remove-from-cart" data-index="${index}">Remove</button>
                    <button class="btn btn-sm btn-outline btn-primary increase-quantity" data-index="${index}">+</button>
                    <button class="btn btn-sm btn-outline btn-primary decrease-quantity" data-index="${index}">-</button>
                </div>
            `;
            cartContainer.appendChild(cartItem);
        });
        cartTotal.textContent = total.toFixed(2);
    }

    // Add to cart
    menu.addEventListener('click', e => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const card = e.target.closest('.card-body');
            const name = card.querySelector('.card-title').textContent;
            const price = parseFloat(e.target.textContent.replace('$', ''));

            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, quantity: 1 });
            }
            renderCart();
        }
    });

    // Remove from cart, increase/decrease quantity
    cartContainer.addEventListener('click', e => {
        const index = e.target.dataset.index;
        if (e.target.classList.contains('remove-from-cart')) {
            cart.splice(index, 1);
            renderCart();
        } else if (e.target.classList.contains('increase-quantity')) {
            cart[index].quantity++;
            renderCart();
        } else if (e.target.classList.contains('decrease-quantity')) {
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            } else {
                cart.splice(index, 1);
            }
            renderCart();
        }
    });

    // Show/hide cart
    const cartLink = document.querySelector('a[href="#cart"]');
    const cartSection = document.querySelector('#cart');
    if (cartLink && cartSection) {
        cartLink.addEventListener('click', e => {
            e.preventDefault();
            cartSection.classList.toggle('hidden');
        });
    }
});
