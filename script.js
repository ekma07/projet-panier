function updateTotal() {
  
  let total = 0;
  const items = document.querySelectorAll('.card-body');

  items.forEach(item => {
    const priceEl = item.querySelector('.unit-price');
    const qtyEl = item.querySelector('.quantity');

    if (priceEl && qtyEl) {
      const price = parseFloat(priceEl.innerText.replace('$', '').trim());
      const qty = parseInt(qtyEl.innerText);
      total += price * qty;
    }
  });

  document.querySelector('.total').innerText = '${total.toFixed(2)} $';
}

const plusBtns = document.querySelectorAll('.btn fa-solid fa-plus');
plusBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const qtyEl = btn.parentElement.querySelector('.quantity');
    qtyEl.innerText = parseInt(qtyEl.innerText) + 1;
    updateTotal();
  });
});

const minusBtns = document.querySelectorAll('.btn fa-solid fa-minus');
minusBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const qtyEl = btn.parentElement.querySelector('.quantity');
    const currentQty = parseInt(qtyEl.innerText);
    if (currentQty > 0) {
      qtyEl.innerText = currentQty - 1;
      updateTotal();
    }
  });
});

const deleteBtns = document.querySelectorAll('.btn-danger fa-solid fa-trash-alt delete');
deleteBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const productCard = btn.closest('.card-body');
    productCard.remove();
    updateTotal();
  });
});

const likeBtns = document.querySelectorAll('.btn-outline-danger fa-solid fa-heart like');
likeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('liked');
  });
});

updateTotal();