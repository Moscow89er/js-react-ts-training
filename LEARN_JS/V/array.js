// array.js
// 1)
// let styles = ["Джаз", "Блюз"]; // 1

// styles.push("Рок-н-ролл"); // 2
// styles[Math.floor((styles.length - 1) / 2)] = "Классика"; // 3
// alert(styles.shift()); // 4
// styles.unshift("Рэп", "Регги"); // 5

// console.log(styles);

// 2)
// a)
// function sumInput() {
//     let arr = [];
//     let num;

//     do {
//         let value = prompt('Enter number', '');
//         if (value === null || value === '') break;
//         num = +value;
//         if (!isNaN(num)) {
//             arr.push(num);
//         }
//     } while (true)

//     console.log(arr);

//     console.log(arr.reduce((a, b) => a + b, 0));
// }

// sumInput();

// b)
// function sumInput() {
//     let numbers = [];

//     while (true) {
//         let value = prompt("Enter number", 0);

//         if (value === null || value === "" || !isFinite(value)) break;

//         numbers.push(+value);
//     }

//     let sum = 0;

//     for (let num of numbers) {
//         sum += num;
//     }

//     console.log(sum);
// }

// sumInput();

// 2)
// function getMaxSubSum(arr) {
//     let currentSum = 0;
//     let maxSum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         currentSum = 0;
//         for (let j = i; j < arr.length; j++) {
//             currentSum += arr[j];
//             if (maxSum < currentSum) {
//                 maxSum = currentSum;
//             }
//         }
//     }

//     return maxSum;
// }

// alert(getMaxSubSum([-1, 2, 3, -9]));