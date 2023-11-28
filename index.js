// settimeoutSetinterval.js

// const delay = 5000;

// const timerId = setTimeout(function request() {
//     // send request
//     if (error because server overload) {
//         delay *= 2;
//     }

//     timerId = setTimeout(request, delay);
// }, delay);

// Минимальная задержка вложенных таймеров в браузере, пример
// const start = Date.now();
// const times = [];

// setTimeout(function run() {
//     times.push(Date.now() - start);

//     if (start + 100 < Date.now()) alert(times);
//     else setTimeout(run);
// });

function printNumbers(from, to) {
    let current = from;

    const intervalId = setInterval(()=> {
        console.log(current);
        if (current === to) {
            clearInterval(intervalId);
            return;
        }
        current++;
    }, 1000);
}

// printNumbers(1, 5);

function printNumbersByRecursion(from, to) {
    let current = from;

    const timerId = setTimeout(function repeat() {
        console.log(current);
        if (current === to) {
            clearTimeout(timerId);
            return;
        }
        current++;
        setTimeout(repeat, 1000);
    }, 1000);
}

// printNumbersByRecursion(1, 5);

function printNumbersWithoutDelay(from, to) {
    let current = from;

    function go() {
        console.log(current);
        if (current === to) {
            clearInterval(timerId);
            return;
        }
        current++;
    }

    go();

    const timerId = setInterval(go, 1000);
}

printNumbersWithoutDelay(1,5);