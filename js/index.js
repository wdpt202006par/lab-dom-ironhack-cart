// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span").innerHTML; // récup du text html dans price > span. le inner permet de pas prendre<span>25.00</span>
  const quantity = product.querySelector(".quantity input").value; // récup du text html ds qté>input. Comme c'est un input on prend la valeur .value

  let result = price * quantity; // calcul d'un sous total qu'on stocke
  const subtotal = product.querySelector(".subtotal span"); //stock où on veut agir cad soustotal> span (0 de la ligne 30 ds index) ==> OU ds mon HTML
  return (subtotal.innerHTML = result); // écris moi le resultat ds l'endroit appellé ligne 9 et stocké ds la variable subtotal
}

function calculateAll() {
  //ITERATION 2
  const allProduct = document.querySelectorAll(".product"); // creation variable pour pointer mon DOM product
  console.log(allProduct); // facultatif pour nous montrer ce que représente allProduct => toutes les lignes tr de mon produit cad prix, nom du produit etc...
  [...allProduct].forEach(function (el) {
    // pour le tableau un arraylike je le transforme en un tableau ou je peux travailler dessus grace à [...nomdutableau]. sur ce tableau je fais un foreacht
    updateSubtotal(el); // je passe ma fonction de l'itération 1 sur chaque element de mon tableau;
  });
  //Autre possibilité avec Arrayfrom

  // ITERATION 3
  //... your code goes here
}
//À la fin de la calculateAll()fonction, réutilisez la valeur totale que
// vous venez de calculer dans l'itération précédente et mettez à jour l'élément
//DOM correspondant. Calculez le prix total des produits dans votre panier en
//additionnant tous les sous-totaux retournés au
//updateSubtotal()moment de l'appel avec chaque produit.

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
