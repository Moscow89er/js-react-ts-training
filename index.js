function memoizedFibonacci() {
  let cache = {};

  function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    if (cache[n]) {
      return cache[n];
    }

    const result = fib(n - 1) + fib(n - 2);
    cache[n] = result;
    return result;
  }

  return fib;
}

const fibonacci = memoizedFibonacci();

console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(1000));