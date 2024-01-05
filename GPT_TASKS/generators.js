// 1) Бесконечный генератор чисел Фибоначчи
function* fibonacciGenerator() {
    yield 0;
    let a = 0;
    let b = 1;

    while(true) {
        yield b;
        let c = a + b;

        a = b;
        b = c;
    }
}

const fib = fibonacciGenerator();
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);

// 2) Генератор для обработки массива с паузами
// a) неверное решение
// function* pauseArray(arr, n) {
//     let savedNum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % n === 0) {
//             savedNum = arr[i]

//             yield savedNum;
//         }

//         if (arr[i] !== savedNum) {
//             yield arr[i];
//         }
//     }
// }

// b) верное решение
function* pauseArray(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];

        // Приостановка каждый раз после n элементов
        if ((i + 1) % n === 0) {
            yield 'pause'; // Или просто `yield;` для приостановки без значения
        }
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pauser = pauseArray(arr, 3);

console.log(pauser.next().value); // 1
console.log(pauser.next().value); // 2
console.log(pauser.next().value); // 3 и пауза
console.log(pauser.next().value); // 4
console.log(pauser.next().value); // 5

// 3) basics
function* rangeGenerator(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

// for (let number of rangeGenerator(1, 5)) {
//     console.log(number);
// }

// 4) object entries
function* objectEntries(obj) {
    const entries = Object.entries(obj);

    for (const [key, value] of entries) {
        yield [key, value];
    }
}

const obj = { a: 1, b: 2, c: 3 };

// for (let [key, value] of objectEntries(obj)) {
//     console.log(`${key}: ${value}`);
// }

// 5) *[Symbol.iterator]
function createIterable(limit) {
    this.start = 1;
    this.end = limit;
}

createIterable.prototype[Symbol.iterator] = function*() {
    

    for (let value = this.start; value <= this.end; value++) {
        yield value;
    }
}

const limit = 5;
const iterable = new createIterable(limit);

// for (let value of iterable) {
//     console.log(value);
// }

// 6) композиция генераторов
function* numberGenerator(n) {
    for (let i = 1; i <= n; i++) {
        yield i;
    }
}

function* filterGenerator(sourceGen, predicate) {
    for (let num of sourceGen) {
        if (predicate(num)) yield num;
    }
}

function* mapGenerator(sourceGen, transform) {
    for (let num of sourceGen) {
        yield transform(num);
    }
}

const numbers = numberGenerator(10);
const evenNumbers = filterGenerator(numbers, x => x % 2 === 0);
const doubledNumbers = mapGenerator(evenNumbers, x => x * 2);

// for (let number of doubledNumbers) {
//     console.log(number);
// }

// 7) передача значений извне в генератор
function* interactiveNumberGenerator() {
    let current = 0;

    while(true) {
        // Получаем значение, переданное извне, или используем 1, если ничего не передано
        const increment = yield current;
        current += (increment !== undefined) ? increment : 1;
    }
}

const generator = interactiveNumberGenerator();

// console.log(generator.next().value);  // 0
// console.log(generator.next(5).value); // 5
// console.log(generator.next(3).value); // 8
// console.log(generator.next().value);  // 9

// 8) throw в контексте генераторов
function* exceptionHandlingGenerator() {
    for (let i = 0; i <= Infinity; i++) {
        try {
            yield i;
        } catch (error) {
            yield `Поймана ошибка: ${error}`;
        }
    }
}

const generator2 = exceptionHandlingGenerator();

console.log(generator2.next().value); // 0
console.log(generator2.next().value); // 1
console.log(generator2.throw('Test error').value);
console.log(generator2.next().value); // 2