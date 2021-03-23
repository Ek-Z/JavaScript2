class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { scr: 'img/item1.jpg', title: 'Syltherine', price: 2500 },
            { scr: 'img/item2.jpg', title: 'Leviosa', price: 5000 },
            { scr: 'img/item3.jpg', title: 'Lolito', price: 7000 },
            { scr: 'img/item4.jpg', title: 'Respira', price: 1500 },
        ];
    }

    render() {
        let goodsHtml = '';
        this.goods.forEach(({ scr, title, price }) => {
            const good = new GoodsItem(scr, title, price);
            goodsHtml += good.render();
        });
        document.querySelector('.cart__list').innerHTML = `<table>${goodsHtml}</table>`;
    }
}

class GoodsItem {
    constructor(scr, title, price) {
        this.scr = scr;
        this.title = title;
        this.price = price;
    }

    render() {
        return `<tr><td><img class="cart__img" src="${this.scr}" alt=""></td> <td>${this.title}</td> <td>${this.price} &#8381;</td><td><button class="delete-item">[X]</button></td></tr>`;
    }
}


class Cart {
    constructor() {
        this.goods = [];
    }

    //Добавление товаров в корзину
    addCartItem(cartItem) {
        this.goods.push(cartItem);
    }

    //Сумма товаров в корзине
    sum() {
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price;
        });
        document.querySelector('.cart__sum').innerHTML = `Сумма всех товаров: ${sum} &#8381;`;
    }
}

const cart = new Cart;
cart.sum();
window.onload = () => {
    const goodsList = new GoodsList();
    goodsList.fetchGoods();
    goodsList.render();
}

