import { menuArray } from './data.js'


//menu element
const menuDiv = document.getElementById('menu-container')

render()

//render the meun's products
function getMenu(){
    let products = ''
    menuArray.forEach(function(product){
        products+=`
        <div class="menu" id="menu">
        <img class="menu-img" src="images/${product.name}.png" alt="pizza">
        <div class="container">
        <h3 class="product">${product.name}</h3>
        <p class="product-materials">${product.ingredients}</p>
        <h4 class="product-price">$${product.price}</h4>
        </div>
        <div class="btn-bg">
            <i class="fa-solid fa-plus addProduct-Btn"></i>
        </div>
        </div>
        <hr>
        `

})
    return products
}

function render(){
    menuDiv.innerHTML = getMenu()
}