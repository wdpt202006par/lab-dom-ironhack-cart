// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  var price = product.querySelector('.price span').innerText;
  var quantity = product.querySelector('.quantity input').value;

  var calcul = price * quantity 
  console.log(price);
  console.log(quantity);
  var subtotal = product.querySelector('.subtotal span')
  return subtotal.innerHTML = calcul;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let allProducts = Array.from(document.querySelectorAll('.product')); 
  allProducts.forEach(function (product) {
    updateSubtotal(product);
  });
  

  // ITERATION 3
  let allSubtotals = Array.from(document.querySelectorAll('.subtotal span'));

  var calculTotal = allSubtotals.reduce((subtotal, product) => {
    return subtotal + Number(product.innerText);
  }, 0);

  document.querySelector('#total-value span').innerText = calculTotal;

  };

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
