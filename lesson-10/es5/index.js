const Person = function () {

    let privatePops = new WeakMap();

    function Person(first, last, age) {
        Person.instanceCount++;
        this.name = {
            first,
            last
        };
        this.age = age;
        privatePops.set(this, {_salary: 0});
    }

    Person.instanceCount = 0;
    Person.prototype.getPersonsCount = function () {
        return Person.instanceCount;
    };

    Person.prototype.sayHi = function () {
        const {first, last} = this.name;
        return `Hi my name is ${first} ${last}`
    };
    Object.defineProperty(Person.prototype, 'salary', {
        get() {
            return `${privatePops.get(this)._salary}$`
        },
        set(value) {
            const salary = Number(value);
            if (Number.isNaN(salary)) {
                return;
            }
            privatePops.set(this, {_salary: value});
        },
    });

    return Person;
}();


function Teacher(first, last, age, subject) {
    Person.call(this, first, last, age);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.constructor = Teacher;

Teacher.prototype.sayHi = function () {
    return `${Person.prototype.sayHi.call(this)} and my subject is ${this.subject}`
};

let p1 = new Person('Ihor', 'Nepipenko', 33);
let p2 = new Person('Vlad', 'Loban', 30);
let t1 = new Teacher('Ihor', 'Procopenko', 25, 'TypeScript');
console.log(p1);
console.log(p2);
console.log(t1);
console.log(p1.sayHi());
console.log(p2.sayHi());
console.log(t1.sayHi());
console.log(p1.getPersonsCount());
console.log(p2.getPersonsCount());
console.log(t1.getPersonsCount());

console.log(p1.salary);
console.log(p2.salary);
console.log(t1.salary);
p1.salary = 3000;
t1.salary = 5000;
p2.salary = 'asd1231zsda';
console.log(p1.salary);
console.log(p2.salary);
console.log(t1.salary);


