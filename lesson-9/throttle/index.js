function handler({clientX, clientY}) {
    console.log(clientX, clientY);
}

document.addEventListener('mousemove', throttle(handler, 3000));


function throttle(fn, ms) {
    let isBusy = false;
    let lastArgs;
    return function worker(...args) {
        if (isBusy) {
            lastArgs = args;
            return;
        }
        lastArgs = null;
        isBusy = true;
        setTimeout(() => {
            isBusy = false;
            if (!lastArgs) {
                return;
            }
            worker.call(this, ...lastArgs);
        }, ms);
        return fn.call(this, ...args)
    }
}
