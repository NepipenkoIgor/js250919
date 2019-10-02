let user = {
    firsName: 'Igor',
    lastName: 'Nepipenko',
    age: 33
};
Object.defineProperty(user, 'lastName', {
    enumerable: false,
    writable: false
})
let info = {
    gender: 'male',
    subject: 'JS'
};
let salary = {
    money: 3000,
    bonus: 1.2
}
Object.defineProperty(salary, '_money', {enumerable :false, value: 3000, writable: true})
Object.defineProperty(salary, 'money', {
    get(){
        return `${this._money} $`;
    },
    set(value){
        this._money = value * this.bonus;
    },
})
Object.setPrototypeOf(info, salary);
Object.setPrototypeOf(user, info);
user.lastName = 'Loban';
console.log(user);
// obj.prop = 44;
// console.log(Object.getOwnPropertyDescriptor(obj, 'prop'))
//
// console.log(obj);

for (let key in user) {
    if (!user.hasOwnProperty(key)) {
        continue;
    }
    console.log(key, user[key])
}
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
