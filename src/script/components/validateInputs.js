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
        // RegExp: /^\+?\d{10,15}$/,
        RegExp: /(\+7|8)[\s(]*\d{3}[)\s]*\d{3}[\s-]?\d{2}[\s-]?/,
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


window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.recipient-input4'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 ___ ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

});
