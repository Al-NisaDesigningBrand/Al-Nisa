document.addEventListener('DOMContentLoaded', function() {
    // Add click event to the "Shop Now" button
    const shopNowBtn = document.querySelector('.btn-light');
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', function(event) {
            alert('Shop Now button clicked!'); // Replace with actual navigation logic
        });
    }

    // Add hover effect to the order card
    const orderCard = document.querySelector('.order-card');
    if (orderCard) {
        orderCard.addEventListener('mouseover', function() {
            orderCard.style.backgroundColor = '#058c42'; // Change background color on hover
        });

        orderCard.addEventListener('mouseout', function() {
            orderCard.style.backgroundColor = '#16db65'; // Restore original background color
        });

         orderCard.addEventListener('click', function() {
            alert('Now order clicked!'); // Replace with actual order processing logic
        });
    }
});
