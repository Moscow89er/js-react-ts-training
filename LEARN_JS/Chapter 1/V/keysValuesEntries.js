// keysValuesEntries.js

// 1)
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// let salaries2 = {};

// a)
// sumSalaries = (salaries) => {
//     let sum = 0;

//     if (Object.entries(salaries).length === 0) return 0;

//     for (let salary of Object.values(salaries)) {
//         sum += salary;
//     }

//     return sum;
// }

// b)
// const sumSalaries = function(salaries) {
//     return Object.values(salaries).reduce((a, b) => a + b, 0);
// }

// console.log(sumSalaries(salaries));
// console.log(sumSalaries(salaries2));

// 2)
// let user = {
//     name: 'John',
//     age: 30
// };

// a)
// count = (obj) => {
//     let count = 0;

//     for (let values of Object.values(obj)) {
//         if (values) {
//             count++;
//         }
//     }

//     return count;
// }

// b)
// count = (obj) => {
//     let count = 0;

//     Object.values(obj).map((value) => {
//         if (value) count++;
//     })

//     return count
// }

// c)
// count = (obj) => Object.values(obj).reduce((acc) => acc + 1, 0);

// d)
// count = (obj) => Object.keys(obj).length;

// alert(count(user));

// keysValuesEntries.js
const obj = {
    name: "Nick",
    age: 33,
    hasDog: true
}

// 1)
function toCountObjValues(obj) {
    return Object.keys(obj).length;
}

console.log(toCountObjValues(obj));

// 2)
const objOfAges = {
    nick: 34,
    margo: 32,
    nina: 27,
    alex: 20,
    igorr: 12,
    roman: 5
}

function toFilterByAge(obj) {
    let resultedArr = [];
    
    Object.entries(obj).forEach((arr) => {
        if (arr[1] >= 27) {
            resultedArr.push(arr);
        }
    })

    return Object.fromEntries(resultedArr);
}

console.log(toFilterByAge(objOfAges));

// 3)
// a) мое решение
// function toSwapKeysAndValues(obj) {
//     const swapped = Object.entries(obj).reduce((acc, [key, value]) => {
//         arr = [[value, key]];

//         for (let i = 0; i < arr.length; i++) {
//             acc.push(arr[i]);
//         }

//         return acc;
//     }, [])

//     return Object.fromEntries(swapped);
// }

// b) правильный вариант решения
function toSwapKeysAndValues(obj) {
    const swapped = Object.entries(obj).reduce((acc, [key, value]) => {
        acc[value] = key;

        return acc;
    }, {})

    return swapped;
}

console.log(toSwapKeysAndValues(objOfAges));

// 4)
const sumOfAges = function(obj) {
    return Object.values(obj).reduce((acc, cur) => acc + cur, 0);
}

// console.log(sumOfAges(objOfAges));

// 5)
// a)
// searchForValue = (obj, valToFind) => {
//     let keyToFind;

//     Object.entries(obj).find(([key, value]) => {
//         if (value === valToFind) {
//             keyToFind = key;
//         }
//     });
    
//     return keyToFind;
// }

// b) улучшенная версия
searchForKey = (obj, valToFind) => {
    const entry = Object.entries(obj).find(([key, value]) => value === valToFind);

    return entry ? entry[0] : "Value didn't exist! Try something else, please."
}

console.log(searchForKey(obj, true));
console.log(searchForKey(objOfAges, 75));

// 6)
const peopleProfessions = {
    "Alice": "Engineer",
    "Bob": "Doctor",
    "Clara": "Artist",
    "David": "Teacher",
    "Eva": "Scientist",
    "Frank": "Writer",
    "Nick": "Engineer",
    "Igorr": "Scientist",
    "Mick": "Artist"
};

const groupByValues = function(obj) {
    const resultedObj = Object.entries(obj).reduce((acc, [name, profession]) => {
        if (!acc[profession]) {
            acc[profession] = [];
        }
        
        if (acc[profession]) { 
            acc[profession].push(name);
        }

        return acc;
    }, {});

    return resultedObj;
}

console.log(groupByValues(peopleProfessions));

// 7)
function toValidateObjValues(obj) {
    return Object.values(obj).every((el) => typeof el === "number");
}

console.log(toValidateObjValues(obj));
console.log(toValidateObjValues(objOfAges));
