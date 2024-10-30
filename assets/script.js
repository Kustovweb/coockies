'use strict'


const menu = document.getElementById('menu')
menu.addEventListener('click', function (event) {
    let link = event.target.closest('a')
    if (!link) return
    if (!this.contains(link)) return
    document.getElementById(link.dataset.link).scrollIntoView(true, { behavior: "smooth" })
})


const products = document.getElementsByClassName('products')
products[0].addEventListener('click', function (event) {
    let link = event.target.closest('button')
    if (!link) return
    if (!link.contains(link)) return
    document.querySelector('#order').scrollIntoView(true, { behavior: "smooth" })
})



const prices = document.getElementsByClassName('products__item__price')
document.getElementById('change-currency').addEventListener('click', function (event) {
    const currentCurrency = event.target.innerText
    let newCurrency = '$'
    let coefficient = 1
    if (currentCurrency === '$') {
        newCurrency = '₽'
        coefficient = 90
    } else if (currentCurrency === '₽') {
        newCurrency = 'BYN'
        coefficient = 3
    } else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    event.target.innerText = newCurrency

    for (const price of prices) {
        price.innerText = Number(price.dataset.basePrice * coefficient).toFixed() + ' ' + newCurrency
    }
})


const product = document.getElementById('product')
const name = document.getElementById('name')
const phone = document.getElementById('phone')
document.getElementById('order-action').addEventListener('click', function () {
    let hasError = false;

    [product, name, phone].forEach(item => {
        if (!item.value) {
            item.style.borderColor = 'red'
            hasError = true
        } else {
            item.style.borderColor = ''
        }
    })

    if (!hasError) {

        [product, name, phone].forEach(item => {
            if (!item.value) {
                item.value = ''
            }
        })
        alert('Спасибо за заказ! Мы скоро свяжемся с вами!')
    }

})

