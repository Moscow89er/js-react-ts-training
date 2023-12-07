// propertyDescriptors.js
// 1)
const user = {};

Object.defineProperty(user, "name", {
  value: "Nick",
  writable: false
})

user.name = "Victor";

console.log(user.name); // Nick

// 2)
const dog = {};

Object.defineProperties(dog, {
  "name": {value: "Hito", writable: true, enumerable: true, configurable: true},
  "age": {value: 2, writable: true, enumerable: true, configurable: true}
})

console.log(dog);

dog.name = "Tyson";
dog.age = 5;
delete dog.age;

console.log(dog);

Object.seal(dog);
dog.name = "Hito";
delete dog.name;

console.log(dog);

// 3)
const wallet = {};

Object.defineProperties(wallet, {
  "name": {value: "YvesSaintLaurent", enumerable: true},
  "quantity": {value: 10000, enumerable: true},
  "toString": {value() { return Object.keys(this).join(', ')}, enumerable: false}
})

for (let key in wallet) {
  console.log(key);
}

alert(wallet);
