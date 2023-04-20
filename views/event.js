upDateCart = (Shoe, activity) => {
    if (activity == "Add") {
        $('#BodyForCart').html($('#BodyForCart').html() + Shoe);
    }
    else {
        $('#BodyForCart').html($('#BodyForCart').html() - Shoe);
    }
}


updateCartBill = (moneys, activity) => {
    if (activity == "Add") {
        $('#Bill').html((parseFloat($('#Bill').html()) + parseFloat(moneys)).toFixed(2));
    }
    else {
        $('#Bill').html((parseFloat($('#Bill').html()) - parseFloat(moneys)).toFixed(2));
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

