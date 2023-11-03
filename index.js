// arrayMethods.js
// 1) 
// a) Мой изначальный вариант
// function camelize(str) {
//     let splitedStrArr = str.split('-');

//     let result = [splitedStrArr[0]];

//     for (let i = 1; i < splitedStrArr.length; i++) {
//         let splitedWord = splitedStrArr[i].split('');

//         let firstLetter = splitedWord.shift().toUpperCase();

//         result.push(firstLetter.split('').concat(splitedWord).join(''));
//     }

//     return result.join('');
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// b)
// function camelize(str) {
//     let splitedStrArr = str.split('-');

//     let result = [splitedStrArr[0]];

//     for (let i = 1; i < splitedStrArr.length; i++) {
//         if (splitedStrArr[i]) { // проверяем не является ли текущий элемент пустой строкой
//             let splitedWord = splitedStrArr[i].split('');
    
//             let firstLetter = splitedWord.shift().toUpperCase();
    
//             result.push(firstLetter + splitedWord.join(''));
//         }
//     }

//     return result.join('');
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// c)
function camelize(str) {
    return str.
        split("-").
        map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).
        join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));