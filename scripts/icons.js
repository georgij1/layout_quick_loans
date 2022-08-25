let like_icon = document.querySelector('.like_icon')
let text_click_like_icon = document.querySelector('.text_click_like_icon');

let number_zero = text_click_like_icon.textContent = 0;

like_icon.onclick = function () {
    function text_click_icon() {
        text_click_like_icon.innerHTML = number_zero += 1;
    }

    text_click_icon();
}

let search_icon = document.querySelector('.search_icon');
let input_icon = document.querySelector('.input_icon')
input_icon.classList.toggle('none')
search_icon.onclick = function () {
    input_icon.classList.toggle('block');
}

let cart_icon = document.querySelector('.cart_icon');
cart_icon.onclick = function () {
    open('index.html')
}

let image_logo = document.querySelector('.image_logo');
image_logo.onclick = function () {
    document.location.href = "#"
}