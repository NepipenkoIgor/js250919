const buffer1 =  function createBuffer() {
    let cache = [];

    function f(value) {
        if (!value) {
            return cache.join(' ');
        }
        cache.push(value);
    }

    f.clear = () => {
        debugger
        cache = [];
    };
    return f
}();

buffer1('TS');
buffer1('JS');
buffer1('NodeJS');
console.log(buffer1());
buffer1.clear();
console.log(buffer1());


console.log(buffer1.clear);
console.log(buffer1.clear());
