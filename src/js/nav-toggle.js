// search
const navHidden = document.querySelector('.nav-hidden');
const navMenu = document.querySelector('.nav-menu');

// cart
const navCart = document.querySelector('.nav-cart');
const navCartHidden = document.querySelector('.nav-cart--hidden');

const toggleOff = document.querySelector(".btn-toggle__off");
const toggleOffCart = document.querySelector(".btn-cart-toggle__off");

// * toggle on
navMenu.addEventListener("click", function(){
    navHidden.classList.toggle('nav-visible');
})
navCart.addEventListener("click", function(){
    navCartHidden.classList.toggle('nav-visible');
})

// * toggle off
toggleOff.addEventListener("click",function(){
    navHidden.classList.toggle('nav-visible');
})
toggleOffCart.addEventListener("click",function(){
    navCartHidden.classList.toggle('nav-visible');
})