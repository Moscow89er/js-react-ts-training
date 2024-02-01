// Основы JS

// Что происходит, когда пользователь вбибает url в браузер и нажимает enter?
// Браузер анализирует URL,проверяет кэш, делает DNS-запрос,
// устанавливает TCP-соединение, отправляет HTTP-запрос,
// получает и обрабатывает ответ, загружает ресурсы,
// рендерит страницу и ожидает действий пользователя.

// Замыкания

// // Задача 1
// function counter() {
//     let count = 0;
//     return function myFunc() {
//         count += 1;
//         return count;
//     }
// }

// const myCounter = counter();
// console.log(myCounter()); // 1
// console.log(myCounter()); // 2
// console.log(myCounter()); // 3

// // Задача 2
// function calc(num) {
//     const obj = {
//         add: (num2) => {
//             return num + num2;
//         },
//         subtract: (num2) => {
//             return num - num2;
//         },
//         multiply: (num2) => {
//             return num * num2;
//         },
//         get: () => {
//            return num; 
//         }
//     };
//     return obj;
// }

// const calculator = calc(10);
// console.log(calculator.add(5));      // 10 + 5 = 15
// console.log(calculator.subtract(2)); // 10 - 2 = 8
// console.log(calculator.multiply(4)); // 10 * 4 = 40
// console.log(calculator.get());       // Вернет текущее значение: 10

// // Задача 3
// function createStorage() {
//     const data = [];
//     const storage = {
//         addItem: (item) => {
//             data.push(item);
//         },
//         removeItem: (item) => {
//             const index = data.indexOf(item); // сохраняем значение значения индекса item в переменную
//             if (index !== -1) {
//                 data.splice(index, 1);
//             }
//         },
//         getItems: () => {
//             return data;
//         }
//     }
//     return storage;
// }

// const storage = createStorage();
// storage.addItem('apple');
// storage.addItem('banana');
// console.log(storage.getItems()); // ['apple', 'banana']

// storage.removeItem('apple');
// console.log(storage.getItems()); // ['banana']


// Прототипное наследование

// // Задача 1

// class Animal {
//     constructor (name, type) {
//         this.name = name;
//         this.type = type;
//     }
//     makeSound() {
//         console.log('Звук неопределен');
//     }
// }

// class Dog extends Animal {
//     constructor(name, type, breed) {
//         super(name, type);
//         this.breed = breed;
//     }
//     makeSound() {
//         console.log('Гав-гав');
//     }
// }

// const animal = new Animal('Лев', 'хищник');
// console.log(animal.name);       // 'Лев'
// console.log(animal.type);       // 'хищник'
// console.log(animal.makeSound()); // 'Звук неопределен'

// const dog = new Dog('Барсик', 'домашнее животное', 'Такса');
// console.log(dog.name);          // 'Барсик'
// console.log(dog.type);          // 'домашнее животное'
// console.log(dog.breed);         // 'Такса'
// console.log(dog.makeSound());   // 'Гав-гав'

// Ключевое слово this, определяющее контекст

