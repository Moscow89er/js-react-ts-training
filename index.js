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

// let copy;

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
function createDeepCopy(sourceObject) {
    if (typeof sourceObject !== 'object' || sourceObject === null) {
        return sourceObject; // Базовый случай: 
    }

    let copy;

    if (Array.isArray(sourceObject)) {
        copy = sourceObject.map(item => createDeepCopy(item)); // рекурсивное копирование массива
    } else {
        copy = {};
        for (let key in sourceObject) { // цикл for ... in перебирает все перечисляемые свойства объекта и его прототипа
            if (sourceObject.hasOwnProperty(key)) {
                copy[key] = createDeepCopy(sourceObject[key]); // рекурсивное копирование свойств
            }
        }
    }

    return copy;
}

const data = {
    person: { name: 'Nick', age: 33, gender: 'man' },
    copy: { name: 'John', age: 25, gender: 'man' },
    arr: [1, 2, { nested: 'value' }]
};

const deepCopy = createDeepCopy(data);
console.log(deepCopy);

