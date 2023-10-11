
const products = document.querySelectorAll(".basket-items-active .basket-item")

window.addEventListener('DOMContentLoaded', () => {
    countFullPrice()
})

//функция подсчета общей суммы
function countFullPrice() {
    let newFullPrice = 0,
        fullPrice = 0,
        discountPrice = 0,
        productQuantity = 0
    // const dataStorage = JSON.parse(localStorage.getItem("productData"))
    const dataStorage = JSON.parse(localStorage.getItem("productDataInBasket"));
    dataStorage.forEach((product) => {
                if(product.quantity && product.isChecked){
                    fullPrice += Number(product.price) * Number(product.quantity);
                    newFullPrice += Number(product.price)  * Number(product.quantity) - Number(product.discount);
                    discountPrice -= (Number(product.price) * Number(product.quantity)) - (Number(product.price) * Number(product.quantity) - Number(product.discount));
                    productQuantity += Number(product.quantity)
                }
    })
    document.querySelector(".order-final-order").innerHTML = `${Number.parseInt(newFullPrice).toLocaleString('ru')} сом` ;
    document.querySelector(".order-notDiscount-order").innerHTML = `${Number.parseInt(fullPrice).toLocaleString('ru')} сом`;
    document.querySelector(".order-discount-order").innerHTML =  `${Number.parseInt(discountPrice).toLocaleString('ru')} сом` ;
    document.querySelector(".order-notDiscount-text").innerHTML = `${productQuantity} товара`;
    localStorage.setItem("newFullPrice", newFullPrice)
    localStorage.setItem("productQuantity", productQuantity)
}

//каунтер
products.forEach((product) => {
    const minus = product.querySelector(".btn-minus");
    const plus = product.querySelector(".btn-plus");
    let counter = product.querySelector(".counter input");

        product.addEventListener('click', e => {
            const dataItemProduct = product.querySelector(".basket-item-name").innerHTML;
            const dataStorage = JSON.parse(localStorage.getItem("productData"))
            dataStorage.forEach((dataItem) =>{
                if(dataItem.productName === dataItemProduct) {
                    if (e.target === plus) {
                        e.stopPropagation();
                        if(counter.value === dataItem.inStock?.toString()) {
                            plus.disabled = true;
                        } else {
                            counter.value++;
                            dataItem.quantity = counter.value
                            localStorage.setItem("productData",JSON.stringify(dataStorage));
                            countFullPrice();
                            countingAmounts(product,dataItem.quantity);
                        }
                    } if(e.target === minus) {
                        e.stopPropagation();
                        if(counter.value === "1") {
                            minus.disabled = true;
                        } else {
                            counter.value--;
                            dataItem.quantity = counter.value
                            localStorage.setItem("productData",JSON.stringify(dataStorage));
                            countFullPrice();
                            countingAmounts(product,  dataItem.quantity);
                        }
                    }
                }
            })
        })

    })
//чекбоксов
products.forEach((product) => {
    let check = product.querySelector(".checkbox-custom")
    if(check) {
        check.addEventListener("click", () => checkInput(check,product));
        check.addEventListener("click", () => addProductInDelivery(check, product))
    }
})
//логика работы чекбоксов товаров
function checkInput(check,product) {
    const currentChack = check.querySelector("input");
    let productCurrent =  product.querySelector(".basket-item-name").innerHTML;
    if(currentChack?.checked === false) {
        currentChack.checked = true;
        let dataStorage = JSON.parse(localStorage.getItem("productDataInBasket"));
        const isInBasket = dataStorage.some((obj) => obj.productName === productCurrent);
        if (!isInBasket) {
            const currentObj = productData.find((obj) => obj.productName === productCurrent);
            if (currentObj) {
                dataStorage.push(currentObj);
                localStorage.setItem("productDataInBasket", JSON.stringify(dataStorage));
            }
        }
    } else {
        currentChack.checked = false;
        let dataStorage = JSON.parse(localStorage.getItem("productDataInBasket"));
        const filteredBasketData = dataStorage.filter((obj) => obj.productName !== productCurrent);
        localStorage.setItem("productDataInBasket", JSON.stringify(filteredBasketData));
    }
    countFullPrice()
    changeBasketCount()
}
function changeBasketCount () {
    let dataStorage = JSON.parse(localStorage.getItem("productDataInBasket"));
    const counter = document.querySelector(".menu-basket-counter");
    counter.innerHTML = dataStorage.length;
}

