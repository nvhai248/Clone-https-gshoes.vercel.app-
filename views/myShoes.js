let isNotInCart = `
<div class="Out" onclick="addToCart()">
    <p> ADD TO CART </p>
</div>
`

let isInCart = `
<div class="shopItemBtnCover">
    <div class="shopItemCoverCheck">

    </div>
</div>
`


class MyShoes {
    constructor(obj) {
        this.id = obj.id;
        this.image = obj.image;
        this.name = obj.name;
        this.description = obj.description;
        this.price = obj.price;
        this.color = obj.color;
    }

    getShopItemHTML() {
        return `
        <div class="ShopItem">
            <div class="ShopItemImg" style="background-color: ${this.color};">
            <img
                src="${this.image}"
                alt="${this.id}"
            />
            </div>
            <div class="ShopItemName">${this.name}</div>
            <div class="ShopItemContent">
                ${this.description}
            </div>

            <div class="ShopItemBottom">
            <div class="ShopItemPrices">$${this.price}</div>
            <div 
            class="ShopItemBtn ItemInactive" 
            data-id="${this.id}" 
            data-image="${this.image}"
            data-name="${this.name}"
            data-description="${this.description}"
            data-price="${this.price}"
            data-color="${this.color}">

                ${isNotInCart}
            </div>
            </div>
        </div>
        `
    }

    getCartItemHtml() {
        return `
        <div class="CartItem">
            <div class="CartItemLeft">
            <div class="cartItemImg" style="background-color: ${this.color}">
                <div class="cartItemImgBlock">
                <img
                    src="${this.image}"
                    alt="${this.id}"
                />
                </div>
            </div>
            </div>

            <div class="cartItemRight">
            <div class="cartItemName">${this.name}</div>
            <div class="cartItemPrice">$${this.price}</div>
            <div class="cartItemAction">
                <div class="cartItemCount">
                    <div class="cartItemCountBtn">-</div>
                    <div class="cartItemCountNumber">1</div>
                    <div class="cartItemCountBtn">+</div>
                </div>

                <div class="cartItemRemove">
                <img src="/app/assets/trash.png" alt="trash" />
                </div>
            </div>
            </div>
        </div>
        `
    }
}