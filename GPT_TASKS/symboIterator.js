// 1)
// a)
function Range(start, end) {
    this.current = start;
    this.last = end;

    this[Symbol.iterator] = function() {
        return {
            next: function() {
                if (this.current <= this.last) {
                    return {
                        done: false,
                        value: this.current++
                    }
                } else {
                    return { done: true }
                }
            }.bind(this)
        };
    };
}

const obj = new Range(1, 8);

// for (let num of obj) {
//     console.log(num);
// }

// b) Улучшенный вариант
function wrightRange(start, end) {
    this.start = start;
    this.end = end;
}

wrightRange.prototype[Symbol.iterator] = function() {
    let current = this.start;
    const last = this.end;

    return {
        next() {
            if (current <= last) {
                return {
                    done: false,
                    value: current++
                }
            } else {
                return { done: true }
            }
        }
    }
}

const obj2 = new wrightRange(1, 7);

for (let num of obj2) {
    console.log(num);
}

// 2)
function ReversedString(str) {
    this.str = str;
}

ReversedString.prototype[Symbol.iterator] = function() {
    const str = this.str;

    let current = str.length - 1;

    return {
        next() {
            if (current >= 0) {
                return {
                    done: false,
                    value: str[current--]
                }
            } else {
                return { done: true }
            }
        }
    }
}

const reversed = new ReversedString("hello");

for (let char of reversed) {
  console.log(char); // Выводит 'o', 'l', 'l', 'e', 'h'
}

// 3)
const admin = {
    name: "Nick",
    age: 34,
    isAdmin: true,
    userName: "admin",
    password: "12!_12",

    [Symbol.iterator]() {
        const keys = Object.keys(admin);
        let current = 0;        

        return {
            next: () => {
                const key = keys[current];
                const value = this[key];
                current++;

                if (current <= keys.length) {
                    return {
                        done: false,
                        value: { key, value }
                    }
                } else {
                    return { done: true }
                }
            }
        }
    }
}

for (let { key, value } of admin) {
    console.log(`${key}: ${value}`);
}

const [name, age, ...otherArgs] = admin;

console.log(otherArgs);

// удаление из объекта свойств используя '...spread-оператор'
const {password, ...others} = admin;

console.log(JSON.stringify(others));

// решение задачи по деструктуризации
// const {} = [];
// const [] = {};

const { one, two } = [1, 2];
console.log( {one, two} ); // {one: undefined, two: undefined}

const [first, second] = { 
    0: "one",
    1: "two",

    [Symbol.iterator] () {
        const keys = Object.keys(this);
        let current = 0;
        
        return {
            next() {
                const key = keys[current];
                const value = this[key];
                current++;

                if (current <= keys.length) {
                    return {
                        done: false,
                        value: [key, value]
                    }
                } else {
                    return { done: true }
                }
            }
        }
    }
 };

console.log(first, second); // ['0', undefined] ['1', undefined]