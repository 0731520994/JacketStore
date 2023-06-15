
//cart

let addToCartBtn[]
localStorage.setItem("cartItems", JSON.stringify([]));
const addToCartBtn = document.getElementById("addToCartBtn");

  //event listener
addToCartBtn.addEventListener("click", function () {
 const cartItems = JSON.parse(localStorage.getItem("cartItems"));

cartItems.push(product);
localStorage.setItem("cartItems", JSON.stringify(cartItems));


console.log(cart);


document.onload = displayData();

  });
