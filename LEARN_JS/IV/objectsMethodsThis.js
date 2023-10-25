// objectsMethodsThis.js
// 1)
// function makeUser() {
//     return {
//         name: "John",
//         ref() {
//             return this;
//         }
//     };
// }

// let user = makeUser();

// alert( user.ref().name );

// 2)
// let calculator = {
//     firstNumber: '',
//     secondNumber: '',

//     read() {
//         this.firstNumber = +prompt('Введите число 1', '');
//         this.secondNumber = +prompt('Введите число 2', '');
//     },

//     sum() {
//         console.log(this.firstNumber + this.secondNumber);
//     },

//     mul() {
//         console.log(this.firstNumber * this.secondNumber);
//     }
// }

// calculator.read();

// console.log(calculator.firstNumber);
// console.log(calculator.secondNumber);
// calculator.sum();
// calculator.mul();

// 3)
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//         alert( this.step );
//         return this;
//     }
// };

// ladder.up().up().down().showStep().down().showStep();