// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
//récupérer le prix 
var price = product.querySelector('.price span').innerText;
console.log(price);
//récupérer la quantité
var quantity = product.querySelector('.quantity input').value;
console.log (quantity);
//Multiplier quantité par prix
var result = price * quantity;
// pointer vers la classe à modifier
var subtotal = product.querySelector ('.subtotal span');
return subtotal.innerHTML = result;
}

 // ITERATION 2

function calculateAll() {
  // pointer tout les produits 
  const allProduct = document.querySelectorAll('.product');
  // basculer en tableau avec spread operator et faire une boucle dans le tableau pour récupérer les subtotaux 
  [...allProduct].forEach (function(el){
  updateSubtotal(el);
  });
  
  // ITERATION 3
  //recuperer tous les subtotaux 
  const allsubtotal = document.querySelectorAll('.subtotal span');
  console.log(allsubtotal);
  // on pointe vers l'endroit ou on veut mettre le total (inner.text ne fonctionne pas !)
 const total = document.querySelector('#total-value span');
  //Addition des allsubtotaux
  var add = 0;
  [...allsubtotal].forEach (function(el){
    add += Number(el.innerText);
  });
 total.innerText = add
}
// ITERATION 4

function removeProduct(event) {
  const allRemoveButtons = document.getElementsByClassName('btn-remove');
  [...allRemoveButtons].forEach (function(removeButton){
    removeButton.addEventListener('click', () => {//
      removeButton.parentNode.parentNode.remove();//
    })
  });
}




// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  removeProduct();
});
