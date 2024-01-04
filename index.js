// generators.js
// 1) basics
function* rangeGenerator(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

// for (let number of rangeGenerator(1, 5)) {
//     console.log(number);
// }

// 2) object entries
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

// 3) *[Symbol.iterator]
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

// 4) композиция генераторов
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

// 5) передача значений извне в генератор
function* interactiveNumberGenerator() {
    let current = 0;

    while(true) {
        // Получаем значение, переданное извне, или используем 1, если ничего не передано
        const increment = yield current;
        current += (increment !== undefined) ? increment : 1;
    }
}

const generator = interactiveNumberGenerator();

console.log(generator.next().value);  // 0
console.log(generator.next(5).value); // 5
console.log(generator.next(3).value); // 8
console.log(generator.next().value);  // 9

// asyncIteratorsGenerators.js
