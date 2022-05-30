// Cart
let cartIcon = document.querySelector("#cart-icon")
let cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")

// OPEN CART
cartIcon.onclick  = () => {
    cart.classList.add("active");
};
// CLOSE CART
closeCart.onclick  = () => {
    cart.classList.remove("active");
};

// CART WORKING JS
if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded",ready)
} else{
    ready()
}

// MAKING READY FUNCTION
function ready (){
    // REMOVE ITEMS FROM CART
    var removeCartButtons = document.getElementsByClassName("cart-remove")
    console.log(removeCartButtons)
    for(var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click',removeCartItem)
    }
    //QUantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity') 
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change',quantityChanged); 
    }
    
}
// REMOVE ITEMS FROM CART(making fuction removeCartItem)
function removeCartItem (event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateTotal()
}
// Quantity changes
function quantityChanged(){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateTotal();
}
// UPdate Total
function updateTotal (){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var initial = 0;
    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0]
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0]
        var price = parseFloat(priceElement.innerText.replace("$", ""))
        var quantity = quantityElement.value
        initial = initial + (price * quantity)
        total = initial.toFixed(2);

        // if price contains some cents Value

        document.getElementsByClassName('total-price')[0].innerHTML = "$" + total;
    }
}
