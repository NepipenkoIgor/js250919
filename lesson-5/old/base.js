const button = document.querySelector('.btn');
const input = document.querySelector('.search');

button.onclick = () => {
    console.log('js')
};

function handler(){
    console.log('NodeJS')
}

button.addEventListener('click', handler);

setTimeout(() => {
    button.removeEventListener('click', handler);
    button.addEventListener('click', () => {
        console.log('TS')
    })
}, 5000);
