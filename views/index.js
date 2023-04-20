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