let user = {
    firstName: 'Igor',
    lastName: 'Nepipenko',
    age: 33,
};
let info = {
    gender: 'male',
    subject: 'JS',
    salary: {
        money: 3000,
        bonus: 1.2,
    }
};
user.info = info;

console.log(user)

// let firstName = user.firstName;
// let gender = user.info.gender;
// let money = user.info.money;


// let {firstName,info: {gender, salary: {money}}, isMale = true} = {
//     firstName: 'Igor',
//     lastName: 'Nepipenko',
//     age: 33,
//     info: {
//         gender: 'male',
//         subject: 'JS',
//         salary : {
//             money: 3000,
//             bonus: 1.2,
//         }
//     }
// };

// let {firstName,lastName, ...simpleUser } = user;
// delete user.firstName;
// delete user.lastName;
// console.log(user);
// console.log(simpleUser);
// console.log(firstName, gender, money, isMale);

// const newUser = Object.assign({}, user, {isMale: true});
const newUser = {...user, isMale: true};

console.log(newUser === user);
console.log(newUser.info === user.info);
console.log(newUser, user);
let str = let
style = `
  position: absolute;
  top: -999px;
  left: 0px;
  right: auto;
  `;

function styleToObject() {
    return {
        position: 'absolute',
        top: '-999px',
        left: '0px',
        right: 'auto'
    }
}

styleToObject(str)
