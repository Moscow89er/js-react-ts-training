// callApplyDecorators

// Прозрачное кэширование
// Упомянутый выше кеширующий декоратор не подходит для работы с методами объектов.
function slow(x) {
    alert(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);

        cache.set(x, result);
        return result;
    }
}

slow = cachingDecorator(slow);

// alert(slow(1));
// alert("Again: " + slow(1));

// alert(slow(2));
// alert("Again: " + slow(2));

// Применение «func.call» для передачи контекста.
// 1)
function sayHi() {
    alert(this.name);
}

let user = { name: "Nick" };
let admin = { name: "Mick" };

// sayHi.call(user);
// sayHi.call(admin);

// 2)
function say(phrase) {
    alert(this.name + ': ' + phrase);
}

// say.call(user, "Hello");

let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        alert("Called with " + x);
        return x * this.someMethod();
    }
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func.call(this, x);
        cache.set(x, result);
        return result;
    }
}

worker.slow = cachingDecorator(worker.slow);

// alert(worker.slow(2));
// alert(worker.slow(2));

// Переходим к нескольким аргументам с «func.apply».
const newWorker = {
    slow(min, max) {
        alert(`Called with ${min}, ${max}`);
        return min + max;
    }
}

function advancedCachingDecorator(func, hash) {
    let cache = new Map();

    return function() {
        const key = hash(arguments);
        
        if (cache.has(key)) return cache.get(key);

        let result = func.apply(this, arguments);

        cache.set(key, result);

        return result;
    }
}

function hash(args) {
    return args[0] + ',' + args[1];
}

newWorker.slow = advancedCachingDecorator(newWorker.slow, hash);

// alert( newWorker.slow(3, 5) ); // работает
// alert( "Again " + newWorker.slow(3, 5) ); // аналогично (из кеша)

// Передача всех аргументов вместе с контекстом другой функции
// называется «перенаправлением вызова» (call forwarding).
let wrapper = function() {
    return func.apply(this.arguments);
}

// Заимствование метода
function borrowingMethod() {
    alert( [].join.call(arguments) ); // *
}

// borrowingMethod(1,2,3,4,5);

// 1)
function work(a, b) {
    alert( a + b ); // произвольная функция или метод
}

function spy(func) {

    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}

work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//     alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }








// Дайте функции понятное название и добавьте такие правила: нужно проверять, является ли цена числом (при помощи typeof), суммируем только положительные цены,
// а если находим не число или отрицательное число, то выдаем ошибку при помощи throw.
function calculateSum(cart) {
let sum = 0;

for (let { price } of cart) {
    if (typeof price === "number" && price > 0) {
    sum += price;
    } else {
    throw new Error("Ошибка!")
    }
}

return sum;
}

const items = [{ price: 10 }, { price: 20 }, { price: 30 }, { price: 40 }];
// console.log(calculateSum(items));

// Возьмите эту структуру данных и для нее напишите функцию, которая дополняет ее товарами по примеру тех, которые уже есть.
// Функция принимает название каталога, название и стоимость товара. Если каталога не существует, то его необходимо создать и добавить туда товар.
// Также сделать проверку на ввод числа, функция должна принимать числа даже в строке, но при вводе строки выводить NaN.
const purchase = {
Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 }
],
Textile: [
    { name: 'Bag', price: 50 },
    { name: 'Laptop', price: 100 }
],
}

purchase.addToCart = function(catalog, name, price) {
    if (!isFinite(price)) {
        throw new Error("Введите число!")
    }

    if (this[catalog]) {
        this[catalog].push({ name, price });
    } else {
        this[catalog] = [{ name, price }];
    }
}

purchase.addToCart('Textile', 'eeee', '11');
// console.log(purchase);

// Напишите функцию find, которая будет проходить по структуре из предыдущей задачи и находить товар по его имени (проверяя все группы товаров).
// Имена могут повторяться, но на этот раз нас интересует только первый товар,у которого имя совпало.
function findFirst(obj, searchPrompt) {
    for (let catalog in obj) {
        for (let item of obj[catalog]) {
            if (item.name === searchPrompt) {          
                console.log(item);
                return;
            }
        }
    }
}

// const resultFirst = findFirst(purchase, 'Laptop'); //{ name: 'Laptop', price: 1500 }
// console.log(resultFirst);

// Теперь расширим предыдущую задачу: нужно так изменить функцию find, чтобы она возвращала массив,
// содержащий все товары с указанным именем. Если ни одного не нашли, то пустой массив.
function findAll(obj, searchPrompt) {
    const searchResult = [];

    console.log(obj);

    for (let catalog in obj) {
        if (obj.hasOwnProperty(catalog) && Array.isArray(obj[catalog])) {
            for (let item of obj[catalog]) {
                if (item.name === searchPrompt) {
                    console.log(item);
                    searchResult.push(item);
                }
            }
        }
    }

    return searchResult;
}


// const resultAll = findAll(purchase, 'Laptop');
// console.log(resultAll);

// Найти вес всех вещей, цена которых более 80 и количество менее 7
const foods = [
    { name: 'Паста болоньезе', weight: 350, price: 33, quanity: 3 },
    { name: 'Спаггети', weight: 350, price: 56, quanity: 8 },
    { name: 'Суп', weight: 400, price: 68, quanity: 16 },
    { name: 'Пицца', weight: 675, price: 139, quanity: 30 },
    { name: 'Молоко', weight: 1600, price: 339, quanity: 8 },
    { name: 'Овощи', weight: 740, price: 159, quanity: 1 },
    { name: 'Сыр', weight: 230, price: 99, quanity: 4 },
    { name: 'Мука', weight: 230, price: 69, quanity: 5 }
];

function findTotalWeight(arr, minPrice, maxQuantity) {
    const filteredWeights = [];

    for (let obj of arr) {
        if (obj.price > minPrice && obj.quanity < maxQuantity) {
            filteredWeights.push(obj.weight);
        }
    }

    return filteredWeights.reduce((acc, cur) => acc + cur, 0);
}

console.log(findTotalWeight(foods, 80, 7));

// С бекенда приходят сл данные, напишите функцию, которая меняет его структуру (пример ниже)
const employees = [
{
    name: 'Ilya',
    gender: 'male',
    year: '1998'
},
{
    name: 'Maxim',
    gender: 'male',
    year: '1993'
},
{
    name: 'Lena',
    gender: 'female',
    year: '2001'
},
{
    name: 'Masha',
    gender: 'female',
    year: '1999'
},
{
    name: 'Ivan',
    gender: 'male',
    year: '2003'
}
];

/* 
{
"male": [{
    "name": "Ilya",
    "year": "1998"
    }, 
    {
    "name": "Maxim",
    "year": "1993"
    }, 
    {
    "name": "Ivan",
    "year": "2003"
    }],

"female": [{
    "name": "Lena",
    "year": "2001"
    }, 
    {
    "name": "Masha",
    "year": "1999"
    }]
}
*/

function sortGender(arr) {
    const resultedObj = {
        male: [],
        female: []
    };

    for (let obj of arr) {
        console.log(obj);

        const {name, gender, year} = obj;

        if (gender === 'male') {
            resultedObj['male'].push({name, year});
        } else if (gender === 'female') {
            resultedObj['female'].push({name, year});
        }
    }

    return resultedObj;
}

console.log(sortGender(employees))