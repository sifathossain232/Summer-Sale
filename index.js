// // document.getElementById('cart-container').addEventListener('click',function(){
// //     const firstKitchenAccessoriesPrice = document.getElementById('first-kitchen-accessories-price');
// //     const firstKitchenAccessoriesPriceInnerText = firstKitchenAccessoriesPrice.innerText;
// //     const firstKitchenAccessories = document.getElementById('first-kitchen-accessories').innerText;
// //     const result = firstKitchenAccessoriesPriceInnerText.slice(0,5);

// //     console.log(firstKitchenAccessories, result);
    
// // })

// function getInputValue(elementId){
//     const elementFiled = document.getElementById(elementId);
//     const elementInnerText = elementFiled.innerText;
//     return elementInnerText;
// }



// document.getElementById('cart-container').addEventListener('click',function(){
//     const firstKitchenAccessories = getInputValue('first-kitchen-accessories');
//     console.log(firstKitchenAccessories);
//     const firstKitchenAccessoriesPrice = getInputValue('first-kitchen-accessories-price');
//     console.log(firstKitchenAccessoriesPrice);
//     addToCalculationEntry('K.accessories', firstKitchenAccessoriesPrice);
// })

// document.getElementById('second-container').addEventListener('click', function(){
//     const secondKitchenAccessories = getInputValue('second-kitchen-accessories');
//     console.log(secondKitchenAccessories);
//     const secondKitchenAccessoriesPrice = getInputValue('second-kitchen-accessories-price');
//     console.log(secondKitchenAccessoriesPrice);
//     addToCalculationEntry('K.accessories', secondKitchenAccessoriesPrice);
// })





// function addToCalculationEntry(elementType, firstKitchenAccessoriesPrice){
//     console.log(elementType + ' ' + firstKitchenAccessoriesPrice);
//     const createConatiner = document.getElementById('create-conatiner');
//     const pera = document.createElement('p');
//     const count = createConatiner.childElementCount;
//     pera.innerHTML = `${count + 1}. ${elementType} ${firstKitchenAccessoriesPrice} `;
//     createConatiner.appendChild(pera);
// }


// let num1 = 1;
// let toTotal = 0;


// const allCarts = document.querySelectorAll('.card');

// for(let i = 0; i < allCarts.length; i++){
// const cart = allCarts[i];
// cart.addEventListener('click',function(){
//     const tittle = cart.querySelector('h2').innerText;
// // const paragraph =  cart.querySelector("p").childNodes[0].innerText;
// const paragraph =  cart.querySelector("p").innerText;


// const createContainer = document.getElementById('create-conatiner');
// const p = document.createElement('p')
// const h2 = document.createElement('h2')
// p.innerHTML =` ${tittle} ${paragraph} ` ;
// createContainer.appendChild(p);
// // h2.innerHTML = tittle;
// createContainer.appendChild(h2);

//     totalPrice += paragraph;
//     document.getElementById("total-price").innerText = totalPrice;
  




// // console.log(tittle,paragraph);
// })
// }



// let num = 1;
// let totalPrice = 0;
// const cards = document.querySelectorAll(".card");
// for (let i = 0; i < cards.length; i++) {
//   const card = cards[i];

//   card.addEventListener("click", function () {
//     const tittle = card.querySelector("h2").innerText;
//     const paragraph = parseFloat(card.querySelector("p").innerText.split(" ")[1]);
//     //  const paragraph =  card.querySelector("p").innerText;
//     const tittleContainer = document.getElementById("create-conatiner");
//     const p = document.createElement("p");
//     p.innerText = num + "." + tittle;
//     num++;
//     tittleContainer.appendChild(p);

//     totalPrice += paragraph;
//     document.getElementById("total-price").innerText ;
//   });
// }


let num = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];

  card.addEventListener("click", function () {
    const tittle = card.querySelector("h2").innerText;
    const price = parseFloat(card.querySelector("p").innerText.split(" ")[1]);
    const tittleContainer = document.getElementById("create-conatiner");
    const p = document.createElement("p");
    p.innerText = num + "." + tittle;
    num++;
    tittleContainer.appendChild(p);

    totalPrice += price;
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
  });
}