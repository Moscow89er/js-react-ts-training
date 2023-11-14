// keysValuesEntries.js

// 1)
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// let salaries2 = {};

// a)
// sumSalaries = (salaries) => {
//     let sum = 0;

//     if (Object.entries(salaries).length === 0) return 0;

//     for (let salary of Object.values(salaries)) {
//         sum += salary;
//     }

//     return sum;
// }

// b)
// const sumSalaries = function(salaries) {
//     return Object.values(salaries).reduce((a, b) => a + b, 0);
// }

// console.log(sumSalaries(salaries));
// console.log(sumSalaries(salaries2));

// 2)
// let user = {
//     name: 'John',
//     age: 30
// };

// a)
// count = (obj) => {
//     let count = 0;

//     for (let values of Object.values(obj)) {
//         if (values) {
//             count++;
//         }
//     }

//     return count;
// }

// b)
// count = (obj) => {
//     let count = 0;

//     Object.values(obj).map((value) => {
//         if (value) count++;
//     })

//     return count
// }

// c)
// count = (obj) => Object.values(obj).reduce((acc) => acc + 1, 0);

// d)
// count = (obj) => Object.keys(obj).length;

// alert(count(user));