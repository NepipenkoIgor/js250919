class BasePoint {
    x = 1;
    y = 2;
    sum () {
        return this.x + this.y;
    }
}

class Point extends BasePoint {
    sum () {
        return 2 * super.sum();
    }
}

const p = new Point();
console.log(p);
console.log(p.sum());

