const recipientForm = document.querySelectorAll(".recipient input");
const orderBtn = document.querySelector(".send-order")

orderBtn.addEventListener('click', () => handleFormSubmit(recipientForm))

const validDataInputs = {
    first_name: {
        RegExp: /^[А-ЯA-Z][а-яa-z-]*$/,
        errorMessage:'Укажите имя',
    },
    second_name: {
        RegExp: /^[А-ЯA-Z][а-яa-z-]*$/,
        errorMessage:'Укажите фамилию',
    },
    email: {
        RegExp: /^[A-Za-z\d'-]+@[A-Za-z]+(\.[A-Za-z]+)+$/,
        errorMessage:'Введите правильный email',
    },
    phone: {
        RegExp: /^\+?\d{10,15}$/,
        errorMessage:'Телефон от 10 до 15 символов, может начинается с плюса'
    },
    inn: {
        RegExp: /^\d+$/,
        errorMessage: 'Может содержать только цифры'
    }
};

function handleFormSubmit(recipientForm) {
    const data = {};
    recipientForm.forEach((input) => {
        checkValid(input,data);
    });
    collectData(data, recipientForm);
    return data;
}

function checkValid(input, data) {
    const error = input.parentElement?.querySelector(".error");
    const nameInput = validDataInputs[input.name];
    const isValid = nameInput.RegExp.test(input.value);
    if (!isValid) {
        error.textContent = nameInput.errorMessage;
        // error.style.display = 'block';
        input.style.borderBottomColor = "var(--Orange)";
        input.style.color = "var(--Orange)";
    } else {
        error.textContent = "";
        input.style.borderBottomColor = "var(--rulers-rulers-input)";
        input.style.color = "var(--text-black)";
        if (data) {
            data[input.name] = input.value;
        }
    }
}
//сбор данных с формы
function collectData(data,formInputs) {
    if (Object.keys(data).length === formInputs.length) {
        console.log(data);
    }
}
