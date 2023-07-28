// const obj = {
//     name: 'Nick',
//     age: 33
// }

const person = Object.assign({
    name: 'Nick',
    age: 33,
    email: 'test@rt.ew',
    lastname: 'Code'
})

Object.assign(person, {
    email: 'sadw@sjs.ry'
})

// const person = {
//     ...person,
//     adress: 'Russia'
// }

const entries = Object.entries(person);

for (const [key, val] of entries) {
    console.log(`${key} : ${val}`)
}