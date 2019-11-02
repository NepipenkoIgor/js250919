'use strict';
// function f1() {
//     f2();
//     let a = 1;
//     return a;
// }
// function f2() {
//     f3();
// }
// function f3() {
// }
// debugger
// f1();

function getFullName() {
    debugger
    const key = 'lastName';
    console.log(this.firstName, this[key])
}


const action = {
    type: 'user',
    fn: function (...args) {
        console.log(args);
        console.log(this)
        // return () => {
        //     console.log(this)
        // }
    }
}

const account = {
    firstName: 'Ihor',
    lastName: 'Nepipenko',
    getFullName: action.fn
};
(account.getFullName || true).call(account);
// const fn1 = account.getFullName();
// fn1();
// fn1();
// const fn = account.getFullName;
// (account.getFullName || true)();
// getFullName();
setTimeout(account.getFullName.bind(account), 5000);
const btn = document.querySelector('.btn1');
btn.addEventListener('click', account.getFullName.bind(account));
const fn = account.getFullName.bind(account);
fn(3, 4)

console.log(account.getFullName.bind(account) === account.getFullName)

//
const str = 'aabcaadaar';
console.log(filter.call(str, (char) => char !== 'a').join(''));


function filter(cb) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        const done = cb(this[i]);
        if (done) {
            arr.push(this[i]);
        }
    }
    return arr;
}
