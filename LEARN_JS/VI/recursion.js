// recursion.js
let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
};

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(department)) {
            console.log(subdep);
            sum += sumSalaries(subdep);
        }
        return sum;
    }
}

// console.log(sumSalaries(company));

// Связанный список
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4, 
                next: null
            }
        }
    }
};

// или

const secondList = { value: 1 };
secondList.next = { value: 2 };
secondList.next.next = { value: 3 };
secondList.next.next.next = { value: 4 };
secondList.next.next.next.next = null;

// Разделение списка на несколько частей
const thirdList = secondList.next.next;
secondList.next.next = null;

// console.log(thirdList);
// console.log(secondList);

// Объединение
secondList.next.next = thirdList;

// Добавление нового элемента в список
list = {value: "newFirstValue", next: list};

// Удаеление элемента из середины списка
list.next.next = list.next.next.next;

// console.log(list);


// 1)
// a)
function sumTo(n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum += i;
    }

    return sum;
};

// console.log(sumTo(5));

//  b)
function sumTo2(n) {
    if (n === 1) return 1;
    
    return n + sumTo2(n - 1);
}

// console.log(sumTo2(5));

// c)
function sumTo3(n) {
    return n * (n + 1) / 2;
}

// console.log(sumTo3(5));

// 2)
const factorial = function(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

// console.log(factorial(2));

// Базис рекурсии 0
const factorial2 = function(n) {
    return n ? n * factorial2(n - 1) : 1;
}

// console.log(factorial2(5));

// 3)
// a)
const fibonacci = function(n) {
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(3));
// console.log(fibonacci(7));

// b) Самоя оптимальная версия по производительности
const fibonacci2 = function(n) {
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

// console.log(fibonacci2(3));
// console.log(fibonacci2(7));
// console.log(fibonacci2(77));

// c)
const fibonacci3 = function(n) {
    return n <= 1 ? n : fibonacci3(n - 1) + fibonacci3(n - 2);
}

// console.log(fibonacci3(3));
// console.log(fibonacci3(7));

// 4)
const list2 = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

const printListCycle = function(list) {
    let template = list;

    while (template) {
        console.log(template.value);
        template = template.next;
    }
}

// printListCycle(list2);

const printListRecursion = function(list) {
    if (list === null) return;
    
    console.log(list.value);
    printListRecursion(list.next);
}

// printListRecursion(list2);

// 4)
const printReversedListCycle = function(list) {
    let template = list;
    let arr = []

    while (template) {
        arr.push(template.value);
        template = template.next;
    }

    arr.reverse().forEach((item) => console.log(item));
}

// printReversedListCycle(list2);

const printReversedListRecursion = function(list, arr) {
    let recursionArr = arr;

    if(!recursionArr) {
        recursionArr = [];
    }

    if (list === null) {
        arr.reverse().forEach(item => console.log(item));
        return;
    };

    recursionArr.push(list.value);
    
    printReversedListRecursion(list.next, recursionArr);
}

// printReversedListRecursion(list2);

function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }

    console.log(list.value);
}

// printReverseList(list2);

// 5)
let arrOfNums = [1,2,3,4,5];

// a)
function toSumRecursion(arr, sum) {
    let sumOfRecursion = sum;

    let slicedArr = arr.slice();

    if (!sumOfRecursion) {
        sumOfRecursion = 0;
    }

    if (arr.length === 0) {
        return sumOfRecursion;
    }

    let a = slicedArr[0];

    sumOfRecursion += a;

    slicedArr.shift();

    return toSumRecursion(slicedArr, sumOfRecursion);
}

// console.log(toSumRecursion(arrOfNums));

// b) Оптимизированное решение
function toSum(arr, sum = 0) {
    if (arr.length === 0) return sum;

    return toSum(arr.slice(1), sum += arr[0]);
}

// console.log(toSum(arrOfNums));

// 6)
const findFactorial = function(num) {
    if (num === 0) return 1;

    return num * findFactorial(num - 1);
}

// console.log(findFactorial(7));

// 7)
const findFibonacci = function(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;

    return findFibonacci(num - 1) + findFibonacci(num - 2);
}

// console.log(findFibonacci(2));
// console.log(findFibonacci(3));
// console.log(findFibonacci(7));

const findFibonacciCycle = function(num) {
    let a = 0;
    let b = 1;

    for (let i = 2; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

// console.log(findFibonacciCycle(3));
// console.log(findFibonacciCycle(7));
// console.log(findFibonacciCycle(77));

// 8)
const str = "Строка наоборот";

const toReverseString = function(str, arr = []) {
    const firstSymbol = str.slice(0, 1);

    if (str.length === 0) {
        return arr.reverse().join('');
    };

    arr.push(firstSymbol);

    return toReverseString(str.slice(1), arr);
}

console.log(toReverseString(str));

// 9)
const hanoiTower = {
    kernel1: ["bigDisk", "mediumDisk", "smallDisk"],
    kernel2: [],
    kernel3: []
}

const puzzleSolutionOfHanoiTower = function(obj) {
    obj.kernel2.push(obj.kernel1.pop());
    obj.kernel3.push(obj.kernel1.pop());
    obj.kernel1.push(obj.kernel2.pop());
    obj.kernel2.push(obj.kernel3.pop());
    obj.kernel2.push(obj.kernel1.pop());
    obj.kernel3.push(obj.kernel1.pop());
    obj.kernel1.push(obj.kernel2.pop());
    obj.kernel3.push(obj.kernel2.pop());
    obj.kernel3.push(obj.kernel1.pop());

    return obj;
}

// console.log(puzzleSolutionOfHanoiTower(hanoiTower));

function moveDisk(tower, from, to) {
    const disc = tower[from].pop();
    tower[to].push(disc);
}

function solveHanoiTower(tower, numDisks, sourse, target, auxiliary) {
    if (numDisks === 1) {
        moveDisk(tower, sourse, target);
        return;
    }

    solveHanoiTower(tower, numDisks - 1, sourse, auxiliary, target);
    moveDisk(tower, sourse, target);
    solveHanoiTower(tower, numDisks - 1, auxiliary, target, sourse);
}

solveHanoiTower(hanoiTower, hanoiTower.kernel1.length, 'kernel1', 'kernel3', 'kernel2');
console.log(hanoiTower);

// 10)
function factorial(n) {
    if (n === 0) return 1;

    return n * factorial(n - 1);
}

// console.log(factorial(5));

// 11)
function fibonacci(n) {
    if (n === 0 || n === 1) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(7));

// 12)
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

// console.log(fibonacciCircle(7));

// 13)
function traverseTree(node, action) { 
    if (!node) return;

    action(node); // node — текущий узел дерева; функция, которую нужно применить к каждому узлу

    // Этот код предполагает, что структура дерева представлена в виде объектов,
    // где каждый узел содержит ссылки на своих детей (если они есть) в массиве children
    if (node.children) {
        node.children.forEach(child => traverseTree(child, action));
    }
}

function recFunc(n) {
    if (n === 0) return 0;

    return n + recFunc(n - 1);
}


// console.log(recFunc(10));