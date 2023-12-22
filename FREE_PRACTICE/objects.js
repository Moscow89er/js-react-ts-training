// const person = {
//     name: 'Nick',
//     age: 33,
//     email: 'nick@test.tu'
// }

// const person = Object.assign({
//     name: 'Gleb',
//     lastname: 'Jiglov',
//     age: 33,
//     workAt: 'Tochka',
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`)
//     }
// })

// const entries = Object.entries(person)

// for (const [key, value] of entries) {
//     console.log(`${key}: ${value}`) // перебираем ключи и свойства в удобном для созерцания виде
// }

// const keys = Object.keys(person); 

// for (const key of keys) {
//     console.log(key) // перебираем ключи объекта
// }

// const values = Object.values(person);

// for (const value of values) {
//     console.log(value) // перебираем свойства объекта
// }

// person.greet()

// const newPerson = Object.assign(person)

// const isEqual = Object.is(person, newPerson)

// console.log(newPerson)
// console.log(isEqual)

// console.log(person)
// console.log(Object.keys(person))
// console.log(Object.values(person))

// Object.freeze(person) // замараживает объект, его свойства не могут быть удалены

// Object.seal(person) // в таком случае можно изменять только существующие свойства

// person.name = 'Vova'

// console.log(person.name)
// console.log(Object.entries(person))

// const newPerson = Object.assign({
//     email: 'gleb007@test.ru'
// }, person)

// console.log(person)



// const sharapov = Object.assign({
//     name: 'Vova',
//     surname: 'Sharapov',
//     email: 'vova001@test.ru'
// }, person)

// console.log(sharapov === newPerson)
// console.log(newPerson)
// console.log(sharapov)

// let headOfBand;

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

// headOfBand = createDeepCopy(sharapov)

// console.log(headOfBand === sharapov)
// console.log(headOfBand)

// 1) Создание объектов - поверхностное копирование
// const person = { // Вар.1 - литеральная нотация
//     name: 'Nick',
//     id: '1',
//     age: 33,
//     lastName: 'Mir'
// };



// const person = Object.assign({ // Вар. 2
//     name: 'Nick',
//     id: '1'
// });

// const newPerson = Object.assign({}, person, {
//     email: 'nick@test.net'
// });

// console.log(newPerson);



// const person = Object.assign({ // Изменение свойств объекта
//     name: 'Nick',
//     id: '1',
//     email: 'nick@test.net'
// });

// Object.assign(person, {
//     email: 'notnick@test.net'
// });

// console.log(person);



// const newPrsn = { // вар. 3
//     ...person,
//     address: 'Georgia, Batumi'
// };
// console.log(newPrsn);



// 2) Как получить доступ к ключам объекта
// console.log(Object.keys(person)); // Получаем досутп к ключам объекта
// console.log(Object.values(person)); // Получаем доступ к свойствам объекта
// console.log(Object.entries(person)); // Возвращаем массив, состоящий из пар [ключ, значение]



// 3) Полезные методы
// Object.freeze(person); // Закрывает возможность изменять или удалять свойства объекта
// Object.seal(person); // Метод предотвращает добавление новых свойств, позволяя изменять существующие
// person.name = 'Igor';
// console.log(person.name);



// const newPerson = Object.assign(person);
// const isEqual = Object.is(person, newPerson); // Метод сравнения, обычно метод === является более предпочтительным
// console.log(isEqual);



// 4) Циклы для объектов
// const keys = Object.keys(person); // Возвращаем массив, содержащий имена (ключи), перечисляемых свойств объекта

// for (const key of keys) { // Перебираем ключи объекта
//     console.log(key);
// }

// const values = Object.values(person); // Делаем тоже самое со свойствами объекта

// for (const value of values) {
//     console.log(value);
// }

// const entries = Object.entries(person); // Получаем ключи и значения в том виде, в котором нам это необходимо

// for (const [key, value] of entries) {
//     console.log(`Ключ: ${key}, Свойство: ${value}`);
// }



// function getPrimeNumber(n) {
//     let arr = [];

//     label:   
//     for (let i = 2; i <= n; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue label;
//         }
//         arr.push(i);
//     }
    
//     console.log(arr);
// }

// getPrime(55);



// function getThematic() {
//     let random = Math.floor(Math.random() * 100);

//     if (random <= 50) {
//         alert("Детали и ресурсы по Контур Толку после нашей встречи");
//     } else {
//         alert("Всё о Контур Толке: запись встречи, ресурсы и тарифы");
//     }
// }

// getThematic();