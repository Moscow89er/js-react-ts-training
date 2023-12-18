// promiseBasics.js
// 1)
// a) callback
function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Error loading script ${src}`));

    document.head.append(script);
}

// b) promise
function loadScriptOnPromise(src) {
    return new Promise(function(resolve, reject) {
        const script = document.createElement("script");
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Error loading script ${src}`));

        document.head.append(script);
    })
}

const promise = loadScriptOnPromise("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

// promise.then(
//     script => console.log(`${script.src} was loaded!`),
//     error => console.log(`Error: ${error.message}`)
// );

// promise.then(script => console.log('Yet another handler...'));

// c) пример promise chaining
// loadScriptOnPromise("/article/promise-chaining/one.js")
//     .then(script => loadScriptOnPromise("/article/promise-chaining/two.js"))
//     .then(script => loadScriptOnPromise("/article/promise-chaining/three.js"))
//     .then(script => {
//         // скрипты загружены, мы можем использовать объявленные в них функции
//         one();
//         two();
//         three();
//     });

// 2)
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

// delay(3000).then(() => console.log('выполнилось через 3 секунды'));

// 3)
// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
// }).then(function(result) {
//     console.log(result);

//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(result * 2), 1000)
//     });

// }).then(function(result) {
//     console.log(result);

//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(result * 2), 1000);
//       });
    
// }).then(function(result) {
//     console.log(result);
    
// });

// 4)
class Thenable {
    constructor(num) {
        this.num = num;
    }

    then(resolve, reject) {
        console.log(resolve);

        setTimeout(() => resolve(this.num * 2), 1000);
    }
}

new Promise(resolve => resolve(1))
    .then(result => {
        return new Thenable(result);
    })
    .then(console.log);