// fetching data
const url ="http://localhost:3000/f1Cars"
fetch(url)
.then(res => res.json())
.then(f1Cars => f1Cars.forEach(cars=> displayProducts(cars)))

// Displaying products in html
function displayProducts(cars){
    const products = document.createElement("p")
    products.className = "card"
    products.innerHTML =`
    <img src=${cars.image}><br>
    <p>${cars.name}</p><br>
    <p>${cars.description}</p><br>
    <p>${cars.likes}</p>
    `
    document.querySelector("#displayProducts").appendChild(products)
}
