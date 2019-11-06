const input = document.querySelector('input');

function search(event) {
    console.log(event.target.value);
}

const debSearch = debounce(search, 1000);

input.addEventListener('input', debSearch);


function debounce(fn, ms) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            return fn.call(this, ...args)
        }, ms);
    }
}
