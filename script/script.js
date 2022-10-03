let delet = document.querySelector(".delete")
let cartBtn = document.querySelectorAll(".btn--addToCart");
let cartNumber = document.querySelector(".right-section__carts-number").innerHTML;
let openCartResult = document.querySelector(".right-section__cart");
let modalAdded = document.querySelector(".modal-added");
let numberOfProducts = document.querySelector(".numberOfProducts").innerHTML;
let noItemsCart = document.querySelector(".noItemsCart");
let lastPriceOfProducts = document.querySelector(".lastPriceOfProducts").innerHTML;



openCartResult.addEventListener("click", () => {
  modalAdded.classList.toggle("d-none");
});

cartBtn.forEach(function (btn) {


  btn.addEventListener("click", function (evt) {
    let cartedNumber = cartNumber++ + 1;
    // if (cartedNumber >= 1) {
    //   noItemsCart.classList.add("d-none");
    // } else {
    //   noItemsCart.classList.remove("d-none");
    // }
    let lastPrice = 125 * cartedNumber;
    
    document.querySelector(".lastPriceOfProducts").innerHTML = lastPrice + "$";
    document.querySelector("#result").innerHTML = cartedNumber;
    document.querySelector(".result").innerHTML = cartedNumber;
    document.querySelector(".numberOfProducts").innerHTML = cartedNumber;

    
  });
});




// carusel image

let index = 0;



function slider() {
   if (index > $a('.slide-item').length - 1) {
      index = 0
   }

   if (index < 0) {
      index = $a('.slide-item').length - 1;
   }

   $('.slide-list').style.transform = `translateX(-${index*1000}px)`;
}




$('.next').addEventListener('click', () => {
   index++;
   slider()
   console.log(index);
})

$('.prev').addEventListener('click', () => {
   index--;
   slider()
   console.log(index);
})


setInterval(() => {
   index++;
   slider()
}, 4000)


delet.addEventListener("click", () =>{
  numberOfProducts.innerHTML=""
  
})

$a('.ind').forEach((e,i)=>{

   e.addEventListener('click', () => {
      index=i
      slider()
      console.log(index);
   })
   
})







