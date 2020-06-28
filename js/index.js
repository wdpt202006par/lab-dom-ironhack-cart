// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  
  const price= product.querySelector('.price span').innerHTML;
  var quantity = Number(product.querySelector('.quantity input').value);

  var subTotal= product.querySelector('.subtotal');
  return subTotal.innerHTML = price * quantity;
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
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const buttons = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', removeProduct);
  }
});
