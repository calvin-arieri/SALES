// fetching data
const url ="http://localhost:3000/f1Cars"
fetch(url)
.then(res => res.json())
.then(f1Cars => console.log(f1Cars))

// Displaying products in html
/*function displayProducts(cars){
    const products = document.createElement("p")
    products.className = "card"
    products.innerHTML =`
    <img src=${cars.image}><br>
    <p>${cars.nane}</p><br>
    <p>${cars.description}</p><br>
    <p>${cars.likes}</p>
    `
    document.querySelector("#displayProducts").appendChild(card)*/
//}
