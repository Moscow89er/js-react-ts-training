// Задача от Артема (Katana)
const {0: one, 1: two} = [1, 2];

console.log(one);
console.log(two);

const [three, four, five, six] = { 
    0: 3,
    1: 4,
    2: 5,
    3: 6,

    [Symbol.iterator]() {
        this.current = this[0];
        return this;
    },

    next() {
        if(this.current <= this[3]) {
            return {
                done: false,
                value: this.current++
            };
        } else {
            return { done: true };
        }
    }
};

console.log(three);
console.log(four);
console.log(five);
console.log(six);

// ОС от Артема 03.12
// 1)
const obj = {
    name: "foo",
  
    bar() {
      return this.name;
    },
  
    baz: () => {
      return this.name;
    }
  }
  
  const obj2 = {
    name: "faz"
  }
  
  console.log(obj.bar());
  console.log(obj.baz());
  
  console.log(obj.bar.call(obj2));
  console.log(obj.baz.call(obj2));
  
  console.log(obj.bar.bind(obj2)());
  console.log(obj.baz.bind(obj2)());

  // 2)
const person = {
    name: 'Alice',
    age: 25,
    introduce() {
      console.log(`Меня зовут ${this.name} и мне ${this.age} лет.`);
    }
  };
  
  const person2 = {
    name: 'Bob',
    age: 30
  };
  
  person.introduce.call(person2);
  
  // 3)
  function printWithArguments(message) {
    for(let i = 1; i < arguments.length; i++) {
      console.log(`${message}: ${arguments[i]}`);
    }
  };
  
  const stringObj = {
    message: "Слово 'Внимание' на разных языках"
  };
  
  printWithArguments.apply(stringObj, [stringObj.message, "Attention! - английский", "ყურადღება! - грузинский"]);
  
  // 4)
  let user = {
    name: 'Sarah'
  };
  
  function updateName(newName) {
    this.name = newName;
  }
  
  const giveSarahNewName = updateName.bind(user);
  
  giveSarahNewName("Nina");
  
  console.log(user.name);