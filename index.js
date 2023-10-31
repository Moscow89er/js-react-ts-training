// array.js
// 1)
let styles = ["Джаз", "Блюз"]; // 1

styles.push("Рок-н-ролл"); // 2
styles[Math.floor((styles.length - 1) / 2)] = "Классика"; // 3
alert(styles.shift()); // 4
styles.unshift("Рэп", "Регги"); // 5

console.log(styles);