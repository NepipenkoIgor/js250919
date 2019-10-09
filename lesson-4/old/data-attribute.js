const ul1 = document.querySelector('ul.list1');

const [, li1] = ul1.querySelectorAll('li');
const list = ul1.dataset.list.replace(/'/g, '"');
const topics = JSON.parse(list);
ul1.innerHTML = topics.reduce((htmlStr, topic) => {
    return htmlStr += '<li>' + topic + '</li>' //`${htmlStr}<li>${topic}</li>`
}, '');
// li1.dataset.productId  = '11111111';
// li1.classList.add('right', 'top', 'bottom');
// li1.classList.remove('topics');
//li1.className += ' right';

// const img = document.querySelector('img');
// console.log(img.src);
// img.src = 'http://localhost/img.png';
// console.log(img.getAttribute('src'));
// const input = document.querySelector('input');
//
// console.log(input.getAttribute('value'));
// console.log(input.value);
//
// input.value = 'javascipt';
// console.log(input.getAttribute('value'));
// console.log(input.value);
