document.addEventListener('DOMContentLoaded', function () {
  const cart = document.getElementById('cart');
  const totalPriceElement = document.getElementById('total-price');
  const totalItemsElement = document.getElementById('totalItems');
  const totalAmountElement = document.getElementById('totalAmount');

  function updateTotal() {
      let total = 0;
      let totalItems = 0;
      document.querySelectorAll('.cart-item').forEach(function (item) {
          const price = parseFloat(item.querySelector('.price').textContent);
          const quantity = parseInt(item.querySelector('.qty').textContent);
          total += price * quantity;
          totalItems += quantity;
      });
      totalPriceElement.textContent = total.toFixed(2);
      totalItemsElement.textContent = totalItems;
      totalAmountElement.textContent = `$${total.toFixed(2)}`;
  }

  cart.addEventListener('click', function (e) {
      if (e.target.classList.contains('plus')) {
          const qtyElement = e.target.previousElementSibling;
          qtyElement.textContent = parseInt(qtyElement.textContent) + 1;
          updateTotal();
      } else if (e.target.classList.contains('minus')) {
          const qtyElement = e.target.nextElementSibling;
          const qty = parseInt(qtyElement.textContent);
          if (qty > 1) {
              qtyElement.textContent = qty - 1;
              updateTotal();
            }
        } else if (e.target.classList.contains('delete')) {
            e.target.closest('.cart-item').remove();
            updateTotal();
        } else if (e.target.classList.contains('like')) {
              console.log('Heart button clicked!'); // Debugging
              e.target.classList.toggle('liked');
              console.log('Class toggled:', e.target.classList.contains('liked')); // Debugging
          }
    });
  
    updateTotal();
  });
