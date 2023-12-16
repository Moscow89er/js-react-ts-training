// tryCatch.js

// 1)
const num = +prompt('Enter positive integer?', 35);

let diff, result;

function fib(n) {
    if (n < 0 || Math.trunc(n) != n) {
        throw new Error("The entered number must be not a negative and not a fractial")
    }

    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const start = Date.now();

try {
    result = fib(num);
} catch(e) {
    result = 0;
} finally {
    diff = Date.now() - start;
}

console.log(result || "An error occurred");
console.log(`Execution took ${diff}ms`);
