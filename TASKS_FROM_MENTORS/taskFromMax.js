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

// 5)
function memoizedFibonacci() {
  let cache = {};

  function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    if (cache[n]) {
      return cache[n];
    }

    const result = fib(n - 1) + fib(n - 2);
    cache[n] = result;
    return result;
  }

  return fib;
}

const fibonacci = memoizedFibonacci();

console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(1000));

// 6)
function memoFib(n, cache = {}) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (cache[n]) {
      return cache[n];
  }

  cache[n] = memoFib(n - 1, cache) + memoFib(n - 2, cache);

  return cache[n];
}

console.log(memoFib(7));

// 7)
function memoFactorial(n, cache = {}) {
  if (n in cache) return cache[n];

  if (n === 1) return 1;

  cache[n] = n * memoFactorial(n - 1, cache);

  return cache[n];
}

console.log(memoFactorial(5));

// 8)
function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(5));

// 9)
function tailReqursionFactorial(n, accumulator = 1) {
  if (n === 1) return accumulator;

  return tailReqursionFactorial(n - 1, n * accumulator);
}

console.log(tailReqursionFactorial(5));

// 10)
// a)
function sumOfTheRangeOfNum (n, cache = {}) {
  if (n in cache) return cache[n];

  if (n === 1) return 1;

  cache[n] = n + sumOfTheRangeOfNum(n - 1, cache);

  return cache[n];
}

console.log(sumOfTheRangeOfNum(5));

// b)
function tailSumOfTheRangeOfNum(n, accumulator = 0) {
  if (n === 0) return accumulator;

  return tailSumOfTheRangeOfNum(n - 1, n + accumulator);
}

console.log(tailSumOfTheRangeOfNum(5));


// 11)
const weekDays = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",

  [Symbol.iterator]() {
      let index = 1;

      return {
          next() {
              if (index <= 7) {
                  const current = weekDays[index++];

                  return {
                      done: false,
                      value: current
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

// for (const day of weekDays) {
//     console.log(day);
// }


// 12)
// a)
const colorSpectrum = { 
  red: "#FF0000",
  green: "#00FF00", 
  blue: "#0000FF",

  [Symbol.iterator]() {
      const keys = getKeys(colorSpectrum);

      return {
          next() {
              const current = colorSpectrum[keys[0]];

              if (keys.length !== 0) {
                  keys.shift();

                  return {
                      done: false,
                      value: current
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

function getKeys(obj) {
  const arrOfKeys = [];

  for (let key in obj) {
      arrOfKeys.push(key);
  }

  return arrOfKeys;
}

for (const color of colorSpectrum) {
  console.log(color);
}

// b) оптимальное решение
const colorSpectrum2 = {
  red: "#FF0000",
  green: "#00FF00", 
  blue: "#0000FF",

  [Symbol.iterator]() {
      const keys = Object.keys(colorSpectrum2).filter(key => key !== Symbol.iterator.toString());
      let index = 0;

      return {
          next() {
              if (index < keys.length) {
                  const key = keys[index++];

                  return {
                      done: false,
                      value: colorSpectrum2[key]
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

for (const color of colorSpectrum2) {
  console.log(color);
}

// 13)
const book = {
  page1: "Content of page 1",
  page2: "Content of page 2",

  [Symbol.iterator]() {
      const keys = Object.keys(this).filter(key => key !== Symbol.iterator.toString());
      let index = 0;
      const self = this;

      return {
          next() {
              const key = keys[index];

              if (index < keys.length) {
                  index++;

                  return {
                      done: false,
                      value: self[key]
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

for (const pageContent of book) {
  console.log(pageContent);
}

// 14) Реализация await в виде функции, принимающей генератор
function runGenerator(genFunc) {
  const generator = genFunc();

  function handleNext(value) {
      const next = generator.next(value);
      if (next.done) return Promise.resolve(next.value);
      return Promise.resolve(next.value).then(handleNext);
  }

  return handleNext();
}

function* gen() {
  const firstResult = yield fetchSomeData();
  console.log(firstResult);
  const secondResult = yield fetchMoreData(firstResult);
  console.log(secondResult);
}

runGenerator(gen);