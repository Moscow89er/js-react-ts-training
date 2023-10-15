// 1) Создание объектов - поверхностное копирование
const person = { // Вар.1 - литеральная нотация
    name: 'Nick',
    id: '1',
    age: 33,
    lastName: 'Mir'
};



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
const keys = Object.keys(person); // Возвращаем массив, содержащий имена (ключи), перечисляемых свойств объекта

for (const key of keys) { // Перебираем ключи объекта
    console.log(key);
}

const values = Object.values(person); // Делаем тоже самое со свойствами объекта

for (const value of values) {
    console.log(value);
}

const entries = Object.entries(person); // Получаем ключи и значения в том виде, в котором нам это необходимо

for (const [key, value] of entries) {
    console.log(`Ключ: ${key}, Свойство: ${value}`);
}