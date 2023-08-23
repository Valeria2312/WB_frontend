//данные о товарах

const productData = [
    {
        productName: "Футболка UZcotton мужская",
        img: "assets/images/jpg/Photo_1.jpg",
        imgOutStock: "assets/images/jpg/Photo_1NP.jpg",
        productInfo:{
            color: "белый",
            size: 56,
        },
        quantity: 1,
        warehouse:"Коледино WB",
        companyInfo:{
            name: "ООО Вайлдберриз",
        },
        discount: 529,
        inStock: 2,
        price: 1051,
        isChecked:true,
        plus() {
            this.quantity++
        },
        minus() {
            this.quantity--
        }
    },
    {
        productName: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
        img: "assets/images/jpg/Photo_2.jpg",
        imgOutStock: "assets/images/jpg/Photo_2NP.jpg",
        productInfo:{
            color: "прозрачный",
        },
        quantity: 200,
        warehouse: "Коледино WB",
        companyInfo: {
            name: "OOO Мегапрофстиль",
        },
        discount: 200000,
        inStock: 300,
        price: 11500.235,
        isChecked:true,
        plus() {
            this.quantity++
        },
        minus() {
            this.quantity--
        }
    },
    {
        productName: `Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell `,
        img: "assets/images/jpg/Photo_3.jpg",
        imgOutStock: "assets/images/jpg/Photo_3NP.jpg",
        warehouse: "Коледино WB",
        companyInfo: {
            name: "ООО Вайлдберриз",
        },
        quantity: 2,
        discount: 456,
        inStock: 2,
        price: 475,
        isChecked:true,
        plus() {
            this.quantity++
        },
        minus() {
            this.quantity--
        }
    }
    ]

//данные о доставке
const deliveryData = [
    {
        address: "Бишкек, улица Ахматбека Суюмбаева, 12/1",
        workSchedule: "Ежедневно с 10 до 21",
        rating: 4.99,
        shippingCost: "Бесплатно",
    },
    {
        address: "Бишкек, улица Табышалиева, 57"
    },
    {
        address: "Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1",
        rating: 4.99,
    },
    {
        address: "Бишкек, улица Жукеева-Пудовкина, 77/1",
    },
]
//данные о картах
const cardData = [
    {
        img: "assets/images/svg/cardMir.svg",
        number: "1234 56•• •••• 1234",
    },
    {
        img: "assets/images/svg/cardVisa.svg",
        number: "1234 56•• •••• 1234",
    },
    {
        img: "assets/images/svg/mastercard.svg",
        number: "1234 56•• •••• 1234",
    },
    {
        img: "assets/images/svg/maestro.svg",
        number: "1234 56•• •••• 1234",
    },
]
localStorage.setItem("productData", JSON.stringify(productData))
