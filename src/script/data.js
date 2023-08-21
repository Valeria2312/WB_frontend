//данные о товарах
const productData = [
    {
        productName: "Футболка UZcotton мужская",
        img: "../../",
        productInfo: [
            {type: "Цвет", info: "белый"},
            {type: "Размер", info: "56"},
        ],
        warehouse:"Коледино WB",
        companyInfo:{
            name: "ООО Вайлдберриз",
        },
        discount: 529,
        inStock: 2,
        price: 1051,
    },
    {
        productName: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
        productInfo: [
            {type: "Цвет", info: "прозрачный"},
        ],
        warehouse: "Коледино WB",
        companyInfo: {
            name: "OOO Мегапрофстиль",
        },
        discount: 200000,
        inStock: 300,
        price: 2300047,
    },
    {
        productName: `Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell `,
        productInfo: [],
        warehouse: "Коледино WB",
        companyInfo: {
            name: "ООО Вайлдберриз",
        },
        discount: 456,
        inStock: 2,
        price: 950,
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
        img: ".cardMir.svg",
        number: "1234 56•• •••• 1234",
    },
    {
        img: ".cardVisa.svg",
        number: "1234 56•• •••• 1234",
    },
    {
        img: ".mastercard.svg",
        number: "1234 56•• •••• 1234",
    },
    {
        img: ".maestro.svg",
        number: "1234 56•• •••• 1234",
    },
]
