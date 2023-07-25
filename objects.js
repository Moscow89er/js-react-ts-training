// const person = {
//     name: 'Nick',
//     age: 33,
//     email: 'nick@test.tu'
// }

const person = Object.assign({
    name: 'Gleb',
    lastname: 'Jiglov',
    age: 33,
    workAt: 'Tochka',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`)
    }
})

const entries = Object.entries(person)

for (const [key, value] of entries) {
    console.log(`${key}: ${value}`) // перебираем ключи и свойства в удобном для созерцания виде
}

const keys = Object.keys(person); 

for (const key of keys) {
    console.log(key) // перебираем ключи объекта
}

const values = Object.values(person);

for (const value of values) {
    console.log(value) // перебираем свойства объекта
}

person.greet()

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

// function createDeepCopy(obj) {
//     if (typeof obj !== 'object' || obj === null) {
//         return obj
//     }

//     let copy;

//     if (Array.isArray(obj)) {
//         copy = obj.map((item) => {
//             return createDeepCopy(item)
//         })
//     } else {
//         copy = {}
//         for (let key in obj) {
//             if (obj.hasOwnProperty(key)) {
//                 copy[key] = createDeepCopy(obj[key])
//             }
//         }
//     }

//     return copy;
// }

// headOfBand = createDeepCopy(sharapov)

// console.log(headOfBand === sharapov)
// console.log(headOfBand)