// leatCode.js
// 1)
// Counter II
// var createCounter = function(init) {
//     let curVal = init;

//     return {
//         increment() {
//             return curVal += 1;
//         },
//         decrement() {
//             return curVal -= 1;
//         },
//         reset() {
//             return curVal = init;
//         }
//     }
// };

// 2)
// function sortDict(dict) {
//     let newArr = Object.entries(dict);

//     for (arr of newArr) {
//         arr[0] = isNaN(Number(arr[0])) ? arr[0] : Number(arr[0]);
//     }

//     return newArr.sort((a, b) => b[1] - a[1]);
// }

// console.log(sortDict({3:1, 2:2, 1:3}));
// console.log(sortDict({1:2, 2:4, 3:6}));

// arrayMethods.js
// 2.1 
// Метод pop под капотом
// const pop = function(arr) {
//     if (arr.length > 0) {
//         const lastEl = arr[arr.length - 1]
//         arr.length = arr.length - 1;
//         return lastEl;
//     }
//     return undefined;
// }

// arr = [1,2,3,4,5];
// newArr = [];

// const result = pop(arr);
// const newResult = pop(newArr);

// console.log(newResult);
// console.log(result);
// console.log(arr);

// Метод массива push под капотом
// const push = function (arr, ...a) {
//     for (let i = 0; i < a.length; i++) {
//         arr[arr.length++] = a[i];
//     }
//     return arr.length;
// }

// let arr = [1,2,3,4,5];
// let newArr = [];

// const result = push(arr, 6, 7);
// const newResult = push(newArr, 'Alla', 'Timur', 'Nikita');

// console.log(result);
// console.log(newResult);

// Метод массива shift под капотом
// const shift = function(arr) {
//     if (arr.length === 0) return undefined;

//     let firstEl = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         arr[i - 1] = arr[i];
//     }
//     arr.length = arr.length - 1;

//     return firstEl;
// }

// let arr = [1,2,3,4,5];
// let newArr = [];

// let result = shift(arr);
// let newResult = shift(newArr);
// console.log(result);
// console.log(newArr);

// Метод работы unshift под капотом
const unshift = function(arr, ...arg) {
    let shiftBy = arg.length;

    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + shiftBy] = arr[i];
    }

    for (let i = 0; i < arg.length; i++) {
        arr[i] = arg[i];
    }

    return arr.length;
}

let arr = [1,2,3,4,5];
let newArr = [];

let result = unshift(arr, 6, 7, 8, 'Nick');
let newResult = unshift(newArr, 6, 7);

console.log(result);
console.log(newResult);