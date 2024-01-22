// logicalOperators.js
// 1)
// let value = NaN;

// value &&= 10; // NaN // false
// value ||= 20; // false // 20
// value &&= 30; // true // 30
// value ||= 40; // true // 30

// alert(value);

// 2)
// let age = prompt('Input your age', '');

// age = (age >= 14 && age <= 90) ? console.log(true) : console.log(false);

// 3)
// let age = prompt('Input your age', '');

// age = (age < 14 || age > 90) ? console.log(true) : console.log(false);

// 4)
// if (-1 || 0) alert( 'first' ); // first
// if (-1 && 0) alert( 'second' ); // false
// if (null || -1 && 1) alert( 'third' ); // third

// 5)
// let userName = prompt('Who is where?', '');

// if (userName === 'Админ') {
//     let password = prompt('Пароль?', '');

//     if (password === 'Я Главный') {
//         alert('Здравствуйте!');
//     } else if (password === '' || password === null) {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль')
//     }

// } else if (userName === '' || userName === null) {
//     alert('Отменено');
// } else {
//     alert('Я вас не знаю');
// }