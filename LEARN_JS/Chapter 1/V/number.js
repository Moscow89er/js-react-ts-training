// number.js
// 1)
// let firstNum = +prompt("Enter first number", "");
// let secondNum = +prompt("Enter second number", "");

// alert(firstNum + secondNum);

// 2)
// alert(Math.round(6.35 * 10) / 10);

// 3)
// function readNumber() {
//     let num;

//     do {
//         num = +prompt("Enter number", 0);
//     } while (!isFinite(num))

//     if (num === "" || num === null) return null;

//     return num;
// }

// alert(readNumber());

// 3)
// let i = 0;

// while (i != 10) {
//     i += (Math.round(0.2 * 10) / 10);
//     alert(i);
// }

// 4)
// function random(min, max) {
//     return min + Math.random() * (max - min);
// }

// console.log(random(1, 5));

// // 5)
// function randomInteger(min, max) {
//     return Math.floor(min + Math.random() * ((max + 1) - min));
// }

// console.log(randomInteger(25, 36));