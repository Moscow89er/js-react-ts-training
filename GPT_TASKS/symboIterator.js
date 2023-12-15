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