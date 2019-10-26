// 'use strict';

function fn() {
    console.log(this);
    console.log(this.name);
    console.log(this.surname);
}

let obj = {
    name: 'Igor',
    surname: 'Nepipenko',
    getFullName: fn
};
const getFullName = obj.getFullName;
const fn = obj.getFullName || alert;
fn();
getFullName();
