// arrayMethods.js
// 1) 
// a) Мой изначальный вариант
// function camelize(str) {
//     let splitedStrArr = str.split('-');

//     let result = [splitedStrArr[0]];

//     for (let i = 1; i < splitedStrArr.length; i++) {
//         let splitedWord = splitedStrArr[i].split('');

//         let firstLetter = splitedWord.shift().toUpperCase();

//         result.push(firstLetter.split('').concat(splitedWord).join(''));
//     }

//     return result.join('');
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// b)
// function camelize(str) {
//     let splitedStrArr = str.split('-');

//     let result = [splitedStrArr[0]];

//     for (let i = 1; i < splitedStrArr.length; i++) {
//         if (splitedStrArr[i]) { // проверяем не является ли текущий элемент пустой строкой
//             let splitedWord = splitedStrArr[i].split('');
    
//             let firstLetter = splitedWord.shift().toUpperCase();
    
//             result.push(firstLetter + splitedWord.join(''));
//         }
//     }

//     return result.join('');
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// c)
// function camelize(str) {
//     return str.
//         split("-").
//         map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).
//         join('');
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// 2)
// a)
// function filterRange(arr, a, b) {
//     let resultArr = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= a && arr[i] <= b) {
//             resultArr.push(arr[i]);
//         }
//     }

//     return resultArr;
// }

// b)
// function filterRange(arr, a, b) {
//     return arr.filter((item) => item >= a && item <= b);
// }

// let arr = [5, 3, 8, 1];

// console.log(filterRangeInPlace(arr, 1,4));

// 3)
// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b ) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); 

// alert( arr );

// 4)
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert(arr);

// 5)
// let arr = ["HTML", "JavaScript", "CSS"];

// a)
// function copySorted(arr) {
//     let copyArr = arr.concat();

//     return copyArr.sort();
// }

// b)
// function copySorted(arr) {
//     return arr.concat().sort();
// }

// c)
// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let sorted = copySorted(arr);

// alert( sorted );
// alert( arr );

// 6)
// a)
// function Calculator() {
//     this.calculate = function(str) {
//         let splitedStr = str.split(' ');

//         let operator = splitedStr[1];

//         if (operator === '+') {
//             return +splitedStr[0] + +splitedStr[2];
//         }

//         if (operator === '-') {
//             return +splitedStr[0] - +splitedStr[2];
//         }

//         return null;
//     }
// }


// b)
// function Calculator() {
//     this.methods = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a - b
//     }

//     this.calculate = function(str) {
//         let split = str.split(' ');
//         let a = +split[0];
//         let operator = split[1];
//         let b = +split[2];

//         if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }

//         return this.methods[operator](a, b);
//     }

//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     } 
// }

// let calc = new Calculator;
// alert( calc.calculate("33 + 7") );

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result );

// 7)
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// console.log(names);

// 8)
// arr.pop(): удаляет элемент с конца массива, возвращает элемент, который удаляем (мутирует массив) +
// arr.shift(): удаляет элемент с начала массива, возвращает элемент, который удаляем (меняет индексы, мутирует массив) +
// arr.push(): добавляет элемент с конца массива, возвращает обновленную длинну (мутирует массив) +
// arr.unshift(): добавляет элемент с начала массива, возвращает обновленную длинну (меняет индексы, мутирует массив) +
// arr.forEach(): позволет пройти по массиву и массиво подобному объекту и что-то сделать с элементом, возвращая undefined +
// arr.map(): позволет пройти по массиву и что-то сделать с элементом, принимает функцию, которая может преобразовать элементом, возвращает обновленное значение массива +/-
// arr.filter(): фильтрует массив, возвращает элементы, которые проходят по условию фильтрации, возвращает обновленный массив +
// arr.reduce(): позволяет перебрать массив и привести его к одному значению, возвращает полученное значение +
// arr.find(): позволяет найти элемент в массиве, возвращает первое подходящее значение +
// arr.sort(): позволет отсортировать массив, возвращает обновленный массив (мутирует массив) +
// arr.splice(): позволяет указать по индексам элементы, возвращает обновленный массив, элементы которые хотим вернуть из массива (мутирует) +
// arr.slice(): позволяет указать по индексам элементы, которые хотим вернуть из массива +
// arr.concat(): позволяет объдинить несколько массивов, возвращает обновленный массив +/-
// arr.findIndex(): позволяет найти элемент по индексу, возвращает элемент, который ищем, либо -1 +/-
// arr.includes(): проверяет есть ли в массиве тот или мной элемент, возвращает булево значение 
// arr.reverse(): меняет элементы массива к обратному порядку, возвращает обновленный массив (мутирует)
// arr.flat(): убирает вложенность
// arr.flatMap(): убирает вложенность и преобразует массив согласно функции callback
// toSorted() | toSpliced() | toReversed(): возвращает новый массив

