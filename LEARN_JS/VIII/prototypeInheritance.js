// prototypeInheritance.js

// 1)
const head = {
    glasses: 1
  };
  
  const table = {
    pen: 3,
    __proto__: head
  };
  
  const bed = {
    sheet: 1,
    pillow: 2,
    __proto__:  table
  };
  
  const pockets = {
    money: 2000,
    __proto__: bed
  };
  
  // alert( pockets.pen ); // 3
  // alert( bed.glasses ); // 1
  // alert( table.money ); // undefined
  
  // 2)
  let hamster = {
      stomach: [],
    
      eat(food) {
          this.stomach.push(food);
      }
  };
  
  let speedy = {
      stomach: [],
      __proto__: hamster
  };
  
  let lazy = {
      stomach: [],
      __proto__: hamster
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
  // alert( speedy.stomach );
  // alert( lazy.stomach );
  
  // functionPrototype.js
  // 3)
  function User(name) {
      this.name = name;
  }
  
  User.prototype = { constructor: User };
  
  const user = new User("Nick");
  const user2 = new user.constructor("Fred")
  
  // console.log(user2);
  
  // 
  
  // 4)
  function f() {
    alert("Hello!");
  }
  
  Function.prototype.defer = function(ms) {
    setTimeout(this, ms)
  }
  
  // f.defer(1000);
  
  // 5)
  function f2(a, b) {
    alert(a + b);
  }
  
  Function.prototype.defer2 = function(ms) {
    let f = this;
  
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms)
    }
  }
  
  // f2.defer2(1000)(1, 2);
  
  
  // prototypeMethods.js
  
  // клон obj c тем же прототипом (с поверхностным копированием свойств)
  // const clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptor(obj));
  
  // 6)
  // a)
  const dictionary = Object.create(null);
  
  Object.defineProperty(dictionary, "toString", {
    value: function() {
      const arrOfKeys = [];
    
      for (const key of Object.keys(dictionary)) {
        arrOfKeys.push(key);
      }
      
      return arrOfKeys.toString(',');
    },
    enumerable: false
  });
  
  dictionary.apple = "Apple";
  dictionary.__proto__ = "test";
  
  for(const key in dictionary) {
    alert(key);
  }
  
  alert(dictionary);
  
  // b)
  const dictionary2 = Object.create(
    null,
    {toString: {
      value() {
        return Object.keys(this).join();
      }
    }}
  );
  
  dictionary2.apple = "Apple";
  dictionary2.__proto__ = "test";
  
  for(const key in dictionary2) {
    alert(key);
  }
  
  alert(dictionary2);

  // prototypeInheritance.js
// 7)
const animal = {
  isAlive: true
};

const dog = {
  __proto__: animal,

  bark() {
      console.log("Woof!");
  }
};

console.log(dog.isAlive);
dog.bark();

// 8)
const animal2 = {
  eats: true
};

const cat = {
  jumps: true
};

Object.setPrototypeOf(cat, animal2);

console.log(cat.eats);

// F.prototpe.js
// 9)
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`My name is ${this.name}, and i'm the real Slim Shaddy!`)
}

const rex = new Animal("Rex");

rex.speak();

// 10)
function Bird(name) {
  this.name = name;
}

Bird.prototype.speak = function() {
  console.log(`Hey, hey, hey! Here comes the ${this.name}!`);
}

const parrot = new Bird("Polly");

Bird.prototype = { key: "smth" }; // Переопределяем свойство prototype, теперь свойства constructor в нем нет (*)

const owl = new Bird("Jack");

// parrot.constructor возвращает Bird.prototype - ответ на первый вопрос

console.log(parrot);
parrot.speak(); // parrot уже был инициализирован, когда мы переопределили свойство constructor, по этой причине для него ничего не поменялось
console.log(owl);
// owl.speak(); // owl не имеет доступа к F.prototype из за отсутствия свойсва constructor, по этой прчине возникает ошибка TypeError, owl.speack is not a function

// 11)
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype = {
  constructor: Vehicle,

  move() {
      console.log(this.type + " is moving...")
  }    
}

const car = new Vehicle("Car");

car.move();

// nativePrototypes.js
// 12)
const numbers = [1, 2, 3, 4, 5];

const squaredNums = numbers.map(num => num * num);

console.log(squaredNums);

// 13)
const exampleString = "Hello World!";

String.prototype.reverse = function() {
  const newStr = [];
  let index = 0;

  for (let i = this.length - 1; i >= 0; i--) {
      newStr[index] = this[i];
      index++;
  }

  return newStr.join("");
}

console.log(exampleString.reverse());

// Копирование свойст через цикл for ... in,
// переопределение дескрипторов и копирование через Object.assign
const user3 = {
  name: "Nick",
  age: 33
};

const admin = {
  admin: true
};

for (let key in user3) {
  admin[key] = user[key];
}

console.log(admin);

Object.defineProperty(admin, "password", {
  value: 12345,
  writable: true,
  enumerable: false,
  configurable: false
});

const adminClone = Object.assign(Object.create(
  Object.getPrototypeOf(admin)
), admin);

console.log(adminClone.password); // undefined, но так и нужно

// prototypeInheritance.js
// 14)
const animal3 = {
  speak() {
    console.log(this.name + " makes a sound");
  }
};

const cat2 = Object.create(animal3, {
  name: {
      value: "Boris Johnson"
  }
});

console.log(cat2);

cat2.speak();

// 15)
function Car(model) {
  this.model = model;
}

Car.prototype.drive = function() {
  console.log(this.model + " is moving...");
};

const myCar2 = new Car("Tesla");

myCar2.drive(); // Tesla is moving...

// 16)
const zoo = {
  speak() {
    console.log(this.name + ": -'Hold my beer'");
  }
};

const hippo = {
  name: "Whiskers"
};

Object.setPrototypeOf(hippo, zoo);

hippo.speak();