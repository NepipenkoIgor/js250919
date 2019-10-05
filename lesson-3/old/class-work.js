let arr = [1, 2, 3];
let users = [
    {_id: '123asd124124', name: 'Igor', age: 33},
    {_id: '32453sda145', name: 'Vlad', age: 22},
    {_id: '5435dfsdf234', name: 'Evgen', age: 40}
];

// console.log(arr[0], arr[10]);
// console.log(users.length);
// console.log('asdasd'.length);
// console.log(Array.isArray(users));
// console.log(Array.isArray('asdasd'));
// console.log('asdasd' instanceof Array);
// console.log(typeof 'asdasd');
// console.log(typeof users);
// // let {age} =  {name: 'Vlad', age: 22}
// let [, {age: myAge }] = users;
// console.log(myAge)
//
//
// let point = {
//     maps: {
//         coords: [1, 2, 3]
//     },
//     x: 1,
//     y: 2,
// }
// const {maps, ...xy } = point;
// const {maps: {coords: [, ...xz] } } = point;
// console.log(xy, xz)

// const newUsers = users.slice(1, users.length);
// const [...newUsers] = users;
// console.log(newUsers[1] === users[1]);

// function fn(param1, param2, cb) {
//     return cb(param1 + param2);
// }

// function multi(param) {
//     return param ** 2
// }
//
// console.log(fn(1, 2, multi));
// console.log(fn(1, 2, (param) => {
//     return param ** 2
// }));

// function forEachCb(user, index, arr) {
//     console.log(user, index, arr);
// }

// users.forEach((user, index, arr) => {
//     console.log(user, index, arr);
// });

const adultUser = users
    .map((user) => ({...user, male: true}))
    .filter((user) => user.age > 30);

console.log(adultUser);
console.log(users);

// const userForUpdate = users.find((user) => user._id === '5435dfsdf234');
const usersHashMap = users.reduce((hashObject, user) => {
    const newUser = Object.assign({}, user);
    hashObject[newUser._id] = newUser;
    delete newUser._id;
    return hashObject;
    // const {_id, ...userWithoutId} = user;
    // return {...hashObject, [_id]: userWithoutId}
}, {});

console.log(usersHashMap);

console.log(users);

[].__proto__.some = function (cb) {
    console.log('My some')
    for (let i = 0; i < this.length; i++) {
        let isValid = cb(this[i], i, this);
        if (isValid) {
            return true;
        }
    }
    return false;
}

const isAdult = users.some((user) => user.age < 30);
console.log(isAdult);
//
console.log(users.push({name: 'Ann', age: 18}, {name: 'Den', age: 12}));
// console.log(users.pop());
// const index = users.findIndex((user) => user._id === '32453sda145');
// users.splice(index, 1 );
users.sort(compare)
console.log(users);







function compare(user1, user2) {
    if (user1.age > user2.age) {
        return -1;
    }
    if (user1.age < user2.age) {
        return 1;
    }
    return 0;
}

// 'aaabbccdda' => '3a2b2c2d1a';
let str = 'aaabbccdda'

function fn (s){
    return ''
}

fn(str) // '3a2b2c2d1a'
