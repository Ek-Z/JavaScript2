const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title, price) => {
    return `<div class="item">
    <img class="item__img" src="" alt="">
    <div class="item__description"><h3 class="item__description-title">${title}</h3><p class="item__description-price">${price} &#8381;</p></div>
    </div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.products-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);