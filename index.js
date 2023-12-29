// generators.js
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
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);

// asyncIteratorsGenerators.js
