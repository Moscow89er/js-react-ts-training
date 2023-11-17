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

// for (let [key, value] of map) {
//     console.log(key, value);
// }

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

// console.log(toFilterMap(mapTheSecond));

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

// console.log(toReverseMap(mapTheSecond));

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

// console.log(toSumMapPrices(mapTheThird));
// console.log(toSumMapPrices(mapTheFourth));

// 5) Эту задачу нужно перерешать
let arrayOfObj = [
    {name: 'orange', category: 'fruit'},
    {name: 'iPhone', category: 'mobile device'},
    {name: 'chair', category: 'household products'},
    {name: 'plum', category: 'fruit'},
    {name: 'Google Pixel', category: 'mobile device'}
];

function toGroupByCategory(arr) {
    const groupByCategoryMap = new Map();

    arr.forEach(({name, category}) => {
        if (!groupByCategoryMap.has(category)) {
            groupByCategoryMap.set(category, [name]);
        } else {
            const existingCategory = groupByCategoryMap.get(category);
            existingCategory.push(name);
            groupByCategoryMap.set(category, existingCategory);
        }
    })

    return groupByCategoryMap;
}

// console.log(toGroupByCategory(arrayOfObj));

// 6)
const arrOfIntegers = [58,3,6,92,93,68,25,5,38,77,77,77,5,68,92,93];

function toCountInteger(arr) {
    const map = new Map();

    for (let num of arr) {
        if(!map.has(num)) {
            let count = 0;
            map.set(num, count = 1);
        } else {
            let existingCount = map.get(num);
            map.set(num, existingCount + 1);
        }        
    }

    return map;
}

// console.log(toCountInteger(arrOfIntegers));

// 7)
const map2 = new Map();

map2.set(obj, "somePropObj2");
map2.set(arr, "somePropArr2");
map2.set(123, 4567);
map2.set("key", "value2");

function toJoinMaps(firstMap, secondMap) {
    const joinedMap = new Map();

    for (let [key, value] of firstMap) {
        joinedMap.set(key, value);
    }

    for (let [key, value] of secondMap) {
        joinedMap.set(key, value);
    }

    return joinedMap;
}

// console.log(toJoinMaps(map, map2));

// SET

// 1)
function makeUniq(arr) {
    const uniqEl = new Set(arr);

    return [...uniqEl];
}

// console.log(makeUniq(arrOfIntegers));

// 2)
const arrOfIntegers2 = [58,3,6,68,5,38,5,68,12,4,7,5,8,0,4,3,2];

function identifyIntersection(firstArr, secondArr) {
    const firstSet = new Set(firstArr);
    const secondSet = new Set(secondArr);

    let resultedArr = [];

    firstSet.forEach((value) => {
        if (secondSet.has(value)) {
            resultedArr.push(value);
        }
    })

    return resultedArr;
}

// console.log(identifyIntersection(arrOfIntegers, arrOfIntegers2));

// 3)
function identifyTheDifference(firstArr, secondArr) {
    const firstSet = new Set(firstArr);
    const secondSet = new Set(secondArr);

    let resultedArr = [];

    for (let value of firstSet.values()) {
        if (!secondSet.has(value)) {
            resultedArr.push(value);
        }
    }

    return resultedArr;
}

// console.log(identifyTheDifference(arrOfIntegers, arrOfIntegers2));

// 4)
function performASubsetCheck(firstArr, secondArr) {
    const firstSet = new Set(firstArr);
    const secondSet = new Set(secondArr);

    for (let value of firstSet.values()) {
        if (!secondSet.has(value)) {
            return false;
        }
    }

    return true;
}

// console.log(performASubsetCheck(arrOfIntegers, arrOfIntegers2));

// 5)
function toFindTheSymmetricDifference(firstArr, secondArr) {
    const firstSet = new Set(firstArr);
    const secondSet = new Set(secondArr);

    const uniqArrOfFirstSet = [];
    const uniqArrOfSecondSet = [];

    for (let value of firstSet.values()) {
        if (!secondSet.has(value)) {
            uniqArrOfFirstSet.push(value);
        }
    }

    for (let value of secondSet.values()) {
        if (!firstSet.has(value)) {
            uniqArrOfSecondSet.push(value);
        }
    }

    const unionArr = uniqArrOfFirstSet.concat(uniqArrOfSecondSet);

    const unionSet = new Set(unionArr);

    return unionSet;
}

// console.log(toFindTheSymmetricDifference(arrOfIntegers, arrOfIntegers2));

// 6)
function toUnionSets(firstArr, secondArr) {
    const firstSet = new Set(firstArr);
    const secondSet = new Set(secondArr);

    const unionSet = new Set([...firstSet, ...secondSet]);

    return unionSet;
}

// console.log(toUnionSets(arrOfIntegers, arrOfIntegers2));

// 7)
function toFilter(arr, num) {
    const set = new Set();

    arr.forEach((value) => {
        if (typeof value === 'number' && value > num) {
            set.add(value);
        }
    }) 

    return set;
}

// console.log(toFilter(arrOfIntegers, 7));

// 8)
const notUniqArrOfObj = [
    {id: 1, userName: "Nick"},
    {id: 2, userName: "Mick"},
    {id: 3, userName: "Mike"},
    {id: 4, userName: "Nicky"},
    {id: 1, userName: "Nick"},
    {id: 2, userName: "Mick"},
    {id: 3, userName: "Mike"},
    {id: 4, userName: "Nicky"},
    {id: 3, userName: "Mike"},
    {id: 4, userName: "Nicky"},
]

function getUniqArrOfObj(arr) {
    const set = new Set();

    const resultedArr = [];

    for (let obj of arr) {
        set.add(obj.id);
    }

    for (let obj of arr) {
        console.log(obj);

        if (set.has(obj.id) === obj.id) {
            resultedArr.push(obj);
        }
    }

    return resultedArr;
}

console.log(getUniqArrOfObj(notUniqArrOfObj));