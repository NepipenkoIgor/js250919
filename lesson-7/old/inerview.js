for (var i = 0; i < 10; i++) {
    setTimeout((function (num) {
        debugger
        console.log(num)
    })(i));
}
