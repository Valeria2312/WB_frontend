const products = document.querySelectorAll(".basket-item")

products.forEach((product) => {
    let counter = product.querySelector(".counter input")
    product.addEventListener('click', e => {
        if(e.target.alt === "плюс") {
            counter.value++
        }
        if(e.target.alt === "минус") {
            counter.value--
        }
    })
})

