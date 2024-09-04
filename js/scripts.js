// scripts.js

$(document).ready(function() {
    let cart = [];

    // Function to update the cart total
    function updateCartTotal() {
        let totalAmount = 0;
        cart.forEach(item => {
            totalAmount += item.price;
        });
        $('#total-amount').text(totalAmount.toFixed(2));
    }

    // Event listener for Add to Cart buttons
    $('.add-to-cart').on('click', function() {
        const product = $(this).data('product');
        const price = parseFloat($(this).data('price'));

        cart.push({ product, price });

        // Add item to the cart list
        $('.cart-list').append(`
            <div class="cart-item">
                <p>${product} - ₹ ${price.toFixed(2)}</p>
            </div>
        `);

        updateCartTotal();

        // Alert to confirm item added to cart
        alert(`${product} has been added to your cart.`);
    });

    // Event listener for Checkout button
    $('.checkout').on('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
        } else {
            alert('Thank you for your purchase!');
            // Clear the cart
            cart = [];
            $('.cart-list').empty();
            updateCartTotal();
        }
    });
});
