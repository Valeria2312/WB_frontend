//данные о товарах

const productData = [
    {
        productName: "Футболка UZcotton мужская",
        img: "assets/images/jpg/Photo_1.jpg",
        imgOutStock: "assets/images/jpg/Photo_1NP.jpg",
        imdMini: "assets/images/jpg/Photo_1-minni.jpg",
        productInfo:{
            color: "белый",
            size: 56,
        },
        quantity: 1,
        warehouse:"Коледино WB",
        companyInfo:{
            name: "ООО Вайлдберриз",
            ogrn: 5167746237148,
            address: "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
        },
        discount: 529,
        inStock: 2,
        price: 1051,
        discountOnProduct: 300,
        discountPersonal: 30,
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
        imdMini: "assets/images/jpg/Photo_2-mini.jpg",
        productInfo:{
            color: "прозрачный",
        },
        quantity: 200,
        warehouse: "Коледино WB",
        companyInfo: {
            name: "OOO Мегапрофстиль",
            ogrn: 5167746237148,
            address: "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
        },
        discount: 200000,
        inStock: 300,
        price: 11500.235,
        discountOnProduct: 300,
        discountPersonal: 30,
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
        imdMini: "assets/images/jpg/Photo_3-mini.jpg",
        warehouse: "Коледино WB",
        companyInfo: {
            name: "ООО Вайлдберриз",
            ogrn: 5167746237148,
            address: "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
        },
        quantity: 2,
        discount: 456,
        inStock: 2,
        price: 475,
        discountOnProduct: 300,
        discountPersonal: 30,
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
        address: "Бишкек, улица Табышалиева, 57",
        rating: 4.99,
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
        discription: "Мир"
    },
    {
        img: "assets/images/svg/cardVisa.svg",
        number: "1234 56•• •••• 1234",
        discription: "Виза"
    },
    {
        img: "assets/images/svg/mastercard.svg",
        number: "1234 56•• •••• 1234",
        discription: "Мастеркард"
    },
    {
        img: "assets/images/svg/maestro.svg",
        number: "1234 56•• •••• 1234",
        discription: "Маестро"
    },
]
localStorage.setItem("productData", JSON.stringify(productData))
