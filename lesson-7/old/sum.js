// console.log(sum(1)(2));
// console.log(sum(10)(22));
// console.log(sum(1)(5));

// function sum(a) {
//     return (b) => {
//         debugger
//         return a + b;
//     }
// }

function sum1(...items) {
    return items.reduce((sum, item) => {
        return sum += item;
    }, 0);
}

function sum(num) {
    let currentSum = num;

    function f(num2) {
        currentSum += num2;
        return f;
    }

    f[Symbol.toPrimitive] = () => {
        return currentSum;
    };

    return f;
}

let obj = {
    [Symbol.toPrimitive]: () => {
    }
}


console.log(+sum(3)(4) + sum(4));


// console.log(sum(1)(2) + sum(1)(2)(3)(4) + sum(1) + sum(2)(3)(5)(5)(5))
