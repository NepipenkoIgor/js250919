// let obj = {a: 1};
// let obj1 = new Object(1);
// let obj2 = Object('str');
// console.log(obj);
// console.log(obj1);
// console.log(obj2);

// let age = 33;
// let prop = 'full' + 'Name' + 33;
// let obj = {a: 1};
// function fn() {
//     return 'MyFn_key'
// }
// const user = {
//     firsName: 'Igor',
//     'surname': 'Nepipenko',
//     age,  // age: age,
//     [prop]: 'Igor Nepipenko',
//     [age + prop]: 44,
//     3: 'some inf',
//     [obj] : 'This is Object',
//     '#sdsa_asd asd ': 222,
//     [ fn()]: 44,
//     false: 33,
//     getValue() {
//          return 'Js is awesome'
//     }
// }

// console.log(user.firsName);
// console.log(user.surname);
// console.log(user[fn()]);
// console.log(user[age + prop]);
// console.log(user['#sdsa_asd asd ']);
// // console.log(user.prop2?.prop3);
// console.log(user.getValue())
// user.__proto__ = obj;

// Object.setPrototypeOf(user, null); // user.__proto__ = obj;
// console.log(user);
//
// const mentor = Object.create(user)
// mentor['#sdsa_asd asd '] = 'JS';
//
// console.log(mentor);
// console.log(mentor['#sdsa_asd asd ']);
//
// user.__proto__ = user;
// console.log(user);


let user = {
    gender: 'male',
    getGender() {
        return 'male';
    }
}

console.log(`user ==> `, user)

let worker = Object.create(user);
worker.hours = 8;
worker.getGender =function(){
    console.log('JS')
    return worker.__proto__.getGender();
}
console.log(`worker ==> `, worker)
let manager = Object.create(user);

console.log(`manager ==> `, manager)

console.log(user.getGender())
console.log(worker.getGender())

console.log(user.isPrototypeOf(worker))
// class User {
//     constructor(){
//         this.gender = 'male'
//     }
// }
//
// class Worker extends  User {}
