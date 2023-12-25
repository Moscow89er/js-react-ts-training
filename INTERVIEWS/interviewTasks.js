// Интервью с Данилом

// 1)
// Задача: Реализация функции для безопасного доступа к свойствам объекта

// Цель:
// Написать функцию getValues, которая позволяет безопасно получать значения
// из глубоко вложенных свойств объекта, предотвращая возникновение ошибок 
// при обращении к несуществующим путям.

// Вводные данные:
// Функция должна принимать два аргумента: объект (obj) и строку,
// представляющую путь к свойству (path).
// Путь к свойству будет представлен в виде строки, разделённой точками.
// Например, 'a.b.c' означает доступ к свойству obj.a.b.c.

// Требования к функции:
// 1) Функция должна корректно обрабатывать вложенные объекты и возвращать
// значение, соответствующее указанному пути.
// 2) Если какая-либо часть пути отсутствует в объекте, функция должна возвращать
// undefined, не вызывая ошибку.
// 3) Функция должна корректно обрабатывать случаи, когда значение по пути равно
// false, 0, "" (пустая строка), null, не возвращая undefined в этих случаях.


/*
function getValues(obj, path) {
    const keys = path.split('.');

    let current = obj;

    for (const key of keys) {
        if (current[key] === undefined) {
            return undefined;
        }
        current = current[key];
    }

    return current;
}
*/


// Пример использования
const obj = {
    a: {
        b: {
            c: 'd'
        },
        e: 'f'
    }
}

console.log(getValues(obj, 'a.b'));       // Должно вывести объект { c: 'd' }
console.log(getValues(obj, 'a.b.c.e.e')); // Должно вывести undefined
console.log(getValues(obj, 'a.b.c'));     // Должно вывести 'd'

// 2)
// Задача: Реализация функции аналога метода map

// Цель:
// Напишите функцию, которая имитирует поведение встроенного метода массивов
// map в JavaScript.

// Описание задачи:
// В JavaScript, метод map создает новый массив, заполненный результатами вызова
// переданной функции на каждом элементе исходного массива. Ваша задача -
// реализовать функцию, которая будет действовать аналогично методу map,
// без использования самого метода map.

// Требования к функции:
// 1) Функция должна принимать два параметра: исходный массив (arr)
// и функцию обратного вызова (callback).
// 2) Функция обратного вызова (callback) должна принимать три аргумента: текущий
// элемент массива, его индекс и сам массив.
// 3) Ваша функция должна возвращать новый массив, где каждый элемент является
// результатом вызова callback с соответствующим элементом исходного массива.
// 4) Не используйте метод Array.prototype.map для реализации этой функции.


/*
const map = function(arr, callback) {
    const resultedArr = [];

    for (let i = 0; i < arr.length; i++) {
        resultedArr[resultedArr.length++] = callback(arr[i], i, arr);
    }

    return resultedArr;
}
*/


// Пример использования
const arr = [1, 2, 3, 4, 5];

function sumFunction(element) {
    return element + 2;
}

const result = map(arr, sumFunction);
console.log(result); // Ожидаемый вывод: [3, 4, 5, 6, 7]


// 3)
// Задача: Реализация асинхронной функции с использованием Promise

// Цель:
// Написать функцию, использующую концепцию Promise для асинхронного
// выполнения кода.

// Описание задачи:
// Создайте функцию simulateAsyncAPI, которая имитирует асинхронный API-запрос.
// Функция должна принимать два аргумента: text (строка) и timeout (задержка в миллисекундах).
// Функция должна возвращать Promise, который исполняется успешно (resolve) с переданным текстом
// после задержки, указанной в timeout. Если timeout не является числом, Promise должен быть отклонен
// (reject) с соответствующим сообщением об ошибке.

// Требования к функции:
// Функция simulateAsyncAPI должна возвращать Promise.
// Promise должен переходить в состояние fulfilled с заданным текстом после времени, указанного в timeout.
// Если timeout не является числом, Promise должен переходить в состояние rejected с сообщением об ошибке.


/*
function simulateAsyncAPI(text, timeout) {
    return new Promise((resolve, reject) => {
        if (isNaN(timeout)) {
            reject(new Error("Timeout must be a number"));
        } else {
            setTimeout(() => {
                resolve(text);
            }, timeout);
        }
    });
}
*/


// Пример использования
simulateAsyncAPI('Hello, World!', 1000)
    .then(response => {
        console.log(response); // Выведет 'Hello, World!' после задержки в 1 секунду
    })
    .catch(error => {
        console.error(error);
    });

simulateAsyncAPI('Ошибка', 'не число')
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error); // Выведет ошибку, так как timeout не является числом
    });


// 4)
// Задача: Реализация функции для выбора случайного элемента из массива

// Цель:
// Написать функцию randomizeNums, которая выбирает и возвращает 
// случайный элемент из предоставленного массива.

// Описание задачи:
// Функция должна принимать один аргумент - массив чисел. Ваша задача - реализовать
// функцию таким образом, чтобы она безопасно выбирала и возвращала случайный элемент
// из этого массива. Важно убедиться, что каждый элемент массива имеет равные шансы быть выбранным.

// Требования к функции:
// 1) Функция randomizeNums должна принимать один параметр - массив чисел.
// 2) Функция должна возвращать элемент из массива, выбранный случайным образом.
// 3) Если массив пустой или не является массивом, функция должна корректно
// обрабатывать такие случаи, возможно, возвращая undefined или выбрасывая исключение.


/*
function randomizeNums(arr) {
    // Проверка, что arr действительно массив и не пустой
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;
    }

    // Выбор случайного индекса и возврат соответствующего элемента
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
*/


// Пример использования
const nums = [1, 2, 3, 4, 5];
const randomElement = randomizeNums(nums);
console.log(randomElement); // Выведет случайный элемент из nums, например, 3


// 5)
// Задача: Реализация функции для глубокого копирования объекта

// Цель:
// Написать функцию createDeepCopy, которая осуществляет глубокое
// копирование объекта. Функция должна уметь обрабатывать как простые,
// так и сложные объекты, включая массивы и вложенные объекты.

// Описание задачи:
// Глубокое копирование означает создание нового экземпляра объекта,
// где копируются все поля исходного объекта, включая вложенные объекты и массивы.
// В отличие от поверхностного копирования, изменения в глубокой копии не должны
// влиять на исходный объект и наоборот.

// Требования к функции:
// 1) Функция createDeepCopy должна принимать один параметр — объект, который нужно скопировать.
// 2) Функция должна корректно обрабатывать объекты, включая сценарии с вложенными 
// объектами и массивами.
// 3) Функция должна проверять тип входных данных и корректно обрабатывать не-объекты
// (например, примитивы, которые не нужно копировать глубоко).
// 4) Функция должна избегать копирования свойств, унаследованных через прототип.


/*
function createDeepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }

    let copy;

    if (Array.isArray(obj)) {
        copy = obj.map((item) => {
            return createDeepCopy(item)
        })
    } else {
        copy = {}
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = createDeepCopy(obj[key])
            }
        }
    }

    return copy;
}
*/


// Пример использования
const original = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4, { e: 5 }]
    }
};

const copy = createDeepCopy(original);
console.log(copy); // Должен вывести копию original, но как отдельный объект

// Проверка на глубокое копирование
original.b.c = 10;
console.log(copy.b.c); // Должно оставаться 2, а не изменяться на 10