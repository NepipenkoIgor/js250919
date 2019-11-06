function Person(first, last, age) {
    this.name = {
        first,
        last
    };
    this.age = age;
}

Person.prototype.greeting = function () {
    console.log(`Hi ${this.name.first} ${this.name.last}`)
};

function Teacher(first, last, age, subject) {
    Person.call(this, first, last, age);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function () {
    Person.prototype.greeting.call(this);
    console.log(`My subject is ${this.subject}`)
};

let p1 = new Person('Vlad', 'Loban', 30);
let p2 = new Person('Vlad', 'Loban', 30);
let t1 = new Teacher('Ihor', 'Nepipenko', 33, 'JS');
console.log(p1);
console.log(t1);

p1.greeting();
t1.greeting();


class User {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Имя слишком короткое.");
            return;
        }
        this._name = value;
    }
}

let user = new User("Иван");
alert(user.name); // Иван user = new User("");
