class Person {

    static instanceCount = 0;

    constructor(first, last, age) {
        this.name = {
            first,
            last
        };
        this.age = age;
        this._salary = 0;
        Object.defineProperty(this, 'salary', {
            get() {
                return `${this._salary}$`
            },
            set(value) {
                const salary = Number(value);
                if (Number.isNaN(salary)) {
                    return;
                }
                this._salary = value;
            }
        });
        Person.instanceCount++;
    }

    sayHi() {
        const {first, last} = this.name;
        return `Hi my name is ${first} ${last}`
    }

    getPersonsCount() {
        return Person.instanceCount;
    };

    // get salary() {
    //     return `${this._salary}$`
    // }
    //
    // set salary(value) {
    //     const salary = Number(value);
    //     if (Number.isNaN(salary)) {
    //         return;
    //     }
    //     this._salary = value;
    // }

}

class Teacher extends Person {
    constructor(first, last, age, subject) {
        super(first, last, age);
        this.subject = subject;
    }

    sayHi() {
        return `${super.sayHi()} and my subject is ${this.subject}`
    }
}

let p1 = new Person('Ihor', 'Nepipenko', 33);
let p2 = new Person('Vlad', 'Loban', 30);
let t1 = new Teacher('Ihor', 'Procopenko', 25, 'TypeScript');

console.log(p1);
console.log(p2);
console.log(p1.sayHi());
console.log(p2.sayHi());
console.log(t1.sayHi());
console.log(p1.getPersonsCount());
console.log(p2.getPersonsCount());
console.log(p1.salary);
console.log(p2.salary);
console.log(t1.salary);
p1.salary = 3000;
t1.salary = 5000;
console.log(p1.salary);
console.log(p2.salary);
console.log(t1.salary);

