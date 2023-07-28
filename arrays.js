let cars = ['Honda', 'Kia', 'Toyota', 'BMW', 'Audi', 'VW', 'Hummer'];
let numbers = [1,1,1,2,3,4,2,2,3,5,7,8,9,7,6,5,4,4,3,2,2,3,5,6,7];
let nums = [1,4,65,43,23,2,55,32,78,1,5,3]

// Как получить рандомный элемент массива
let randNum = numbers[Math.floor(Math.random() * (numbers.length))]

console.log(randNum)

// Как заполнить массив данными
let newArr = new Array(7).fill(7)

// Как найти индекс последнего входенияы
let lastIndex = nums.lastIndexOf(1)

// Как сделать реверс массива
let reversedCars = cars.reverse()

// Как можно найти одинаковые элементы в двух разных массивах
// Пример 1
// let numbersSet = new Set(numbers)
// let commonNumbers = nums.filter(num => numbersSet.has(num))
// let sameNumbers = [...new Set(commonNumbers)]

// Пример 2
let sameNumbers = [...new Set(numbers)].filter(item => nums.includes(item))

// Методы очищения массива
// Пример 1
// cars = [];

// Пример 2
// numbers = null;

// Пример 3
numbers.splice(0, numbers.length)

// Как получить доступ к ключи объекта, если он находится в массиве
let newCars = [
    {car: 'Kia', color: 'Black'},
    {car: 'Hummer', color: 'Pink'},
    {car: 'Ford', color: 'Blue'},
    {car: 'Skoda', color: 'Green'},
]

let car_name = Array.from(newCars, ({car}) => car)

// ложные значения в JS
let arr = [0, 'green', null, 2, undefined, true, NaN, false, ''];

// Перебор массива не используя метод Map
let sortedArr = numbers.forEach((element) => {
    return element * 2
})

// Задача нужно удалить определенный элементы массива
cars.splice(0, 2, 'Tesla', 'Жигуленок')

// Задача удалить повторяющиеся элементы из массива
// // Решение 1
// let uniqNums = [...new Set(numbers)];

//Решение 2
let uniqNums = Array.from(new Set(numbers))

// Задача вернуть из массива только trufy значения
let trufy = arr.filter(Boolean);

// let trufy = arr.filter((element) => {
//     return Boolean(element) === true;
// })

// Задача конвертировать массив в объект
let obj = {...cars}

// Задача сумма всех элементов
let sum = numbers.reduce((acc, cur) => acc + cur, 0)