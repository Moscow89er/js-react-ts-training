// taskFromAlexander.js
const users = [
    { userName: "Alice", age: 28 },
    { userName: "Bob", age: 32 },
    { userName: "Charlie", age: 25 },
    { userName: "Daisy", age: 30 },
    { userName: "Edward", age: 35 }
];

function convertToLocalData(dataArray) {
    return dataArray.map((obj, index) => {
        let trueIndex = index + 1;

        let newObj = {
            [`user${trueIndex}_name`]: obj.userName,
            [`user${trueIndex}_age`]: obj.age
        }

        return newObj;
    })
}

console.log(convertToLocalData(users));

/*
[
{
    user1_name: 1,
    user1_age: 1,
},
{
    user2_name: 2,
    user2_age: 2,
}
]
*/

// Как из объекта можно удалить свойство password используя spread-оператор?
let user = {
    username: "Nick",
    password: "12345",
    id: 1,
    age: 34
}

const { password, ...userWithoutPassword } = user;

console.log(userWithoutPassword);

// yet another task from Alex
const links = [{}, {}, {}];
for (var i = 0; i < links.length; i++) {
    (function (i) {
        links[i].ref = function () {
            console.log(i);
        }
    })(i);
};

// Смысл задачи заключается в демонстрации того,
// как можно "захватить" текущее значение переменной в цикле
// и сохранить его для будущих вызовов. Без использования IIFE
// все методы ref выводили бы в консоль одно и то же значение
// (конечное значение i после завершения цикла), так как i 
// объявлена с помощью var и обладает функциональной областью
// видимости. С помощью IIFE мы создаем отдельное лексическое
// окружение для каждой итерации цикла, тем самым "фиксируя" 
// значение i для каждой функции ref.