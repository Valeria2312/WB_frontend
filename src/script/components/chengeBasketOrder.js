// import {renderProductData} from "./render";

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
    const dataStorage = JSON.parse(localStorage.getItem("productDataInBasket"))
    dataStorage.forEach((product) => {
                if(product.quantity && product.isChecked){
                    fullPrice += product.price * product.quantity;
                    newFullPrice += product.price * product.quantity - product.discount;
                    discountPrice -= (product.price * product.quantity) - (product.price * product.quantity - product.discount);
                    productQuantity += Number(product.quantity)

                }
    })
    document.querySelector(".order-final-order").innerHTML = `${Number.parseInt(newFullPrice).toLocaleString('ru')} сом` ;
    document.querySelector(".order-notDiscount-order").innerHTML = `${Number.parseInt(fullPrice).toLocaleString('ru')} сом`;
    document.querySelector(".order-discount-order").innerHTML =  `${Number.parseInt(discountPrice).toLocaleString('ru')} сом` ;
    document.querySelector(".order-notDiscount-text").innerHTML = `${productQuantity} товара`;
    localStorage.setItem("newFullPrice", newFullPrice)
}

//каунтер
products.forEach((product) => {
    const minus = product.querySelector(".btn-minus");
    const plus = product.querySelector(".btn-plus");
        let counter = product.querySelector(".counter input")
        product.addEventListener('click', e => {
            const dataItemProduct = product.querySelector(".basket-item-name").innerHTML;
            const dataStorage = JSON.parse(localStorage.getItem("productData"))
            dataStorage.forEach((dataItem) =>{
                if(dataItem.productName === dataItemProduct) {
                    if (e.target.alt === "плюс") {
                        console.log(dataItem)
                        counter.value++;
                        dataItem.quantity = counter.value
                        localStorage.setItem("productDataInBasket",JSON.stringify(dataStorage));
                        countFullPrice()
                    } if (e.target.alt === "минус") {
                        counter.value--;
                        dataItem.quantity = counter.value
                        localStorage.setItem("productDataInBasket",JSON.stringify(dataStorage));
                        countFullPrice()
                    }
                }
            })
        })
    if(counter?.value === 1) {
        minus.setAttribute('disabled', 'disabled')
    } else {
        minus.disabled = false
    }
    // console.log(plus?.disabled);
    //     console.log(minus)
    // console.log(counter.value)
    })

products.forEach((product) => {
    let check = product.querySelector(".realCheckbox")
    if(check) {
        check.addEventListener("click", () => checkInput(check,product));
        check.addEventListener("change", () => addProductInDelivery(check, product))
    }
})

//логика работы чекбоксов товаров
function checkInput(check,product) {
    if(check?.checked === false) {
        let productCurrent =  product.querySelector(".basket-item-name").innerHTML;
        let dataStorage = JSON.parse(localStorage.getItem("productData"));
        const result = dataStorage.filter((obj) => {
            return obj.productName !== productCurrent
        })
        localStorage.setItem("productDataInBasket",JSON.stringify(result));
        countFullPrice()
    } if(check?.checked === true) {
        let productCurrent =  product.querySelector(".basket-item-name").innerHTML;
        let dataStorage = JSON.parse(localStorage.getItem("productDataInBasket"));
        let initDataStorage = JSON.parse(localStorage.getItem("productData"));
        const currentObj = initDataStorage.filter((obj) => {
            return obj.productName === productCurrent
        })
        const result = dataStorage.concat(currentObj)
        localStorage.setItem("productDataInBasket",JSON.stringify(result));
        countFullPrice()
    }
}
//логика работы AllCheckbox
const AllCheckbox = document.querySelector("#checkbox-All");
const checkboxes = document.querySelectorAll(".basket-items-active .realCheckbox:not(#checkbox-All)");
let listBoolean = [];

checkboxes.forEach((item) => {
    item.addEventListener("change", function () {
        checkboxes.forEach((i) => {
            listBoolean.push(i.checked)
        });
        AllCheckbox.checked = !listBoolean.includes(false);
        listBoolean = [];
    })
})
// логика отрисовки товаров в доставке
function addProductInDelivery(check, product) {
    let imgProductInDelivery = '';
    let productCurrent =  product.querySelector(".basket-item-name").innerHTML;
    let initDataStorage = JSON.parse(localStorage.getItem("productData"));
    let fullImgProductInDelivery = document.querySelectorAll(".delivery-date img")
    const currentObj = initDataStorage.filter((obj) => {
        return obj.productName === productCurrent
    })
    const productInDelivery = currentObj.pop().imdMini;
    fullImgProductInDelivery.forEach((img) => {
        imgProductInDelivery = img.currentSrc.replace('http://localhost:63342/WB_frontend/','');
        if(imgProductInDelivery === productInDelivery) {
        if(check.checked === true) {
                img.style.display = "block"
            }
         if(check.checked === false){
                img.style.display = "none"
            }
    }})
    }

// const checkboxesInItem = document.querySelectorAll(".basket-items-active .realCheckbox:not(#checkbox-All)");
// checkboxesInItem.forEach((item) => {
//     item.addEventListener("change", function () {
//         if(item.checked) {
//             console.log(item)
//         }
//     })
//     // console.log(item)
// })



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

// //disabled кнопки при кол-ве 1 и макс кол-ве
// products.forEach((product) => {
//     const minus = product.querySelector(".btn-minus");
//     const plus = product.querySelector(".btn-plus");
//     const counter = product.querySelector(".counter input");
//     console.log(minus);
//     console.log(plus);
//     console.log(counter.value)
//     if(counter.value === 1) {
//         minus.disabled = true;
//     }
//
// })


