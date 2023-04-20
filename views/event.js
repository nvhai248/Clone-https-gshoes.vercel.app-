upDateCart = (Shoe, activity) => {
    if (activity == "Add") {
        if ($('#BodyForCart').html() == `<p class="CartP">Your Cart is empty!</p>`)
            $('#BodyForCart').html("");
        $('#BodyForCart').html($('#BodyForCart').html() + Shoe);
    }
}

removeFromCart = (id) => {
    $(`#BodyForCart #cartItem${id}`).remove();
    $(`#ShopItem${id}`).html(isNotInCart);
    if ($(`#BodyForCart`).html() == "") { $(`#BodyForCart`).html(`<p class="CartP">Your Cart is empty!</p>`) }
}


updateCartBill = (moneys, activity) => {
    if (activity == "Add") {
        $('#Bill').html((parseFloat($('#Bill').html()) + parseFloat(moneys)).toFixed(2));
    }
    else {
        $('#Bill').html((parseFloat($('#Bill').html()) - parseFloat(moneys)).toFixed(2));

        if (parseFloat($('#Bill').html()) < 0) {
            $('#Bill').html("0")
        }
    }
}


addToCart = () => {
    let myDiv = event.target.closest('.Out').parentElement;
    myDiv.innerHTML = isInCart;

    var obj = {
        id: myDiv.getAttribute("data-id"),
        image: myDiv.getAttribute("data-image"),
        name: myDiv.getAttribute("data-name"),
        description: myDiv.getAttribute("data-description"),
        price: myDiv.getAttribute("data-price"),
        color: myDiv.getAttribute("data-color"),
    }

    obj = new MyShoes(obj);

    upDateCart(obj.getCartItemHtml(), "Add");
    updateCartBill(obj.price, "Add")
}

minus = () => {
    let myDiv = event.target.parentElement;
    let tagA = myDiv.querySelector('.cartItemCountNumber');
    let count = parseInt(tagA.innerHTML);
    count--;

    // update numbers
    tagA.innerHTML = count;

    // div update Data
    let divGetData = event.target.closest('.cartItemCount').parentElement;
    let prices = divGetData.getAttribute("data-price");
    let id = divGetData.getAttribute("data-id");
    // update bill
    updateCartBill(prices, "Del");

    if (count == 0) {
        //remove HTML 
        removeFromCart(id);
    }
}

plus = () => {
    let myDiv = event.target.parentElement;
    let tagA = myDiv.querySelector('.cartItemCountNumber');
    let count = parseInt(tagA.innerHTML);
    count++;

    // update numbers
    tagA.innerHTML = count;

    // div update Data
    let divGetData = event.target.closest('.cartItemCount').parentElement;
    let prices = divGetData.getAttribute("data-price");
    // update bill
    updateCartBill(prices, "Add");
}

remove = () => {
    let myDiv = event.target.closest('.cartItemRemove').parentElement;
    let tagA = myDiv.querySelector('.cartItemCount');
    tagA = myDiv.querySelector('.cartItemCountNumber');
    let count = parseInt(tagA.innerHTML);

    // div update Data
    let divGetData = event.target.closest('.cartItemRemove').parentElement;
    let prices = divGetData.getAttribute("data-price");
    let id = divGetData.getAttribute("data-id");

    // update bill
    updateCartBill(prices * count, "Del");

    //remove HTML 
    removeFromCart(id);
}