// Задача 1
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     introduce () {
//         console.log(`Меня зовут ${this.name} и мне ${this.age}.`);
//     }
// }

// const nick = new Person('Nick', 33);
// nick.introduce();

// Задача 2
// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     };
    
//     getInfo() {
//         console.log(`Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}.`);
//     }
// }

// const warAndPeace = new Book('Война и мир', 'Лев Толстой', 1867);
// warAndPeace.getInfo();

// apply, call, bind

// Задача 1
// function sum() {
//     const args = Array.from(arguments); // преобразуем псевдо-массив в массив

//     const totalSum = args.reduce((acc, curr) => acc + curr, 0);

//     return totalSum;
// }

// const numbers = [1, 2, 3, 3, 4];
// const result = sum.apply(null, numbers);

// console.log(result);

// // Задача 2
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         console.log(`Меня зовут ${this.name} и мне ${this.age}.`);
//     }
// }

// const nick = new Person ('Nick', 33);
// Person.prototype.sayHello.apply(nick);

// // Задача 3
// function multiply(a, b) {
//     return a * b;
// }

// const double = multiply.bind(null, 2);

// console.log(double(1));

// Arrow function, function expression, function declaration

// Задача 1
// const calculateSquare = function(num) {
//     return num * num;
// }

// console.log(calculateSquare(4));

// // Задача 2
// getFullName = (firstName, lastName) => firstName + ' ' + lastName;

// console.log('Nick', 'Stone');

// // Задача 3
// function findMax(arr) {
//     return arr.sort((a, b) => +b - +a)[0];
// }

// const arr = [1, 2, 14, 15, 1, 8, 3, 2];

// console.log(findMax(arr));


// Создание копии объектов

// Задача на создание неполной копии объектов
// const person = {
//     name: 'Nick',
//     age: 33,
//     gender: 'man'
// }

// createShallowCopy = (sourceObject, ...propsToCopy) => {
//     copy = {};

//     propsToCopy.forEach(prop => {
//         if (sourceObject.hasOwnProperty(prop)) {
//             copy[prop] = sourceObject[prop];
//         }
//     })

//     return copy;
// }

// createShallowCopy(person, 'name', 'age');

// console.log(copy);

// const data = {
//     person,
//     copy,
//     arr: [1, 2, 3, 5]
// }

// let deepCopy = JSON.parse(JSON.stringify(data)); 

// console.log(deepCopy);

// Создание полной копии объекта
// function createDeepCopy(sourceObject) {
//     if (typeof sourceObject !== 'object' || sourceObject === null) {
//         return sourceObject; // Базовый случай: 
//     }

//     let copy;

//     if (Array.isArray(sourceObject)) {
//         copy = sourceObject.map(item => createDeepCopy(item)); // рекурсивное копирование массива
//     } else {
//         copy = {};
//         for (let key in sourceObject) { // цикл for ... in перебирает все перечисляемые свойства объекта и его прототипа
//             if (sourceObject.hasOwnProperty(key)) {
//                 copy[key] = createDeepCopy(sourceObject[key]); // рекурсивное копирование свойств
//             }
//         }
//     }

//     return copy;
// }

// const data = {
//     person: { name: 'Nick', age: 33, gender: 'man' },
//     copy: { name: 'John', age: 25, gender: 'man' },
//     arr: [1, 2, { nested: 'value' }]
// };

// const deepCopy = createDeepCopy(data);
// console.log(deepCopy);


// Ассинхронные операции

// // Задача 1
// function delayedMessage() {
//     setTimeout(() => {
//         console.log('Hello, world;');
//     }, 2000)
// }

// delayedMessage();

// // Задача 2
// async function fetchUserData() {
//     try {
//         const response = await fetch('http://example.com/data', {
//             method: 'GET',
//             headers: {
//                 authorization: 'some-code',
//                 'Content-Type': 'aplication/json'
//             },
//             body: JSON.stringify({
//                 id: data._id
//             })
//         });
//         const data = await response.json();
//         return data;
//     } catch(err) {
//         console.error(err);
//     }
// }

// // Задача 3
// function getRandomNumber() {
//     const promise = new Promise((resolve, reject) => {
//         let random = () => Math.floor(Math.random() * 10);
//         try {
//             setTimeout(() => {
//                 resolve(random());
//             }, random() * 1000)
//         } catch (err) {
//             reject(err);
//         }
//     });
    
//     return promise;
// }

// getRandomNumber()
//     .then(number => console.log(number))
//     .catch(error => console.error(error));

// // Задача 4
// async function getSumOfRandomNumbers() {
//     try {
//         let result = 0;
//         let number = await getRandomNumber(); // получаем число и сохраняем его в переменную
//         result = number + number;
//         return result;
//     } catch(err) {
//         throw err; // выбрасываем ошибку
//     }
// }

// getSumOfRandomNumbers()
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

// // Задача 6
// async function fetchUserDataById (userId, token) {
//     try {
//         const response = await fetch(`https://example.com/data?id=${userId}`, {
//             method: 'GET',
//             headers: {
//                 authorization: token,
//                 'Content-Type': 'aplication/json'
//             }
//         });
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         throw error; // передаем ошибку дальше для обработчиков
//     }
// }

// // Задача 8
// fetchAndProcessData = async (userId, token) => {
//     try {
//         const data = await fetchUserDataById(userId, token);
//         console.log(data);
//     } catch (err) {
//         console.error(err)
//     }
// }

// const token = 'your-auth-token';
// const userId = '12931293929';

// fetchAndProcessData(userId, token);


// // Задача 5
// function delayedPromise(message) {
//     return new Promise (res => { // reject не нужен по причине того, что если не отработает таймер, то promice сам перехватит ошибку
//         setTimeout(() => {
//             res(message);
//         }, 3000);
//     }); 
// }

// delayedPromise('Nick')
//     .then(message => console.log(message))
//     .catch(err => console.log(err));

// // Задача 7
// const printDelayedMessage = async function (message) {
//     try {
//         await delayedPromise(message);
//         console.log(message);
//     } catch (err) {
//         throw err;
//     }
// }

// printDelayedMessage('Hello, world!')
//     .then()
//     .catch(err => console.error(err));

// Генераторы в JS

// Задание 1
// function* generator(arr, threshold) {
//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > threshold) {
//             yield result += arr[i]; // ключевое слово для использования функции генератора
//         }
//     }

//     return result;
// }

// const arr = [1, 3, 5, 6, 7, 9];
// const threshold = 5; // пороговое значение, функция будет возвращать сумму только тех чисел, которые больше него
// const gen = generator(arr, threshold);

// console.log(gen.next());
// console.log(gen.next());

// Задание 2
// const propsGenerator = function* (obj, threshold) {
//     if (typeof obj !== 'object') {
//         yield obj;
//     }

//     for (let key in obj) {
//         if (obj.hasOwnProperty(key) && key[0] === threshold) {
//             yield obj[key];
//         }
//     }
// }

// const threshold = 'a';

// const obj = {
//     name: 'Nick',
//     age: 33,
//     greet: () => {
//         console.log('Hello, world!');
//     }
// };

// const gen = propsGenerator(obj, threshold);
// console.log(gen.next());

// Задача 3
// const toInfiniteNumberGenerator = function* (num, step) {
//     if (typeof num !== 'number' || typeof step !== 'number' || isNaN(num) || isNaN(step)) {
//         throw new Error('num and step should be numbers.');
//     }

//     let result = num;
//     for (let i = 0; i <= Infinity; i++) {
//         yield result += step;
//     }
// }

// const num = 5;
// const step = 10;

// const gen = toInfiniteNumberGenerator(num, step);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


// Методы map, filter, reduce

// Задача 1
// function double(arr) {
//     return arr.map(item => {
//         if (!isNaN(item)) {
//             return item * 2;
//         } else {
//             throw Error ('В массиве должны быть только числа!');
//         }
//     })
// }

// const arr = [12, 2, 442, 132, 231];

// console.log(double(arr));

// Задача 2
// function positiveNums (arr) {
//     return arr.filter((item) => {
//         if (typeof item !== 'number') {
//             throw Error ('В массиве должны быть только числа!');
//         }

//         return item > 0;
//     })
// }

// const arr = [12, 2, -442, 132, -231];

// console.log(positiveNums(arr));

// // Задача 3
// function sum(arr) {
//     return arr.reduce((acc, cur) => acc + cur, 0);
// }

// console.log(sum(arr));

// Задача 4
// const usageTripleFuncs = function (arr) {
//     return arr
//         .map(number => number * 2)
//         .filter(number => number > 5)
//         .reduce((acc, cur) => acc + cur, 0);
// }

// const arr = [12, 2, -42, 132, -21, 55, 84, 21, 13, 28];

// console.log(usageTripleFuncs(arr));

// Деструктуризация

// // Задача 1
// const person = { name: 'John', age: 30, gender: 'male' };

// const { name, age, gender } = person;

// const numbers = [10, 20, 30, 40, 50];

// const [first, second, third, fourth, fifth] = numbers;

// // Задача 2
// const student = {
//     name: 'Alice',
//     age: 25,
//     course: {
//       subject: 'Math',
//       teacher: 'Mr. Smith'
//     }
// };

// const {
//     name,
//     age,
//     course: {
//         subject,
//         teacher
//     }
// } = student;

// Задача 3
// const data = [
//     { name: 'John', age: 30 },
//     { subject: 'Math', score: 85 },
//     { city: 'New York', population: 1000000 }
// ];

// const [
//     { name, age },
//     { subject, score },
//     { city, population }
// ] = data;

// Функции высшего порядка

// Задание 1
// function calculate (a, b, operation) {
//     return operation(a, b);
// }

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// console.log(calculate(10, 5, multiply));
// console.log(calculate(12, 6, subtract));
// console.log(calculate(15, 12, add));

// Задача 2
// const students = [
//     { name: 'Alice', math: 90, english: 85, history: 92 },
//     { name: 'Bob', math: 75, english: 80, history: 78 },
//     { name: 'Charlie', math: 88, english: 92, history: 95 },
// ];

// function getTopStudents (students, calculateAverage, grade) {
//     return students
//         .filter(student => calculateAverage(student) > grade)
//         .map(student => student.name)
// }

// function calculateAverage(student) {
//     const { math, english, history } = student;
//     return ( math + english + history ) / 3;
// };

// const topStudents = getTopStudents(students, calculateAverage, 85);

// console.log(topStudents);

// Задача 3
// const products = [
//     { name: 'Футболка', price: 500, quantity: 3 },
//     { name: 'Джинсы', price: 1200, quantity: 2 },
//     { name: 'Кроссовки', price: 2500, quantity: 1 },
//     { name: 'Рюкзак', price: 800, quantity: 4 },
// ];

// function getTotalPrice(products) {
//     return products.reduce((total, product) => total + product.price * product.quantity, 0);
// }

// const totalPrice = getTotalPrice(products);

// console.log(totalPrice);

// // Задача 4
// const library = [
//     { title: 'Война и мир', author: 'Лев Толстой', pages: 1225 },
//     { title: 'Преступление и наказание', author: 'Федор Достоевский', pages: 671 },
//     { title: 'Гарри Поттер и философский камень', author: 'Дж. К. Роулинг', pages: 309 },
//     { title: 'Мастер и Маргарита', author: 'Михаил Булгаков', pages: 438 },
// ];

// const getTotalPages = function (library) {
//     return library.reduce((total, book) => total + book.pages, 0);
// }

// const totalPages = getTotalPages(library);

// console.log(totalPages);


// Задачи на использование функций обратного вызова

// // Задача 1
// const sortArray = function (arr, fn) {
//     return fn(arr);
// }

// const compareFunc = function (arr) {
//     return arr.sort((a, b) => a - b);
// }

// const arr = [1, 2, 77, 14, -12, 1.21, 13, 34, -10];

// console.log(sortArray(arr, compareFunc));

// Задача 2
// filterArray = (arr, fn) => fn(arr);

// predicateFunc = (arr) => arr.filter(num => num > 3);

// const arr = [1, 2, 77, 14, -12, 1.21, 13, 34, -10];

// console.log(filterArray(arr, predicateFunc));

// // Задача 3
// function getDataFromServer (data, fn) {
//     setTimeout(() => fn(data), 2000);
// }

// function callbackFunc(data) {
//     console.log(data);
// }

// getDataFromServer('100500', callbackFunc);

// localStorage и sessionStorage
// // Задача 1
// saveToSessionStorage = (key, value) => {
//     sessionStorage.setItem(key, JSON.stringify(value));
// }

// getFromSessionStorage = (key) => {
//     const value = sessionStorage.getItem(key);
//     return value;
// }

// saveToSessionStorage(1, { name: 'Nick', age: 33 });

// const storedValue = getFromSessionStorage(1);
// console.log(storedValue);


// Задача на работу с методами JSON
// const postData = async function (data) {
//     try {
//         const response = fetch('https://example.com/data', {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json',
//             },
//             body: JSON.stringify(data)
//         });

//         if (!response.ok) {
//             throw new Error('Ошибка при отправке данных на сервер');
//         }
//         const responseData = await response.json();
//         console.log('Ответ от сервера:', responseData);
//     } catch (err) {
//         console.error('Произошла ошибка:', err.message);
//     }
// }

// const dataToSend = { name: 'John', age: 30, city: 'Batumi' };
// postData(dataToSend);


// // Функция мемоизации
// function memoized (fn) {
//     let cache = {};
//     return function (...args) {
//         const key = JSON.stringify(args);
//         if (cache[key]) {
//             return cache[key];
//         } else {
//             const result = fn(...args);
//             cache[key] = result;
//             return result;
//         }
//     };
// }

// // Функция вычисления факториала

// function factorial (n, self) {
//     if (n <= 1) return 1;
//     return n * self(n - 1);
// }

// const memoizedFactorial = memoized(n => factorial(n, memoizedFactorial));

// // 1)
// function incapsulatedRemapData() {
//     const data = [
//         ['Tomato', 'Nick', 'Igor'],
//         ['Cucumber', 'Ivan', 'Igor'],
//         ['Rice', 'Nick'],
//         ['Eggs', 'Ivan', 'Nick']
//       ]
      
//       function remapData(data) {
//         return data.reduce((acc, arr) => {
//           let product = arr[0];
      
//           for (let i = 1; i < arr.length; i++) {
//             if (acc[arr[i]]) {
//               acc[arr[i]].push(product);
//             } else {
//               acc[arr[i]] = [product];
//             }
//           }
//           return acc;
//         }, {})
//       }
      
//       console.log(remapData(data));
// }

// // incapsulatedRemapData();

// // 2)
// function calculateAverageValuesByDate() {
//     const data = [/* ... ваш массив данных ... */];

//     function remapData(data) {
//     // Преобразуем массив данных в Map, группируя по датам
//     const groupedByDate = data.reduce((accumulator, currentItem) => {
//     // Получаем дату и значение из текущего элемента
//         const date = new Date(currentItem.date).toDateString(); // Преобразуем дату в строку для уникальности
//         const value = currentItem.value;

//         // Добавляем значение в массив для соответствующей даты
//         if (accumulator.has(date)) {
//             accumulator.get(date).push(value);
//         } else {
//             accumulator.set(date, [value]);
//         }

//         return accumulator;
//     }, new Map());

//     // Создаем Map для ответа, содержащего средние значения
//     const answer = new Map();
//         for (let [date, values] of groupedByDate) {
//             // Рассчитываем среднее значение для каждой даты
//             const average = values.reduce((sum, current) => sum + current, 0) / values.length;
//             answer.set(date, average);
//         }

//         return answer;
//     }

//     const result = remapData(data);
//     console.log(Array.from(result.entries()), result);
// }

// // 3)
// class Test {
//   #privateMethod() {
// 		console.log(1);
// 	}

//   publicMethod() {
//     console.log(2);
//     this.#privateMethod(); // Приватный метод может быть вызван внутри класса
//   }

// 	static staticMethod() {
// 		console.log('Вызов статического метода');
// 	}
// }

// // Test.privateMethod(); // Это вызовет ошибку, так как метод приватный

// const newTest = new Test();

// // newTest.privateMethod(); // Это также вызовет ошибку, так как метод приватный

// newTest.publicMethod(); // Выведет 2 и затем 1, так как publicMethod вызывает privateMethod внутри класса

// Test.staticMethod(); // Выведет 'Вызов статического метода'