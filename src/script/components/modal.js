const payChange = document.querySelector(".payment-method-header button")
const payCorrect = document.querySelector(".payment-edit .img-edit");
const addressChange = document.querySelector('.delivery-method button');
const addressCorrect = document.querySelector(".order-delivery-details .img-edit");
const modal = document.querySelector(".overlay-modal");
const btnClose = document.querySelector(".modal-header-close");
const modalContent = document.querySelector(".modal-content");
const modalHeader = document.querySelector(".modal-header-text")
const btnModal = modal.querySelector(".send-order");


let renderCards = "";
let renderAddressbyCourier = "";
let renderAddressHeader = "";
let buttonsDelivery = "";
let renderAddressBaggageClaim = "";

cardData.forEach(card => {
    renderCards += `
    <div class="card-item">
        <input type="radio" name="card" value="${card.number}">
        <label class="card-item-info">
            <img src="${card.img}" alt="${card.discription}" />
            <p>${card.number}</p>
        </label>
    </div>`})


deliveryData.forEach(address => {
    renderAddressbyCourier += `
    <div class="card-item">
        <input type="radio" name="address" value="${address.address}">
        <label class="card-item-info">
            <p class="card-item-info-Courier">${address.address}</p>
        </label>
        <button class="basket-item-delete">
         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="black"/></svg>
          </button>
    </div>`})


deliveryData.forEach(address => {
    renderAddressBaggageClaim += `
<div class="card">
    <div class="card-item">
        <input type="radio" name="address" value="${address.address}">
        <label class="card-item-info">
            <p class="card-item-info-BaggageClaim">${address.address}<span class="point-issue-subText"><img class="point-issue-img" src="assets/images/svg/star.svg" alt="звезда">${deliveryData[0].rating} ${deliveryData[0].workSchedule}</span></p>
            
        </label>
    </div>
                    <button class="basket-item-delete">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="black"/>
        </svg>
                                                </button>
</div>
`})

renderAddressHeader += `Способ доставки`
buttonsDelivery += `<div class="buttons-delivery">
<button class="button-delivery" type="submit">В пункт выдачи</button>
 <button class="button-delivery byCourier" type="submit">Курьером</button>
</div>`

payChange.addEventListener("click", () => openPayModal(modal,renderCards));
payCorrect.addEventListener("click", () => openPayModal(modal, renderCards));
addressChange.addEventListener("click", () => openPayModal(modal, null, buttonsDelivery));
addressCorrect.addEventListener("click", () => openPayModal(modal, null, buttonsDelivery));
btnClose.addEventListener("click", () => closePayModal(modal));
btnModal.addEventListener("click", () => setData());
let activeItem;
function changeRadiobuttons() {
    const radiobuttons = document.querySelectorAll(".overlay-modal .card-item");
    console.log(radiobuttons)
    radiobuttons.forEach((item) => {
        item.addEventListener("click", function () {
            let currentItem = item.querySelector("input");
            currentItem.checked = true;
            activeItem = currentItem
        })
    })
}
// console.log(activeItem)
function openPayModal(modal, renderCards, buttonsDelivery) {
    modal.style.opacity = "1";
    modal.style.visibility = "inherit"
    if(buttonsDelivery) {
        modalHeader.innerHTML = renderAddressHeader;
        modalContent.innerHTML = buttonsDelivery;
        changeButtonsDelivery()
    } else {
        modalContent.innerHTML = renderCards;
    }
    changeRadiobuttons()
}
function closePayModal(modal) {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden"
}

function changeButtonsDelivery() {
const buttonsDelivery =document.querySelectorAll(".button-delivery")
    buttonsDelivery.forEach((button) => {
        button.addEventListener("click", function () {

            const buttonsDelivery = document.querySelector(".buttons-delivery");
            if(buttonsDelivery.querySelector('.active')) {
                buttonsDelivery.querySelector('.active').classList.remove('active');
            }

            let items = document.querySelectorAll('.card-item')
            let itemsMore = document.querySelectorAll('.card')
            if(items){
                items.forEach(item => item.style.display = 'none')
            }
            if(itemsMore) {
                itemsMore.forEach(item => item.style.display = 'none')
            }

            if(button.classList.contains("byCourier")) {
                buttonsDelivery.insertAdjacentHTML("afterend", renderAddressbyCourier);
                button.classList.add("active");
                changeRadiobuttons()
            } else {
                buttonsDelivery.insertAdjacentHTML("afterend", renderAddressBaggageClaim);
                button.classList.add("active");
                changeRadiobuttons()
            }
        })
    })
}

function setData() {
    if(activeItem) {
        if(activeItem.name === "address") {
            localStorage.setItem("currentAddress", activeItem.value)
        }
        if(activeItem.name === "card") {
            localStorage.setItem("currentCard", activeItem.value)
        }
        closePayModal(modal)
    }
}
