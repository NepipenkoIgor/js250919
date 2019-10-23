let user = {
    firstName: 'Иван',
    lastName: 'Петренко',
    // get fullName() {
    //     return `${this.firstName} ${this.lastName}` ;
    // },
    // set fullName(fN) { // Igor Nepipenko
    //     const [firstName, lastName] = fN.split(' ');
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    setFullName(fN) {
        const [firstName, lastName] = fN.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    },
    getFullName() {
        return `${this.firstName} ${this.lastName}` ;
    }
};


// console.log(user.fullName)
// user.fullName = 'Igor Nepipenko';
// console.log(user)
user.setFullName('Igor Nepipenko');
console.log(user.getFullName());
