import { menuArray } from './data.js'


//menu element
const menuDiv = document.getElementById('menu-container')
//order element
const orderDiv = document.getElementById('order')
const totalPriceOrderList = document.getElementById('total-price-order-list')
const completeOrderDiv = document.getElementById('complete-order')
const modal = document.getElementById('modal')
const paymentForm = document.getElementById('payment-form') 
const finishPayment = document.getElementById('finish-payment-container')
const order = []


render()


//tracking the click
document.addEventListener('click',function(e){
    if(e.target.id === '🍕'){
        console.log(order)
        console.log("Pizza")
        handleOrder(0,"Pizza",14)
    }else if(e.target.id === '🍔'){
        console.log("Hamburger")
        handleOrder(1,"Ham",12)
    }else if(e.target.id === '🍺'){
        console.log("Beer")
        handleOrder(2,"Beer",12)
    }else if(e.target.dataset.pname){
        removeProduct(e.target.dataset.pname)
    }else if(e.target.id==='com-btn'){
        processPayment()
    }
})

function handleOrder(id,name,itemPrice){
    order.push({
        order_id:order.length,
        id:id,
        name:name,
        price:itemPrice,
    }) 
    genOrder()
    const price = calTotalPrice()
    genTotalPrice(price)
}
/*

//handle the pizza
function handlePizzaOrder(){
    order.push({
        order_id:order.length,
        id:0,
        name:"Pizza",
        price:14,
    }) 
    genOrder()
    const price = calTotalPrice()
    genTotalPrice(price)
}

//handle the hamburger
function handleHamburger(){
    order.push({
        order_id:order.length,
        id:1,
        name:"Hamburger",
        price:12,
    })
    genOrder()
    const price = calTotalPrice()
    genTotalPrice(price)
}

//handle the beer
function handleBeer(){
    order.push({
        order_id:order.length,
        id:2,
        name:"Beer",
        price:12,
    })
    genOrder()
    const price = calTotalPrice()
    genTotalPrice(price)
}

*/

//remove the product
function removeProduct(remove_pname){
    const removeArray = order.filter(function(product){
        return product.name === remove_pname
    })
    order.splice(removeArray,1);
    refreshPage()
}



//gen the order payment
function genOrder(){
    console.log("TEST1")
    let priceList = ''
    if(order.length>0){
        orderDiv.classList.remove('hidden')
        totalPriceOrderList.classList.remove('hidden')
        completeOrderDiv.classList.remove('hidden')
        order.forEach(function(item){
            priceList += `<div class="order-list">
        <h2 class="order-product" id="${item.id}" >${item.name} 
        <button class="remove" id="remove" data-pname="${item.name}">remove</button></h2>
        <h4 class="order-price">${item.price}</h4></div>
        `
        })
        return orderDiv.innerHTML = priceList
    }else{
        orderDiv.classList.add('hidden')
        totalPriceOrderList.classList.add('hidden')
        completeOrderDiv.classList.add('hidden')
    }
}

function genTotalPrice(price){
    console.log(price)
    totalPriceOrderList.innerHTML =`
    <div class="total-price-order-list">
        <h2 class="totalPrice-title">Total price:</h2>
        <h4 class="total-price">${price}</h4>
        </div>
        `
        completeOrderDiv.innerHTML =`<button type="button" class="com-btn" id="com-btn">Complete order</button>`
}


function calTotalPrice(){
    let totalPrice = 0
    order.forEach(function(item){
        totalPrice+=item.price
    })
    return totalPrice
}

//process card payment
function processPayment(){
    modal.style.display = 'flex'
}

paymentForm.addEventListener('submit',function(e){
    e.preventDefault()

    const paymentFormData = new FormData(paymentForm)
    const name = paymentFormData.get('name')
    orderDiv.classList.add('hidden')
    totalPriceOrderList.classList.add('hidden')
    completeOrderDiv.classList.add('hidden')
    modal.style.display = 'none'
    finishPayment.innerHTML = `    <div class="finish-payment" id="finish-payment">
    <h3 class="finish-payment-content">Thanks,${name}! Your order is on its way!</h3>
</div>`
    const finishPaymentDiv = document.getElementById('finish-payment');
})



//render the meun's products
function getMenu(){
    let products = ''
    menuArray.forEach(function(product){
        products+=`
        <div class="menu">
        <img class="menu-img" src="images/${product.name}.png" alt="pizza">
        <div class="container">
        <h3 class="product">${product.name}</h3>
        <p class="product-materials">${product.ingredients}</p>
        <h4 class="product-price">$${product.price}</h4>
        </div>
        <div class="btn-bg">
            <i class="fa-solid fa-plus addProduct-Btn" id=${product.emoji}></i>
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

function refreshPage(){
    genOrder()
    const price = calTotalPrice()
    genTotalPrice(price)
}