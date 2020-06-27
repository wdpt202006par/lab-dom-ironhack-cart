// ITERATION 1

function updateSubtotal(product) {

  // Step 1 & 2
  const price = product.querySelector('.product .price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  // Step 3
  const subtotalPrice = Number(price) * quantity

  // Step 4
  const subtotal = product.querySelector('.subtotal span')

  // Step 5
  subtotal.innerHTML = subtotalPrice

  console.log('Calculating subtotal, yey!');
  return subtotalPrice
}

function calculateAll() {

  // ITERATION 2

  const allSubtotal = document.querySelectorAll('.product');
  console.log(allSubtotal)
  let total = 0;

  allSubtotal.forEach(el => {
    total += updateSubtotal(el);
  });

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = total;

}

// ITERATION 4
//... your code goes here

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);


}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.querySelectorAll('btn btn-remove');
  removeBtn.addEventListener('click', removeProduct(event));

  //... your code goes here
});