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