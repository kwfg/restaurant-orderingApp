import { menuArray } from './data.js'


//menu element
const menuDiv = document.getElementById('menu-container')
const order = []

render()


//tracking the click
document.addEventListener('click',function(e){
    if(e.target.id === '0'){
        console.log("Pizza")
        handlePizzaOrder()
    }else if(e.target.id === '1'){
        console.log("Hamburger")
    }else if(e.target.id === '2'){
        console.log("Beer")
    }
})

//handle the pizza
function handlePizzaOrder(){
    order.push({
        id:0,
        name:"Pizza",
        price:14,
    }) 
    console.log(order)
    genOrder()
}

function genOrder(){

}


//render the meun's products
function getMenu(){
    let products = ''
    menuArray.forEach(function(product){
        console.log(product.id)
        products+=`
        <div class="menu">
        <img class="menu-img" src="images/${product.name}.png" alt="pizza">
        <div class="container">
        <h3 class="product">${product.name}</h3>
        <p class="product-materials">${product.ingredients}</p>
        <h4 class="product-price">$${product.price}</h4>
        </div>
        <div class="btn-bg">
            <i class="fa-solid fa-plus addProduct-Btn" id=${product.id}></i>
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