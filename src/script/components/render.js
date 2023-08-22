let products = '',
    productsInMobile = '',
    productsOutStock = '',
    productsOutStockInMobile = '',
    methodDelivery = '',
    costDelivery = '',
    paymentDescription = '';

productData.forEach((product) => {
    let getProductInfo = () => {
        let arrInfo = [];
        if(product.productInfo) {
            if(product.productInfo.size) {
                arrInfo.push( `<p class="basket-item-size">Размер: ${product.productInfo.size}</p>`)
            } if(product.productInfo.color) {
                arrInfo.push(`<p class="basket-item-color">Цвет: ${product.productInfo.color}</p>`)
            }
        }
        return `<div class="basket-item-quality">${arrInfo.join("")}</div>`
    }
    let getInStock = () => {
         if (product.inStock < 5) {
             return `<div class="basket-item-notification">Осталось ${product.inStock} шт.</div>`
         } return ``
     }
     let getDiscount = () => {
       let newPrice = product.price - product.discount;
       return `<span class="basket-item-newPrice">${newPrice} <p class="basket-item-newPrice-currency">сом</p></span>`;
     }
    products += `<div class="basket-item">
                            <div class="basket-item-mainInformation">
                                <div class="checkbox-custom checkbox-inItem">
                                    <label for="checkbox-id" class="checkbox-label">
                                        <input type="checkbox" checked />
                                        <span class="newCheckbox"></span>
                                    </label>
                                </div>
                                <div class="basket-item-photo">
                                    <img src="${product.img}" alt="Изображение товара">
                                </div>
                                <div class="basket-item-description">
                                    <span class="basket-item-name">${product.productName}</span>
                                    ${getProductInfo()}
                                    <div class="basket-item-info">
                                        <p class="basket-item-warehouse">${product.warehouse}</p>
                                        <div class="basket-item-subInfo">
                                            <p class="basket-item-provider">${product.companyInfo.name}
                                            </p>
                                                <img class="basket-item-attention" src="assets/images/svg/attention.svg" alt="Внимание">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="basket-item-subInformation">
                                <div class="basket-item-functions">
                                    <div class="basket-item-count">
                                        <div class="counter">
                                            <button type="button" value="-" class="btn-minus">
                                                <img src="assets/images/svg/minus.svg" alt="минус">
                                            </button>
                                            <input
                                                    type="number"
                                                    value="1"
                                                    name="count"
                                                    class="input-count"
                                                    readonly
                                            />
                                            <button type="button" value="+" class="btn-plus">
                                                <img src="assets/images/svg/plus.svg" alt="плюс">
                                            </button>
                                        </div>
                                        ${getInStock()}
                                    </div>
                                    <div class="basket-item-opportunities">
                                        <button class="basket-item-addFavorite">
                                            <img src="assets/images/svg/favorite.svg" alt="Добавить в избранное">
                                        </button>
                                        <button class="basket-item-delete">
                                            <img src="assets/images/svg/delete.svg" alt="Удалить товар">
                                        </button>
                                    </div>
                                </div>
                                <div class="basket-item-price">
                                ${getDiscount()}
                                    <span class="basket-item-oldPrice strike">${product.price} сом</span>
                                </div>
                            </div>
                        </div>`
    productsInMobile += `<div class="basket-item">
                            <div class="basket-item-mainInformation">
                                <div class="basket-item-img">
                                    <div class="checkbox-custom checkbox-inItem">
                                        <label for="checkbox-id" class="checkbox-label">
                                            <input type="checkbox" checked />
                                            <span class="newCheckbox"></span>
                                        </label>
                                    </div>
                                    <div class="basket-item-photo">
                                        <img src="${product.img}" alt="Изображение товара">
                                    </div>
                                </div>
                                <div class="basket-item-count">
                                    <div class="counter">
                                        <button type="button" value="-" class="btn-minus">
                                            <img src="assets/images/svg/minus.svg" alt="минус">
                                        </button>
                                        <input
                                                type="number"
                                                value="1"
                                                name="count"
                                                class="input-count"
                                                readonly
                                        />
                                        <button type="button" value="+" class="btn-plus">
                                            <img src="assets/images/svg/plus.svg" alt="плюс">
                                        </button>
                                    </div>
                                </div>
                                </div>
                            <div class="basket-item-description">
                                <div class="basket-item-price">
                                    ${getDiscount()}
                                    <span class="basket-item-oldPrice strike">${product.price} сом</span>
                                </div>
                                <span class="basket-item-name">${product.productName}</span>
                                ${getProductInfo()}
                                <div class="basket-item-info">
                                    <p class="basket-item-warehouse">${product.warehouse}</p>
                                </div>
                                <div class="basket-item-functions">
                                    <span class="basket-item-notification">Осталось ${product.inStock} шт.</span>
                                    <div class="basket-item-opportunities">
                                        <button class="basket-item-addFavorite">
                                            <img src="assets/images/svg/favorite.svg" alt="Добавить в избранное">
                                        </button>
                                        <button class="basket-item-delete">
                                            <img src="assets/images/svg/delete.svg" alt="Удалить товар">
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </div>`
    productsOutStock += `<div class="basket-item">
                            <div class="basket-item-mainInformation">
                                <div class="basket-item-photo">
                                    <img src="${product.img}" alt="Изображение товара">
                                </div>
                                <div class="basket-item-description">
                                    <span class="basket-item-name">${product.productName}</span>
                                    ${getProductInfo()}
                                </div>
                            </div>
                            <div class="basket-item-subInformation">
                                <div class="basket-item-functions">
                                    <div class="basket-item-opportunities">
                                        <button class="basket-item-addFavorite">
                                            <img src="assets/images/svg/favorite.svg" alt="Добавить в избранное">
                                        </button>
                                        <button class="basket-item-delete">
                                            <img src="assets/images/svg/delete.svg" alt="Удалить товар">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>`
    productsOutStockInMobile += `<div class="basket-item">
                            <div class="basket-item-description">
                                <img class="basket-item-image" src="${product.imgOutStock}" alt="Изображение товара">
                                <div class="basket-item-subdescription">
                                    <span class="basket-item-name">${product.productName}</span>
                                    ${getProductInfo()}
                                </div>
                            </div>
                            <div class="basket-item-functions">
                                <div class="basket-item-opportunities">
                                    <button class="basket-item-addFavorite">
                                        <img src="assets/images/svg/favorite.svg" alt="Добавить в избранное">
                                    </button>
                                    <button class="basket-item-delete">
                                        <img src="assets/images/svg/delete.svg" alt="Удалить товар">
                                    </button>
                                </div>
                            </div>
                        </div>`
})
methodDelivery += `<span class="point-issue-title">Пункт выдачи</span>
                        <span class="point-issue-text">${deliveryData[0].address}<span class="point-issue-subText"><img class="point-issue-img" src="assets/images/svg/star.svg" alt="звезда">${deliveryData[0].rating} ${deliveryData[0].workSchedule}</span></span>`
costDelivery += `<span class="cost-delivery-title">Стоимость доставки</span> <span>${deliveryData[0].shippingCost}</span>`
paymentDescription += `<img src="${cardData[0].img}" alt="delivery-free">
                        <span class="payment-description-text-inPaymentMethod">${cardData[0].number}<span>01/30</span></span>`;

document.querySelector(".basket-items").innerHTML = products;
document.querySelector(".basket-items-mobile").innerHTML = productsInMobile;
document.querySelector(".basket-item-noProduct").innerHTML = productsOutStock;
document.querySelector(".basket-items-mobile-noProduct").innerHTML = productsOutStockInMobile;
document.querySelector(".point-issue").innerHTML = methodDelivery;
document.querySelector(".cost-delivery").innerHTML = costDelivery;
document.querySelector(".payment-description").innerHTML = paymentDescription
