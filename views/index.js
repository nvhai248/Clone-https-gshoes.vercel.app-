let allShoes = await fetch("/data_shoes");
allShoes = await allShoes.json();

var MyShoesList = new Array();

var htmlForShop = "";
var htmlForCart = `<p class="CartP">Your Cart is empty!</p>`;

allShoes.shoes.forEach(element => {
    MyShoesList.push(new MyShoes(element));
});

MyShoesList.forEach(element => {
    htmlForShop += element.getShopItemHTML();
});

$('#BodyForShop').html(htmlForShop);
$('#BodyForCart').html(htmlForCart);

// get data from localStorage 
let cart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cart);
let billCart = 0;
for (let i = 0; i < 10; i++) {
    if (cart[i] != undefined) {
        if (htmlForCart == `<p class="CartP">Your Cart is empty!</p>`) {
            htmlForCart = "";
        }

        // update cart Space
        let obj = new MyShoes(cart[i]);

        htmlForCart += obj.getCartItemHtml();
        billCart += parseFloat(obj.price);

        $(`#ShopItem${i}`).html(isInCart);
    }
}

$('#BodyForCart').html(htmlForCart);
$('#Bill').html(billCart.toFixed(2));