// *)
// Задачка 1.  Дан массив целых чисел. Нужно по нему пройтись, перемножая все элементы кроме текущего
// a)
// const multiplyNumsExceptSelf = (nums) => {
//     let arr = [];

//     for (let i = 0; i < nums.length; i++) {
//         let curNum = 1;
//         for(let j = 0; j < nums.length; j++) {
//             if (j != i) {
//                 curNum *= nums[j];
//             }
//         }
//         arr.push(curNum);
//     }

//     return arr;
// }

// b)
// const multiplyNumsExceptSelf = (nums) => {
//     const totalProduct = nums.reduce((acc, num) => num !== 0 ? acc * num : acc, 1);

//     const zeroCount = nums.filter(num => num === 0).length;

//     return nums.map((num) => {
//         if (zeroCount > 1) {
//             return 0;
//         }

//         if (zeroCount === 1) {
//             return num === 0 ? totalProduct : 0;
//         }

//         return totalProduct / num;
//     })
// }

// console.log(multiplyNumsExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
// console.log(multiplyNumsExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]
// console.log(multiplyNumsExceptSelf([-1, 0, 0, -3, 3])); // [0, 0, 0, 0, 0]

// 8)
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map((user) => ({
//     fullName: user.name + " " + user.surname, // `${user.name} ${user.surname}`
//     id: user.id
// }))

// alert( usersMapped[0].id );
// alert( usersMapped[0].fullName );
// console.log(usersMapped);

// 9)
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortByAge(users) {
//     return users.sort((a, b) => a.age - b.age);
// }

// sortByAge(arr);
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// Многомерные массивы
// let rows = 8;
// let cols = 8;
// let matrix = [];

// for (let i = 0; i < rows; i++) {
//     matrix[i] = []; // Создаем новый массив для каждой строки
//     for (let j = 0; j < cols; j++) {
//         matrix[i][j] = i * cols + j; // Присваиваем значения элементам массива
//     }
// }

// console.log(matrix);

// 10)
// shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

// let arr = [1, 2, 3];

// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));

// 11)
// getAverageAge = (arr) => {
//     return Math.floor(arr.map((user) => user.age).reduce((acc, curV) => (acc + curV), 0) / arr.length);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) );

// 12)
// a)
// function unique(arr) {
//     let obj = new Set(arr);

//     return Array.from(obj);
// }


// b)
// function unique(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if (arr[j] != arr[i]) {
//                 if (result.includes(arr[j]) === false) {
//                     result.push(arr[j]);
//                 }
//             }
//         }
//     }

//     return result;
// }

// c)
// function unique(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// console.log(unique(strings));

// 13)
// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];
  
// let usersById = groupById(users);

// function groupById(arr) {
//     return arr.reduce((acc, curV) => {
//         acc[curV.id] = curV;
//         return acc;
//     }, {});
// }

// console.log(usersById);

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
const map = function(arr, callback) {
    const resultedArr = [];

    for (let i = 0; i < arr.length; i++) {
        resultedArr[resultedArr.length++] = callback(arr[i], i, arr);
    }

    return resultedArr;
}

const arr = [1,2,3,4,5];

sumFunk = (a) => {
    return a + 2;
}

console.log(map(arr, sumFunk));


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
// const reduce = function(arr, reducerFunc, init) {
//     let acc;
//     let i;

//     if (init !== undefined) {
//         acc = init;
//         i = 0;
//     } else {
//         acc = arr[0];
//         i = 1;
//     }

//     for (i; i < arr.length; i++) {
//         acc = reducerFunc(acc, arr[i], i);
//     }

//     return acc;
// }

// arrayMethods

// Как работает под капотом метод find
// const find = function(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             return arr[i];
//         }
//     }

//     return undefined;
// }

// Как работает метод findIndex под капотом
// const findIndex = function(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             return i;
//         }
//     }

//     return -1;
// }