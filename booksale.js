let addUp = 0;
let total = 0;
let cart = {};

if (localStorage.getItem('addUp')) {
  addUp = parseInt(localStorage.getItem('addUp'));
}

if (localStorage.getItem('total')) {
  total = parseInt(localStorage.getItem('total'));
}

if (localStorage.getItem('cart')) {
  cart = JSON.parse(localStorage.getItem('cart'));
}

updateCart();

let btns = document.querySelectorAll('.card button');

for (let i = 0; i < btns.length; i++) {
  let btn = btns[i];
  btn.addEventListener('click', add);
}

function add(event) {
  let price = Number(event.target.dataset.price);
  let title = event.target.dataset.title;
  let id = event.target.dataset.id;

  if (id in cart) {
    cart[id].qty++;
  } else {
    let cartItem = {
      title: title,
      price: price,
      qty: 1,
    };
    cart[id] = cartItem;
  }

  addUp++;
  total += price;

  console.log(cart);

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  document.getElementById('total').textContent = total;
  document.getElementById('addUp').textContent = addUp;
  localStorage.setItem('total', total);
  localStorage.setItem('addUp', addUp);
}
function deleteItems() {
  localStorage.clear();
}
