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

console.log(sum(1)(2)(3).toString());

// b) решение для двух значений
function sum2(a) {
    return function(b) {
        return a + b;
    }
}

console.log(sum2(1)(2));

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
