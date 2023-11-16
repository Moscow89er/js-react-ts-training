// array methods under the hood

// sort method under the hood
// const sort = function(arr, compareFunc) {
//     const resultedArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (compareFunc(arr[i])) resultedArr.push(arr[i]);
//     }

//     return resultedArr;
// }

// mapSet.js
// 3)
const map = new Map();

const obj = {
    name: "Nick",
    age: 34
}
const arr = [1, 2, 3];

map.set(obj, "somePropObj");
map.set(arr, "somePropArr");
map.set(123, 456);
map.set("key", "value");

map.clear();

for (let [key, value] of map) {
    console.log(key, value);
}

// 4)
const mapTheSecond = new Map();

mapTheSecond.set("Nick", 34);
mapTheSecond.set("Mick", 38);
mapTheSecond.set("Mick", 38);
mapTheSecond.set("Jane", 16);
mapTheSecond.set("Igorr", 18);
mapTheSecond.set("Chuck", 12);
mapTheSecond.set("Chuck", 12);

function toFilterMap(objMap) {
    const filteredMap = new Map();

    objMap.forEach((value, key) => {
        if (value >= 18) {
            filteredMap.set(key, value)
        }
    })

    return filteredMap;
}

console.log(toFilterMap(mapTheSecond));

// 5)
function toReverseMap(mapObj) {
    const reversedMap = new Map();

    for (let [key, value] of mapObj) {
        if (!reversedMap.has(value)) {
            reversedMap.set(value, key);
        }
    }

    return reversedMap;
}

console.log(toReverseMap(mapTheSecond));

// 6)
const mapTheThird = new Map;

const mapTheFourth = new Map;

mapTheThird.set('banana', 4);
mapTheThird.set('apple', 3);
mapTheThird.set('orange', 5);
mapTheThird.set('plum', 'no price set')

function toSumMapPrices(mapObj) {
    let sum = 0;

    for (let value of mapObj.values()) {
        if (typeof value === "number") {
            sum += value;
        }
    }

    return sum;
}

console.log(toSumMapPrices(mapTheThird));
console.log(toSumMapPrices(mapTheFourth));

// 5)
let arrayOfObj = [
    {name: 'orange', category: 'fruit'},
    {name: 'iPhone', category: 'mobile device'},
    {name: 'chair', category: 'household products'},
    {name: 'plum', category: 'fruit'},
    {name: 'Google Pixel', category: 'mobile device'}
];

function toGroupByCategory(arr) {
    const groupByCategoryObj = new Map();

    const arrOfNames = [];

    arr.forEach(({name, category}) => {
        if (groupByCategoryObj.has(!category)) {
            groupByCategoryObj.set(category, [name])
        }

        if (groupByCategoryObj.has(category)) {
            groupByCategoryObj.set(category, [...name])
        }

        arrOfNames.push(name);

        groupByCategoryObj.set(category, [name])
    })

    return groupByCategoryObj;
}

console.log(toGroupByCategory(arrayOfObj));