function makeArmy(count) {
    var soldiers = [];
    for (var serialNum = 0; serialNum < count; serialNum++) {
        let soldier = ((num) => {
            return () => {
                console.log(num)
            }
        })(serialNum);
        // let soldier = function (num) {
        //     return () => {
        //         debugger
        //         console.log(num);
        //     }
        // }(serialNum);
        soldiers.push(soldier);
        // soldiers.push(() => {
        //     debugger
        //     console.log(serialNum)
        // })
    }
    return soldiers;
}

const army = makeArmy(10);

army[4]();
army[9]();
army[8]();
