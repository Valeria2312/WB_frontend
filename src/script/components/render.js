// const renderProductData = () => {
//
// }
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
            if(product.productInfo.color) {
                arrInfo.push(`<p class="basket-item-color">Цвет: ${product.productInfo.color}</p>`)
            } if(product.productInfo.size) {
                arrInfo.push( `<p class="basket-item-size">Размер: ${product.productInfo.size}</p>`)
            }
        }
        return `<div class="basket-item-quality">${arrInfo.join("")}</div>`
    }
    let getProductInfoInMobile = () => {
        let arrInfo = [];
        if(product.productInfo) {
            if(product.productInfo.color) {
                arrInfo.push(`<p class="basket-item-color">Цвет: ${product.productInfo.color}</p>`)
            }
        }
        return `<div class="basket-item-quality">${arrInfo.join("")}</div>`
    }
    let getSizeProductInfoInMobile = () => {
            if(product.productInfo.size) {
                return `<p class="basket-item-size-mobile">${product.productInfo.size}</p>`;
            }
            else {
                return ""
            }
    }
    let getSizeProductInfoInMobileOutStock = () => {
        if(product.openCheck && product.openSize) {
            return `
                <p class="basket-item-size-mobile-more">${product.openSize}</p>
                <p class="basket-item-openCheck"></p>`
        } else {
            return ""
        }
    }
    let getInStock = () => {
         if (product.inStock < 5) {
             return `<div class="basket-item-notification">Осталось ${product.inStock} шт.</div>`
         } return ``
     }
     let getDiscount = () => {
       let fullPrice = product.price * product.quantity;
       let newPrice = fullPrice - product.discount;
       if(newPrice > 10000 ) {
           return  `<span class="basket-item-newPrice largeNumber">${Number.parseInt(newPrice).toLocaleString('ru')} <p class="basket-item-newPrice-currency">сом</p></span>`;
       }
           return `<span class="basket-item-newPrice">${Number.parseInt(newPrice).toLocaleString('ru')} <p class="basket-item-newPrice-currency">сом</p></span>`;
         }
     let getFullPrice = () => {
        let fullPrice = product.price * product.quantity;
        return ` <span class="basket-item-oldPrice strike">${fullPrice} сом</span>
                                           <div class="price-info-container">
                                                <div class="discountOnProduct"><div class="discountOnProduct-header">Скидка 55%</div> <div>-${product.discountOnProduct} сом</div></div>
                                                <div class="discountPersonal"><div class="discountPersonal-header">Скидка покупателя 10%</div> <div>-${product.discountPersonal} сом</div></div>
                                            </div>`
     }
    products += `<div class="basket-item">
                            <div class="basket-item-mainInformation">
                                <div class="checkbox-custom checkbox-inItem">
                                    <label for="checkbox-id" class="checkbox-label">
                                        <input class="realCheckbox" type="checkbox" checked/>
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
                                            <div class="company-info-container">
                                                <div class="company-info-container-header">${product.companyInfo.name}</div>
                                                <div>${product.companyInfo.ogrn}</div>
                                                <div>${product.companyInfo.address} </div>
                                            </div>
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
                                                    min="1" 
                                                    max="${product.inStock}"
                                                    value="${product.quantity}"
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
                                            <svg class="basket-item-addFavorite-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z" fill="black"/>
</svg>
                                        </button>
                                        <button class="basket-item-delete">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="black"/>
</svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="basket-item-price">
                                ${getDiscount()}
                                ${getFullPrice()}
                                </div>
                            </div>
                        </div>`

    productsInMobile += `<div class="basket-item">
                            <div class="basket-item-mainInformation">
                                <div class="basket-item-img">
                                <div class="checkbox-custom checkbox-inItem">
                                    <label for="checkbox-id" class="checkbox-label">
                                        <input class="realCheckbox" type="checkbox" checked/>
                                        <span class="newCheckbox"></span>
                                    </label>
                                </div>
                                ${getSizeProductInfoInMobile()}
                                    <div class="basket-item-photo">
                                        <img src="${product.img}" alt="Изображение товара">
                                    </div>
                                </div>
                                <div class="main-info">
                                <div class="basket-item-price">
                                    ${getDiscount()}
                                    <span class="basket-item-oldPrice strike">${product.price} сом</span>
                                </div>
                                <span class="basket-item-name tree_point">${product.productName}</span>
                                ${getProductInfoInMobile()}
                                <div class="basket-item-info">
                                    <p class="basket-item-warehouse">${product.warehouse}</p>
                                </div>
                                </div>
                                </div>
                            <div class="basket-item-description">
                                <div class="basket-item-count">
                                    <div class="counter">
                                        <button type="button" value="-" class="btn-minus">
                                            <img src="assets/images/svg/minus.svg" alt="минус">
                                        </button>
                                        <input
                                                type="number"
                                                value=${product.quantity}
                                                name="count"
                                                class="input-count"
                                                readonly
                                        />
                                        <button type="button" value="+" class="btn-plus">
                                            <img src="assets/images/svg/plus.svg" alt="плюс">
                                        </button>
                                    </div>
                                </div>
                                <div class="basket-item-functions">
                                ${product.inStock? `<span class="basket-item-notification">Осталось ${product.inStock} шт.</span>` : `<span class="basket-item-notification"></span>`}
                                    
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
                                    <img src="${product.imgOutStock}" alt="Изображение товара">
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
                                ${getSizeProductInfoInMobile()}
                                ${getSizeProductInfoInMobileOutStock()}
                                <img class="basket-item-image" src="${product.imgOutStock}" alt="Изображение товара">
                                <div class="basket-item-subdescription">
                                    <span class="basket-item-name">${product.productName}</span>
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
