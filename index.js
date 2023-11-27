// closure.js
// 1)
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

// 2)
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

// 3)
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

// recursion.js
// 1)
function factorial(n) {
    if (n === 0) return 1;

    return n * factorial(n - 1);
}

// console.log(factorial(5));

// 2)
function fibonacci(n) {
    if (n === 0 || n === 1) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(7));

// b)
function fibonacciCircle(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

console.log(fibonacciCircle(7));

// 3)
function traverseTree(node, action) { 
    if (!node) return;

    action(node); // node — текущий узел дерева; функция, которую нужно применить к каждому узлу

    // Этот код предполагает, что структура дерева представлена в виде объектов,
    // где каждый узел содержит ссылки на своих детей (если они есть) в массиве children
    if (node.children) {
        node.children.forEach(child => traverseTree(child, action));
    }
}