// logicalOperators.js
// let value = NaN;

// value &&= 10; // NaN // false
// value ||= 20; // false // 20
// value &&= 30; // true // 30
// value ||= 40; // true // 30

// alert(value);

let age = prompt('Input your age', '');

age = (age >= 14 && age <= 90) ? console.log(true) : console.log(false);