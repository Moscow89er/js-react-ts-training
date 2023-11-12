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
// const unshift = function(arr, ...arg) {
//     let shiftBy = arg.length;

//     for (let i = arr.length - 1; i >= 0; i--) {
//         arr[i + shiftBy] = arr[i];
//     }

//     for (let i = 0; i < arg.length; i++) {
//         arr[i] = arg[i];
//     }

//     return arr.length;
// }

// let arr = [1,2,3,4,5];
// let newArr = [];

// let result = unshift(arr, 6, 7, 8, 'Nick');
// let newResult = unshift(newArr, 6, 7);

// console.log(result);
// console.log(newResult);


// Метод every под капотом
// const every = function(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i]) === false) {
//             return false;
//         }
//     }

//     return true;
// }

// Метод some под капотом
// const some = function(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i]) === true) return true; 
//     }

//     return false;
// }

// const arr = [1,2,3,4,5];

// retBool1 = (a) => {
//     return a === 1 ? true : false;
// }

// retBool2 = (a) => {
//     return a >= 1 ? true : false;
// }

// console.log(some(arr, retBool1));
// console.log(some(arr, retBool2));


// Метод forEach под капотом
// const forEach = function(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i, arr);
//     }
//}


// Метод map под капотом
// const map = function(arr, callback) {
//     const resultedArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         resultedArr[resultedArr.length++] = callback(arr[i], i, arr);
//     }

//     return resultedArr;
// }

// const arr = [1,2,3,4,5];

// sumFunk = (a) => {
//     return a + 2;
// }

// console.log(map(arr, sumFunk));


// Метод filter под капотом
// const filter = function(arr, callback) {
//     const resultedArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) { // проверка на истинность значения
//             resultedArr[resultedArr.length++] = arr[i];
//         }
//     }

//     return resultedArr;
// }

// const arr = [1, 2, 'Nick', 5, 'Hito'];

// callbackFunc = (el) => {
//     if (typeof el === 'string') return el;
// }

// console.log(filter(arr, callbackFunc));

// const arr = [1, 2, 3, 4, 5];

// const result = arr.reduce((acc, value) => {
//     acc.push(value**2);
//     return acc;
// }, []);

// const result = arr.reduce((acc, value) => {
// 	acc = [...acc, value**2];
//     return acc;
// }, []);

// console.log(result);

// Метод reduce под капотом:
const reduce = function(arr, reducerFunc, init) {
    let acc;
    let i;

    if (init !== undefined) {
        acc = init;
        i = 0;
    } else {
        acc = arr[0];
        i = 1;
    }

    for (i; i < arr.length; i++) {
        acc = reducerFunc(acc, arr[i], i);
    }

    return acc;
}