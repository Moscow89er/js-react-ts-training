// tasks from 6Seniors Docs
// 1)
const getNumbersByParity = (data, parity) => {
  const oddNums = [];
  const evenNums = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      evenNums.push(data[i]);
    } else if (data[i] % 2 !== 0) {
      oddNums.push(data[i]);
    }
  }

  if (parity === "even") return evenNums;

  return oddNums;
};

const data = [1, 2, 3, 4, 5, 6];

console.log(getNumbersByParity(data, 'even'));
console.log(getNumbersByParity(data, 'odd'));


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

// propertyAccessors.js
// 1)
const person = {
  name: "Nick",
  lastName: "Stone",

  get fullName() {
    return this.name + ' ' + this.lastName;
  },

  set fullName(value) {
    [this.name, this.lastName] = value.split(" ");
  }
}

console.log(person.fullName);

person.fullName = "Иван Говнов";

console.log(person.fullName);