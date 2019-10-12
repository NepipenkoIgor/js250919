const body = document.querySelector('body');
const main = document.querySelector('main');
const button = document.querySelector('.btn');

function bubbling(event) {
    console.log('bubbling', event.currentTarget.tagName)
}

function capture(event) {
    console.log('capture', event.currentTarget.tagName)
}


body.addEventListener('click', bubbling);
body.addEventListener('click', capture, true);

main.addEventListener('click', bubbling);
main.addEventListener('click', capture, true);

button.addEventListener('click', bubbling);
button.addEventListener('click', capture, true);
