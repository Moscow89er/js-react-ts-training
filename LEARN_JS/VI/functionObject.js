// functionObject.js
// 1)
function makeCounter() {
    counter.count = 0;

    function counter() {
        return counter.count++;
    }

    counter.set = function(value) {
        if (value === undefined) value = 0;

        counter.count = value;
    }

    counter.decrease = function() {
        return counter.count--;
    }

    return counter;
}

// 2)
function makeCounterClosure() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = (value) => (value === undefined) ? count = 0 : count = value;

    counter.decrease = () => count--;

    counter.getCount = () => console.log(count);

    return counter;
}

// const counter = makeCounterClosure();
// counter();
// counter.set(5);
// counter.decrease();
// counter.getCount();

// 3)
function sum(initialSum) {
    let currentSum = initialSum;

    function add(nextNum = 0) {
        currentSum += nextNum;
        return add;
    }

    add.toString = function() {
        return currentSum;
    }

    return add;
}

alert(sum(1)(2)(5));