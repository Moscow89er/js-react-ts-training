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