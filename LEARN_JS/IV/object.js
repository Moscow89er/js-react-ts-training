// object.js
// 1)
// const user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// console.log(user);

// 2)
// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }

//     return true;
// }

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// 3)
// function sumSalaries(obj) {
//     let sum = 0;

//     for (let key in obj) {
//         sum += obj[key];
//     }

//     return sum;
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// console.log(sumSalaries(salaries));

// 4)
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2;
//         }
//     }
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// multiplyNumeric(menu);

// console.log(menu);