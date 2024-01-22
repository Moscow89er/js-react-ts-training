// functionBasics.js
// 1)
// let age = prompt('How old are you?', '');
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');     
// }

// 2)
// function min(a, b) {
//     return (a < b) ? a : b;
// }

// console.log(min(2, 5)) // 2
// console.log(min(3, -1)) // -1
// console.log(min(1, 1)) // 1

// 3)
// Мое решение
// function pow() {
//     let x = prompt('Введите число 1', '');
//     let n = prompt('Введите число 2', '');

//     if (n >= 1 && n % 2 == 0) {
//         alert(x ** n);
//     } else {2
//         alert('Второе число должно быть натуральным!');
//     }
// }

// pow();

// Решение которое предлагает автор
// function pow (x, n) {
//     let result = x;

//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n >= 1 && n % 1 == 0) {
//   alert( pow(x, n) );
// } else {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// }