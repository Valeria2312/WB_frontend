// добавление в избранное
const addFavoriteButtons = document.querySelectorAll(".basket-item-addFavorite");

addFavoriteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const product = event.currentTarget.closest(".basket-item");
        if (product) {
            toggleFavorite(product, button);
        }
    });
});

function toggleFavorite(product, button) {
    const currentProduct = product.querySelector(".basket-item-name").textContent
    const foundProduct = productData.find((product) => product.productName === currentProduct);
    if(foundProduct) {
        const isAlreadySelected = selectedProducts.some((selectedProduct) => selectedProduct.productName === currentProduct);
        if (!isAlreadySelected) {
            selectedProducts.push(foundProduct);
            updateFavoriteUI(button,true);
        } else {
            removeFromFavorites(foundProduct);
            updateFavoriteUI(button, false);
        }
    }
}
function removeFromFavorites(productToRemove) {
    const indexToRemove = selectedProducts.findIndex((product) => product.productName === productToRemove.productName);
    if (indexToRemove !== -1) {
        selectedProducts.splice(indexToRemove, 1);
    }
}

function updateFavoriteUI(button, isFavorite) {
    const svgPath = button.querySelector("path");
    if (isFavorite === true) {
        if (svgPath) {
            svgPath.style.fill = "var(--system-magenta)";
        }
    } else {
        if (svgPath) {
            svgPath.style.fill = "";
        }
    }
}


// удаление товара
const deleteProductButtons = document.querySelectorAll(".basket-item-delete");
deleteProductButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        const product = event.currentTarget.closest(".basket-item");
        if (product) {
            toggleDelete(product)
        }
    });
});

function toggleDelete(productToRemove) {
    const arrProduct = JSON.parse(localStorage.getItem("productData"));
    const indexToRemove = arrProduct.findIndex((product) => product.productName === productToRemove.querySelector(".basket-item-name").textContent);

    productToRemove.remove();

    if (indexToRemove !== -1) {
        arrProduct.splice(indexToRemove, 1);
        localStorage.setItem("productData", JSON.stringify(arrProduct));
    }
}
