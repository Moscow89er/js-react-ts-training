// closure.js
// 1)
// a)
function sum(initialNum) {
    let currentSum = initialNum;
    
    function add(nextNum = 0) {
        currentSum += nextNum;
        return add;
    }

    add.toString = function() {
        return currentSum;
    }

    return add;
}

// console.log(sum(1)(2)(3).toString());

// b) решение для двух значений
function sum2(a) {
    return function(b) {
        return a + b;
    }
}

// console.log(sum2(1)(2));

// 2)
function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    }
}

function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) );

// alert( arr.filter(inArray([1, 2, 10])) );

// 3)
function byField(key) {
    return (a, b) => a[key] > b[key] ? 1 : -1;
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

// console.log(users.sort(byField('name')));
// console.log(users.sort(byField('age')));
// console.log(users.sort(byField('surname')));

// 4)
function makeArmy() {
    let shooters = [];
  
    for (let i = 0; i < 10; i++) {
        let shooter = function() {
            alert( i );
        };
        shooters.push(shooter);
    }
    
    return shooters;
}
  
let army = makeArmy();


army[0]();
army[1]();
army[2]();

// 5)
function createCounter() {
    let counter = 0;

    return function() {
        return ++counter;
    }
}

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// 6)
function trackValues(arg) {
    let savedArr = arg;

    return function(arg) {
        savedArr.push(arg);

        return savedArr;
    }
}

// const tracker = trackValues([]);
// console.log(tracker(1));
// console.log(tracker(2));
// console.log(tracker(3));

// 7)
function createMultiplier(n) {
    let savedN = n;

    return function(n) {
        return savedN * n;
    }
}

// const multiplierByTwo = createMultiplier(2);
// const multiplierByThree = createMultiplier(3);

// console.log(multiplierByTwo(5));
// console.log(multiplierByThree(5));

// 8)
function generateUniqId() {
    let arrOfId = new Set();

    return function() {
        let newId;

        do {
            newId = Math.floor(Math.random() * 1000)
        } while (arrOfId.has(newId));
        
        arrOfId.add(newId);

        return newId;
    }
}

const newId = generateUniqId();
// console.log(newId());
// console.log(newId());
// console.log(newId());
