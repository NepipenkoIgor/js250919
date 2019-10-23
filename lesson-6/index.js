const button1 = document.querySelector('button.btn1');
const button2 = document.querySelector('button.btn2');

const counter1 = createCounter('Button1');
console.log(counter1);
// const counter2 = createCounter();
button1.addEventListener('click', counter1);
button2.addEventListener('click', createCounter('Button2'));

//
function createCounter(msg) {
    let count = 1;
    return () => {
        let a = 1;
        console.log(msg, count++)
    };
}

const button3 = {
    addEventListener(eventName, cb){
        cb();
    }
}
// function f(a, b) {
//     console.log(a, b)
// }
//
// f(1, 2 + 3 + 5);

// counter1();
// counter1();
// counter1();
// counter1();
// counter2();
