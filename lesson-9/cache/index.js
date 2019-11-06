// function makeCaching(fn) {
//     const cache = {};
//     return (param) => {
//         if (param in cache) {
//             return cache[x];
//         }
//         cache[x] = fn(x);
//         return cache[x];
//     }
// }
function makeCaching(fn) {
    const cache = new Map();
    return (...args) => {
        f:for (let [cachedArgs, value] of cache) {
            if (cachedArgs.length !== args.length) {
                continue;
            }
            for (let i = 0; i < cachedArgs.length; i++) {
                if (!deepEqual(cachedArgs[i], args[i])) {
                    continue f;
                }
            }
            return value;
        }
        const result = fn(...args);
        cache.set(args, result);
        return result;
    }
}

function sum(num1, num2) {
    return num1 + num2;
}

function getDetails(details, info) {
    return {...details, info};
}

const cachedSum = makeCaching(sum);
const cachedGetDetails = makeCaching(getDetails);

console.log(cachedSum(1, 2));
console.log(cachedSum(2, 4));
console.log(cachedSum(33, 44));
console.log(cachedSum(1, 2));
console.log(cachedSum(1, 2));
console.log(cachedSum(33, 44));
let arg = {name: 'Ihor', subject: 'JS'};
console.log(cachedGetDetails(arg, {age: 33}));
console.log(cachedGetDetails({name: 'Vlad'}, {age: 33}));
console.log(cachedGetDetails(arg, {age: 33}));

// [[{a: 1}, {b: 2}, 2], [2, 3]]
// {1: 2}


function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (obj1 === null || obj2 === null) {
        return false
    }

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }

    let keysObj1 = Object.keys(obj1);
    let keysObj2 = Object.keys(obj2);

    if (keysObj1.length !== keysObj2.length) {
        return false;
    }
    // for (let key of keysObj1) {
    //     if (!deepEqual(obj1[key], obj2[key])) {
    //         return false
    //     }
    // }
    // return true;

    return keysObj1.every((key) => deepEqual(obj1[key], obj2[key]))
}
