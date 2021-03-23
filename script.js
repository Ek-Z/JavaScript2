class GoodsItem {
    constructor(scr, title, price) {
        this.scr = scr;
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="item">
        <button class="item__button">Add to cart</button>
        <img class="item__img" src="${this.scr}" alt="">
        <div class="item__description"><h3 class="item__description-title">${this.title}</h3><p class="item__description-price">${this.price} &#8381;</p></div>
        </div>`;
    }
}

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
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.scr, good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.products-list').innerHTML = listHtml;
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();