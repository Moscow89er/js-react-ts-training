// mapSet.js

// 1)
// a)
// function unique(arr) {
//     const set = new Set(arr);
//     const uniqArrOfVal = [];

//     for (let uniqVal of set) {
//         uniqArrOfVal.push(uniqVal);
//     }

//     return uniqArrOfVal;
// }

// b)
// unique = (arr) => [...new Set(arr)];
  
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
  
// alert( unique(values) );

// 2) Мое решение
// a)
// aclean = (arr) => {
//     const convertedArr = [];
//     const uniqArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         const convertedEl = arr[i].toLowerCase().split('').sort().join('');

//         if (!convertedArr.includes(convertedEl)) {
//             convertedArr.push(convertedEl);
//             uniqArr.push(arr[i]);
//         }
//     }

//     return uniqArr;
// }

// b)
// const aclean = function(arr) {
//     const map = new Map();

//     for (let word of arr) {
//         const sorted = word.toLowerCase().split('').sort().join('');
//         map.set(sorted, word);
//     }

//     return Array.from(map.values());
// }

// c)
// function aclean(arr) {
//     let set = new Set();
//     let uniqArr = [];

//     for (let word of arr) {
//         const sorted = word.toLowerCase().split('').sort().join('');
        
//         if (!set.has(sorted)) {
//             set.add(sorted);
//             uniqArr.push(word);
//         }
//     }

//     return uniqArr;
// }

// const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// const emptyArr = [];

// alert( aclean(arr) );
// alert( aclean(emptyArr) );

// 3)
// const map = new Map();

// map.set("name", "John");

// const keys = Array.from(map.keys());
// const objKeys = Object.fromEntries(map.entries());

// keys.push("more");

// console.log(keys);
// console.log(objKeys);