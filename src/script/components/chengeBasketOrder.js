const products = document.querySelectorAll(".basket-item")

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
                    productQuantity += product.quantity
                }
    })
    document.querySelector(".order-final-order").innerHTML = `${Number.parseInt(newFullPrice).toLocaleString('ru')} сом` ;
    document.querySelector(".order-notDiscount-order").innerHTML = `${Number.parseInt(fullPrice).toLocaleString('ru')} сом`;
    document.querySelector(".order-discount-order").innerHTML =  `${Number.parseInt(discountPrice).toLocaleString('ru')} сом` ;
    document.querySelector(".order-notDiscount-text").innerHTML = `${productQuantity} товара`
}

//каунтер
products.forEach((product) => {
        let counter = product.querySelector(".counter input")
        product.addEventListener('click', e => {
            const dataItemProduct = product.querySelector(".basket-item-name").innerHTML
            const dataStorage = JSON.parse(localStorage.getItem("productData"))
            dataStorage.forEach((dataItem) =>{
                if(dataItem.productName === dataItemProduct) {
                    if (e.target.alt === "плюс") {
                        console.log(dataItem)
                        counter.value++;
                        dataItem.quantity++
                        localStorage.setItem("productDataInBasket",JSON.stringify(dataStorage));
                        countFullPrice()
                    } if (e.target.alt === "минус") {
                        counter.value--;
                        dataItem.quantity--
                        localStorage.setItem("productDataInBasket",JSON.stringify(dataStorage));
                        countFullPrice()
                    }
                }
            })
        })
    })

products.forEach((product) => {
    let check = product.querySelector(".realCheckbox")
    if(check) {
        check.addEventListener("click", () => checkInput(check,product));
    }

})
function checkInput(check,product) {
    if(check?.checked === false) {
        // console.log(product)
        let productCurrent =  product.querySelector(".basket-item-name").innerHTML;
        // console.log(productCurrent)
        let dataStorage = JSON.parse(localStorage.getItem("productData"));
        // let productItem = dataStorage.find(productItem => productItem.productName === productCurrent);
        const result = dataStorage.filter((obj) => {
            return obj.productName !== productCurrent
        })
        localStorage.setItem("productDataInBasket",JSON.stringify(result));
        countFullPrice()
    } else {}
}
