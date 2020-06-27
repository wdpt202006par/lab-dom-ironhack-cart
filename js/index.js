// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerText)
  const quantity = Number(product.querySelector('.quantity input').value)
  const subtot = (price * quantity);
  const subTotalPrice = (product.querySelector('.subtotal span').innerHTML = subtot)
  return subTotalPrice
  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let row = document.querySelectorAll(".product");
  row.forEach(function (el) {
    updateSubtotal(el);
  })

  // ITERATION 3
  var total = document.querySelectorAll('.subtotal span');
  const totalPrice = total.reduce (function (acc, currentValeur) {
    return acc + currentValeur;
  },0); // à regarder

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
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
});
