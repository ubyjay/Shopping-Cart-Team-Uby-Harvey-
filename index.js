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
}
// REMOVE ITEMS FROM CART(making fuction removeCartItem)
function removeCartItem (event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()

}
// UPdate Total