//логика работы AllCheckbox
const AllCheckbox = document.querySelector("#checkbox-All");
const checkboxes = document.querySelectorAll(".basket-items-active .checkbox-custom:not(.checkbox-all__container)");
let listBoolean = [];
checkboxes.forEach((item) => {
    item.addEventListener("click", () => {
        checkboxes.forEach((i) => {
           const currentItem = i.querySelector("input")
            listBoolean.push(currentItem.checked)
        });
        AllCheckbox.checked = !listBoolean.includes(false);
        listBoolean = [];
    })
})

// логика отрисовки товаров в доставке
function addProductInDelivery(check, product) {
    let imgProductInDelivery = '';
    let productCurrent =  product.querySelector(".basket-item-name").innerHTML;
    const currentCheck = check.querySelector("input");
    let initDataStorage = JSON.parse(localStorage.getItem("productData"));
    let fullImgProductInDelivery = document.querySelectorAll(".delivery-date img")
    const currentObj = initDataStorage.filter((obj) => {
        return obj.productName === productCurrent
    })
    const productInDelivery = currentObj.pop().imdMini;

    fullImgProductInDelivery.forEach((img) => {
        const parentWithClass = findParentWithClass(img, 'delivery-date-productImg-item');
        function findParentWithClass(element, className) {
            while (element) {
                if (element.classList.contains(className)) {
                    return element; // Если найден, вернуть элемент
                }
                element = element.parentElement;
            }
            return null;
        }

        imgProductInDelivery = img.currentSrc.replace('http://localhost:63342/WB_frontend/','');

        if(imgProductInDelivery === productInDelivery) {
            if(currentCheck.checked === true) {
                parentWithClass.style.display = "block"
                }
             if(currentCheck.checked === false){
                 parentWithClass.style.display = "none"
                }
        }
    })
}

//Checkbox на оплате с сменой текста в кнопке
const paymentCheckbox = document.querySelector(".paymentNow-check input");
const paymentButton = document.querySelector(".send-order");

paymentCheckbox.addEventListener("change", function () {
    const newFullPrice = localStorage.getItem("newFullPrice")
    if(paymentCheckbox.checked) {
        paymentButton.innerHTML = `Оплатить ${Math.round(Number(newFullPrice)).toLocaleString('ru')} сом`
    } else {
        paymentButton.innerHTML = `Заказать`
    }
})


// аккордион
const accordion = document.querySelector(".basket-items__checkbox .accordion__icon");
const itemsAccordion = document.querySelector(".basket-items");

const accordionNoProduct = document.querySelector(".basket-items-noProduct__checkbox .accordion__icon")
const itemsNoProduct = document.querySelector(".basket-item-noProduct");
const checkboxText = document.querySelector('.checkbox-text');
const newCheckbox = document.querySelector(".newCheckbox")

accordion.addEventListener("click", () => boxHandler(itemsAccordion));
accordionNoProduct.addEventListener("click", () => boxHandler(itemsNoProduct));

function boxHandler(items) {
    const price = localStorage.getItem("newFullPrice")
    const productQuantity = localStorage.getItem("productQuantity");
    items.classList.toggle("closed");
    if (!items.classList.contains('closed')) {
        checkboxText.textContent = `Выбрать все`
        newCheckbox.style.display = "inline-block"
    } else {
        checkboxText.textContent = ` ${productQuantity} товаров · ${Math.round(Number(price)).toLocaleString('ru')} сом`
        newCheckbox.style.display = "none"
    }
}

//подсчет суммы товара в корзине
function countingAmounts(product) {
    const dataStorage = JSON.parse(localStorage.getItem("productData"));
    let newFullPrice = 0,
        fullPrice = 0;

    dataStorage.forEach((dataItem) => {
        if (dataItem.productName === product.querySelector(".basket-item-name").textContent) {
            const quantity = dataItem.quantity;
            const price = dataItem.price;
            const discount = dataItem.discount;

            fullPrice += quantity * price;
            newFullPrice += (quantity * price) - (discount * quantity);
        }
    });

    const finalOrderElement = product.querySelector(".basket-item-newPrice");
    const notDiscountOrderElement = product.querySelector(".basket-item-oldPrice");

    if (finalOrderElement && notDiscountOrderElement) {
        finalOrderElement.innerHTML = `${Number.parseInt(newFullPrice).toLocaleString('ru')} сом`;
        notDiscountOrderElement.innerHTML = `${Number.parseInt(fullPrice).toLocaleString('ru')} сом`;
    }
}
