
// selcet cart cantiner
let cartContainer = document.querySelector('#cart');
// selct cart header
let cartHeader = document.querySelector('.cart-header');
// selict prodacts cantiner
let prodactsCantiner = document.querySelector('#products');
// selict cat Itmse
let cartItems = document.querySelector('.cart-items')
// selcit total-price
let totalPriceEl = document.querySelector('.total-price');

let totalItemsEl = document.querySelector('.total-items')
// eyem img
let eyemImg = document.querySelector('.eyemImg');
// pass Input
let passInput = document.querySelector('#pass-input');

let n = 0;

cartHeader.addEventListener('click', function () {

    if (n == 0) {

        cartContainer.style.bottom = '-10px';
        n++;

    } else {

        cartContainer.style.bottom = '-360px';
        n = 0;

    }

})


function showAllProducts() {
    for (let i = 0; i < products.length; i++) {

        prodactsCantiner.innerHTML += `      <div class="col-lg-3 col-md-6 mb-5">
        <div class="single-product">
        <div class="product-img"><img class="w-100" src=" ` + products[i].imgSrc + ` " alt=""></div>
       
        <div class="product-details">
            <p> ` + products[i].name + ` </p>     
           
            <div class="price">
                <h6>$`+ products[i].price + `</h6>
                <h6 class="l-through">$ ` + products[i].PreviousPrice + ` </h6>
               
            </div>
    
            <div class="prd-bottom">
                <a  class="social-info">
                    
                  <span class="ti-bag"  onclick="addToCart(` + products[i].id + `)"><i class="bi bi-bag-fill"></i></span>
                  <p class="hover-text">add to bag</p>
                </a>
    
                <a href="#" class="social-info">
                    <span class="ti-bag"><i class="bi bi-heart"></i></span>
                  <p class="hover-text">Wishlist</p>
                </a>
    
                <a href="#" class="social-info">
                    <span class="ti-bag"><i class="bi bi-arrow-repeat"></i></span>
                  <p class="hover-text">compare</p>
                </a>
    
                <a href="#" class="social-info">
                    <span class="ti-bag"><i class="bi bi-arrows-move"></i></span>
                  <p class="hover-text">view more</p>
                </a>
            </div>
        </div>
    </div>
    </div>`

    }

}



showAllProducts()



// cart array

let cart = [];


// suanction addToCart

// add to cart function
function addToCart(id) {


    let itemId = cart.some(function (item) {
        return item.id == id;
    });


    if (itemId) {
        changeNumberOfUnits('plus', id);
    } else {

        let item = products.find(function (p) {
            return p.id == id;
        });

        item.numberOfUnits = 1;
        cart.push(item);
    }
    renderCartItems();
}



//  render cart items


function renderCartItems() {
    cartItems.innerHTML = ''
    for (let i = 0; i < cart.length; i++) {

        cartItems.innerHTML += `<li class="cart-item">
        <div class="p-name" onclick="deleteFromCart(` + cart[i].id + `)">` + cart[i].name + `</div>
        <div class="price">`+ cart[i].price + `</div>
        <div class="p-unit">
            <span class="plus" onclick="changeNumberOfUnits('plus',`+ cart[i].id + `)"><i class="bi bi-plus"></i></span>
            <span class="unit">` + cart[i].numberOfUnits + `</span>
            <span class="minus" onclick="changeNumberOfUnits('minus', ` + cart[i].id + `)"><i class="bi bi-dash"></i></span>
        </div>
    </li>`

    }



}


// change number of units

function changeNumberOfUnits(action, id) {

    cart = cart.map(function (item) {
        let oldNumberOfUnits = item.numberOfUnits; //1

        if (item.id == id) {

            if (action == 'plus') {
                oldNumberOfUnits++;
            } else if (action == 'minus' && oldNumberOfUnits > 1) {
                oldNumberOfUnits--;
            }

        }

        item.numberOfUnits = oldNumberOfUnits;
        return item;
    });

    renderCartItems();
    renderTotal();
}


// render total

// render total
function renderTotal() {
    let totalPrice = 0;
    let totalItems = 0;

    for (let i = 0; i < cart.length; i++) {
        totalItems += cart[i].numberOfUnits;
        totalPrice += cart[i].price * cart[i].numberOfUnits;
    }

    totalPriceEl.innerHTML = totalPrice;
    totalItemsEl.innerHTML = totalItems;


}



// delete from cart
function deleteFromCart(id) {
    cart = cart.filter(function (item) {
        return item.id != id;
    });
    renderCartItems();
    renderTotal();
}





passInput.addEventListener('keyup', function () {

    passInputLength = passInput.value.length;

    if(passInputLength==0){

        eyemImg.style.display='none'


    }else{
        eyemImg.style.display='inline-block'
    }
    

})


eyemImg.addEventListener('click', function () {

    let passInputType = passInput.getAttribute('type')

    if (passInputType == 'password') {

        passInput.setAttribute('type', 'text');
        eyemImg.setAttribute('src', '../img/passImg/invisible-eye.png')

    } else {

        passInput.setAttribute('type', 'password');
        eyemImg.setAttribute('src', '../img/passImg/visible-eye.png')

    }

})



