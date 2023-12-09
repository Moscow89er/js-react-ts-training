// 1)
function memoFib(n, cache = {}) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    if (cache[n]) {
        return cache[n];
    }

    cache[n] = memoFib(n - 1, cache) + memoFib(n - 2, cache);

    return cache[n];
}

console.log(memoFib(7));

// 2)
function memoFactorial(n, cache = {}) {
    if (n in cache) return cache[n];

    if (n === 1) return 1;

    cache[n] = n * memoFactorial(n - 1, cache);

    return cache[n];
}

console.log(memoFactorial(5));

// 3)
function factorial(n) {
    if (n === 1) return 1;

    return n * factorial(n - 1);
}

console.log(factorial(5));

// 4)
function tailReqursionFactorial(n, accumulator = 1) {
    if (n === 1) return accumulator;

    return tailReqursionFactorial(n - 1, n * accumulator);
}

console.log(tailReqursionFactorial(5));

// 5)
// a)
function sumOfTheRangeOfNum (n, cache = {}) {
    if (n in cache) return cache[n];

    if (n === 1) return 1;

    cache[n] = n + sumOfTheRangeOfNum(n - 1, cache);

    return cache[n];
}

console.log(sumOfTheRangeOfNum(5));

// b)
function tailSumOfTheRangeOfNum(n, accumulator = 0) {
    if (n === 0) return accumulator;

    return tailSumOfTheRangeOfNum(n - 1, n + accumulator);
}

console.log(tailSumOfTheRangeOfNum(5));