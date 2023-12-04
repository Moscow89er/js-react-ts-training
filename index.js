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
// 1)
function User(name) {
    this.name = name;
}

User.prototype = { constructor: User };

const user = new User("Nick");
const user2 = new user.constructor("Fred")

console.log(user2);