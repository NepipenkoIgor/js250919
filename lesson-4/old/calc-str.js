let s1 = 'ssaaaaddsaasfsf';
let s2 = '2s4a2d1s2a1s1f1s1f';

function calcStr(str) {
    let result = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
            continue;
        }
        result += `${count}${str[i]}`;
        count = 1;
    }
    return result;
}

console.log(calcStr(s1));
console.log(calcStr(s1) === s2);
