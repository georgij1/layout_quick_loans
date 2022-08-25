let div_link1 = document.querySelector('.link_1');
let div_link2 = document.querySelector('.link_2');
let div_link3 = document.querySelector('.link_3');
let div_link4 = document.querySelector('.link_4');

div_link1.onclick = function () {
    open('')
}

div_link2.onclick = function () {
    open('')
}

div_link3.onclick = function () {
    open('')
}

div_link4.onclick = function () {
    let footer = document.querySelector('footer');
    open(footer);
}