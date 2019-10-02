const movies = {
    list: [
        {title: 'SpiderMan'},
        {title: 'X Man'},
        {title: 'Batman'},
    ],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.list.length) {
                    const value = this.list[index++].title;
                    return {done: false, value}
                }
                return {done: true}
            }
        }
    }
};
const iterator = movies[Symbol.iterator]()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// for (let film of movies) {
//     console.log(film);
// }

