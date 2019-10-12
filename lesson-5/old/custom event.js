const button = document.querySelector('.btn');

const account = {
    name: 'Igor',
    age: 33,
}
let event = new Event('click');
// const event = new CustomEvent('click', {detail: account});
document.dispatchEvent(event);
// button.addEventListener('click', () => {
//     console.log('code from click');
//     //
// });


//
// setTimeout(() => {
//     let event = new Event('click');
//     button.dispatchEvent(event)
// }, 5000);
