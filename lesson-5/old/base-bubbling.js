const body = document.querySelector('body');
const main = document.querySelector('main');
const button = document.querySelector('.btn');

body.addEventListener('click', (event) => {
    console.log(event.target, event.currentTarget)
});
main.addEventListener('click', (event) => {
    console.log(event.target, event.currentTarget)
});
button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target, event.currentTarget)
});

button.addEventListener('click', (event) => {
    console.log('second handler for button')
});
