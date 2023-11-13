// iterable.js

// 1)
// const range = {
//     from: 1,
//     to: 5
// }

// range[Symbol.iterator] = function() {
//     return {
//         current: this.from,
//         last: this.to,

//         next() {
//             if (this.current <= this.last) {
//                return { done: false, value: this.current++ };
//             } else {
//                 return { done: true };
//             }
//         }
//     }
// }

// for (let num of range) {
//     console.log(num);
// }

// 2)
// const range = {
//     from: 1,
//     to: 5,

//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },

//     next() {
//         if (this.current <= this.to) {
//             return { done: false, value: this.current++ };
//         } else {
//             return { done: true };
//         }
//     }
// }

// for (let num of range) {
//     alert(num);
// }

// // 3) Модифицированный метод slice, способный поддерживать сурогатные пары
// function slice(str, start, end) {
//     return Array.from(str).slice(start, end).join('');
// }

// let str = "𝒳😂𩷶";

// alert( slice(str, 1, 3) ); // 😂𩷶