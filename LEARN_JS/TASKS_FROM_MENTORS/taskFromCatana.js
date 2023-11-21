// Задача от Артема (Catana)
const {0: one, 1: two} = [1, 2];

console.log(one);
console.log(two);

const [three, four, five, six] = { 
    0: 3,
    1: 4,
    2: 5,
    3: 6,

    [Symbol.iterator]() {
        this.current = this[0];
        return this;
    },

    next() {
        if(this.current <= this[3]) {
            return {
                done: false,
                value: this.current++
            };
        } else {
            return { done: true };
        }
    }
};

console.log(three);
console.log(four);
console.log(five);
console.log(six);