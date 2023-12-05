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
  
  // console.log(user2);
  
  // 
  
  // 1)
  function f() {
    alert("Hello!");
  }
  
  Function.prototype.defer = function(ms) {
    setTimeout(this, ms)
  }
  
  // f.defer(1000);
  
  // 2)
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
  
  // 1)
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