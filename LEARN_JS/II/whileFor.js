// whileFor.js
// 1)
// let i = 0;
// while (++i < 5) alert( i ); // 1, 2, 3, 4

// let i = 0;
// while (i++ < 5) alert( i ); // 1, 2, 3, 4, 5

// 2)
// for (let i = 2; i <= 10; i++) {
//    if (i % 2 == 0) {
//     alert(i);
//    }
// }

// 3)
// let i = 0;

// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }

// 4)
// let num;

// do {
//     num = prompt('Введите число больше 100', '');
//     if (num <= 100 && num) {
//         alert('Попробуйте еще раз!');
//     } else {
//         alert('У вас получилось! Вы молодец!');
//     }
// } while (num <= 100 && num);

// 5
// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//     }
//     alert(i);
// }