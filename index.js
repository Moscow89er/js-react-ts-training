const nick = {
  name: "Nick",
  age: 34
}

const user = Object.assign({
  email: "nick_89@mail.net"
}, nick);

console.log(user);

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(`Hello, my name is ${this.name}, and i am ${this.age} old.`)
//   }
// }

// class Admin extends User {
//   constructor(name, age) {
//     super(name, age);
//     this.isAdmin = true;
//   }
// }

// const admin = new Admin("Max", 27);

// console.log(admin);
// console.log(admin instanceof Admin);
// console.log(admin instanceof User);

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}, and i am ${this.age} old.`);
}

function Admin(name, age) {
  User.call(this, name, age);
  this.isAdmin = true;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin.prototype;

const adminProto = Object.create(Admin.prototype);
User.call(adminProto, "Max", 27);
adminProto.admin = true;

console.log(adminProto);
adminProto.sayHello();

const newPerson = {
  ...adminProto,
  name: "Nick",
  age: 34,
  sayHello() {
    console.log(`Hello, my name is ${this.name}, and i am ${this.age} old. And i'm from ${this.address}.`);
  },
  address: "Russia, Moscow"
}

console.log(newPerson);
newPerson.sayHello();
console.log(newPerson instanceof User); // false