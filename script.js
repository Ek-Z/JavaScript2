const goods = [
    { scr: 'img/item1.jpg', title: 'Syltherine', price: 2500 },
    { scr: 'img/item2.jpg', title: 'Leviosa', price: 5000 },
    { scr: 'img/item3.jpg', title: 'Lolito', price: 7000 },
    { scr: 'img/item4.jpg', title: 'Respira', price: 1500 },
];

const renderGoodsItem = (scr, title, price) => {
    return `<div class="item">
    <button class="item__button">Add to cart</button>
    <img class="item__img" src="${scr}" alt="">
    <div class="item__description"><h3 class="item__description-title">${title}</h3><p class="item__description-price">${price} &#8381;</p></div>
    </div>`;
};

const renderGoodsList = (list = []) => {
    let goodsList = list.map(item => renderGoodsItem(item.scr, item.title, item.price));
    document.querySelector('.products-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);