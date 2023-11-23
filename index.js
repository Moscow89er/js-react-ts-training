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

const printList = function(list) {
    // const entries = Object.entries(list);

    // console.log(entries);

    // for (let item of entries) {
    //     console.log(item[1]);

    //     let nestedItems = Object.entries(item);
    //     for(let [{key, val}] of nestedItems) {
    //         console.log([{key, val}]);
    //     }
    // }
}

printList(list2);