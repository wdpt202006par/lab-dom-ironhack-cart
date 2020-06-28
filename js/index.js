// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  
  const price= product.querySelector('.price span').innerHTML;
  var quantity = Number(product.querySelector('.quantity input').value);

  var subTotal= product.querySelector('.subtotal span');
  subTotal.innerHTML = price * quantity;
  return price * quantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  products.forEach(element => updateSubtotal(element));


  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value span');
  const totalAmount = Array.from(products).reduce((acc, num) => {return acc + updateSubtotal(num);}, 0);
  total.innerHTML = totalAmount;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  document.querySelector('tbody').removeChild(product);
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  // Select elements
  const tbody = document.querySelector('tbody');
  const inputName = document.querySelector('tfoot input[type="text"]');
  const inputPrice = document.querySelector('tfoot input[type="number"]');

  // Create elements

  const tr = document.createElement('tr');

  const tdName = document.createElement('td');
  tdName.classList.add('name');
  const spanName = document.createElement('span');
  spanName.innerHTML = inputName.value;
  tdName.appendChild(spanName);

  const tdPrice = document.createElement('td');
  tdPrice.classList.add('price');
  const spanPrice = document.createElement('span');
  spanPrice.innerHTML = `${inputPrice.value}`;
  tdPrice.innerHTML = '$';
  tdPrice.appendChild(spanPrice);

  const tdQuantity = document.createElement('td');
  tdQuantity.classList.add('quantity');
  const inputQuantity = document.createElement('input');
  inputQuantity.type = 'number';
  inputQuantity.min = 0;
  inputQuantity.value = 0;
  tdQuantity.appendChild(inputQuantity);

  const tdSubtotal = document.createElement('td');
  tdSubtotal.classList.add('subtotal');
  const spanSubtotal = document.createElement('span');
  spanSubtotal.innerHTML = '0';
  tdSubtotal.innerHTML = '$';
  tdSubtotal.appendChild(spanSubtotal);

  const tdAction = document.createElement('td');
  tdAction.classList.add('action');
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-remove');
  button.innerHTML = 'Remove';
  tdAction.appendChild(button);

  // Append elements

  tr.classList.add('product');
  tr.appendChild(tdName);
  tr.appendChild(tdPrice);
  tr.appendChild(tdQuantity);
  tr.appendChild(tdSubtotal);
  tr.appendChild(tdAction);
  tbody.appendChild(tr);

  // Clear form
  const formInputs = document.querySelectorAll('tfoot input');
  formInputs[0].value = '';
  formInputs[1].value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const create = document.querySelector('#create');
  create.addEventListener('click', createProduct);

  const buttons = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', removeProduct);
  }
});