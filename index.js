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

// console.log(toCountObjValues(obj));

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


// console.log(toFilterByAge(objOfAges));

// 3)
function toSwapKeysAndValues(obj) {
    const swapped = Object.entries(obj).reduce((acc, ...) => {
        
    }, {})

    return swapped;
}

console.log(toSwapKeysAndValues(objOfAges));