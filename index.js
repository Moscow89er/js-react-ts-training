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
const start = Date.now();
const times = [];

setTimeout(function run() {
    times.push(Date.now() - start);

    if (start + 100 < Date.now()) alert(times);
    else setTimeout(run);
});