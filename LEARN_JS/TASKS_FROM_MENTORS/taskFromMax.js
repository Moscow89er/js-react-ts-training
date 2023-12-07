// ОС ОТ МАКСА 15.11.2023
// 1) unshift под капотом
const unshiftMaxVersion = function(arr, ...arg) {
    arr.splice(0, 0, ...arg);
    return arr.length;
}

const unshiftMyVersion = function(arr, ...args) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + args.length] = arr[i];
    }

    for (let j = 0; j < args.length; j++) {
        arr[j] = args[j];
    }

    return arr;
}

const arr = [1, 2, 3];

console.log(unshift(arr, 2,3,4));

// 2)
const myWeakMap = new WeakMap();

function processTest() {
    const a = {};
    const b = a;
    myWeakMap.set(a, "AAA");

    const c = b;

    return c;
}

const c = processTest();

// console.log(myWeakMap.get(c));

// 3)
const a = {};

Object.defineProperty(a, "test", {
  enumerable: true,
  configurable: true,
  get() { 
    // Это возвращает значение _test, если оно было установлено; 
    // если нет, то возвращает undefined.
    return this._test;
  },
  set(value) {
    // Это сохраняет полученное значение в _test.
    this._test = value;
  }
});

// При использовании сеттера, _test будет создан и установлен.
a.test = 123;

console.log(a.test); // 123
console.log(a._test); // 123

// [Symbol.iterator] 06.12.2023
// 1)
let a = {
  from: 1,
  to: 5,

	[Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return {
            done: false,
            value: this.current++
          }
        } else {
          return {
            done: true
          }
        }
      }
    }
	},
}

console.log([...a]);

// 2)
const b = {
  string1: "hello",
  string2: "world",

  [Symbol.iterator]() {
    const combinedString = this.string1 + this.string2;
    let index = 0;

    return {
      next() {
        if (index < combinedString.length) {
          return {
            value: combinedString.charAt(index++),
            done: false
          }
        } else { 
          return {
            done: true
          }
        }
      }
    }
  }
}

console.log(...b);

// 3)
const d = {
  [Symbol.iterator]() {
    let step = 0;

    return {
      next() {
        step++;
        if (step === 1) {
          return {
            done: false,
            value: "first value"
          }
        } else if (step === 2) {
          return {
            done: false,
            value: "second value"
          }
        } else {
          return {
            done: true
          }
        }
      }
    }
  }
}

const [t1, t2] = d;
console.log(t1, t2);

// 4)
const range = {
  start: 1,
  end: 5
};

range[Symbol.iterator] = function() {
    let current = this.start;
    let last = this.end;
    
    return {
      next() {
        if (current <= last) {
          return {
            done: false,
            value: current++
          }
        } else {
          return {
            done: true
          }
        }
      }
    }
}

for (let num of range) {
  console.log(num);
}