// function bind(fn, context, ...bindArgs) {
//     return function (...args) {
//         return fn.call(context, ...[...bindArgs, ...args])
//     }
// }
//
// function fn(...args) {
//     console.log(args);
//     console.log(this)
// }
//
// const fn1 = bind(fn, {a: 1, b: 2}, 3, 4)
//
// fn1(1, 2)

function sum(a, b) {
    return a + b;
}

function patchUser(user, data) {
    return {...user, ...data}
}

const sum1 = logDecorator(sum);
sum1(1, 2);
sum1(22, 2);

const patchUser1 = logDecorator(patchUser);
patchUser1({name: 'Ihor'}, {age: 33});

function logDecorator(fn) {
    return function (...args) {
        let result = fn.call(this, ...args);
        const fnName = fn.name;
        const strArgs = args.map((arg) => JSON.stringify(arg)).join(',');
        const strResult = JSON.stringify(result);
        console.log(`Call: ${fnName}(${strArgs}) => ${strResult}`);
        return result;
    }
}

