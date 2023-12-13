// 1)
class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        const date = new Date();
  
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
  
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
  
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
  
        const output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
  
        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    };
    
    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    };
}

class ExtendedClock extends Clock {
    constructor(options) {
        super(options);
        const {precision = 1000 } = options;
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

const clock = new Clock({ template: 'h:m:s' });
// clock.start();
// setTimeout(() => clock.stop(), 5000);

const extendedClock = new ExtendedClock({ template: 'h:m:s', precision: 2000 });
// extendedClock.start();
// setTimeout(() => extendedClock.stop(), 5000);


// 2)
class Animal {
    constructor(name, speed) {
        this.speed = speed;
        this.name = name;
    }
    run(speed = 0) {
        this.speed += speed;
        console.log(`${this.name} runs with the speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands motionless.`);
    }

    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }
}

const animal = new Animal("My pet", 0);

class Rabbit extends Animal {
    constructor(name, earLength, speed) {
        super(name, speed);
        this.earLength = earLength;
    }

    hide() {
        console.log(`${this.name} hiding!`);
    }

    stop() {
        setTimeout(() => super.stop(), 1000); // вызываем родительский метод stop
        setTimeout(() => this.hide(), 2500); // и затем hide
    }
}

const rabbits = [
    new Rabbit("White rabbit", 10, 5),
    new Rabbit("Black rabbit", 5, 3)
];

// rabbits.sort(Rabbit.compare);

// rabbits[0].run();

// 3)
const brute = {
    name: "Animal",
    eat() { // brute.eat.[[HomeObject]] == brute
        console.log(`${this.name} eats`);
    }
}

const raccoon = {
    __proto__: brute,
    name: "Raccoon",
    eat() { // raccoon.eat.[[HomeObject]] == raccoon
        super.eat();
    }
}

const longTail = {
    __proto__: raccoon,
    name: "longTail",
    eat() { // longTail.eat.[[HomeObject]] == longTail
        super.eat();
    }
}

// longTail.eat();

// 4)
class Animal1 {
    constructor(name) {
      this.name = name;
    }
  
}
  
class Rabbit1 extends Animal1 {
    constructor(name) {
        super(name);
        this.created = Date.now();
    }
}
  
const rabbit1 = new Rabbit1("Белый кролик");
// console.log(rabbit.name);

// 4)
class Rabbit3 extends Object {
    constructor(name) {
        super();
        // Унаследованный конструктор класса должен вызывать super().
        // В противном случае "this" будет не определён.
        this.name = name;
    }
}
  
const rabbit = new Rabbit3("Кроль");
  
// console.log( rabbit.hasOwnProperty('name') );

// 5) Создание кофеварки
class CoffeeMachine {
    _waterAmount = 0;
    #waterLimit = 200;

    constructor(power) {
        this._power = power;
        console.log(`Создана кофеварка, мощность: ${power}`);
    }

    #checkWater(value) {
        if (value < 0) throw new Error("Отрицательное количество воды");
        if (value > this.#waterLimit) throw new Error("Слишком много воды");
    }

    setWaterAmount(value) {
        this.#checkWater(value);
        this._waterAmount = value;
    }

    getWaterAmount() {
        return this._waterAmount;
    }

    getPower() {
        return this._power;
    }
}

const coffeeMachine = new CoffeeMachine(150);

coffeeMachine.setWaterAmount(175);

console.log(coffeeMachine);

// 6)
class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }

    // встроенные методы массива будут использовать этот
    // метод как конструктор
    // static get [Symbol.species]() {
    //     return Array;
    // }
}

const arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty());

const filteredArr = arr.filter(item => item >= 10);
console.log(filteredArr);
console.log(filteredArr.isEmpty());

// 7) mixins
const sayMixin = {
    say(phrase) {
        console.log(phrase);
    }
}

const sayHiMixin = {
    __proto__: sayMixin,

    sayHi() {
        super.say(`Привет, ${this.name}`);
    },
    sayBye() {
        super.say(`Пока, ${this.name}`);
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, sayHiMixin);

new User("Nick").sayBye();

// 8) EventMixin
const eventMixin = {
    on(eventName, handler) {
        if (!this._eventHandlers) this._eventHandlers = {};

        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }

        this._eventHandlers[eventName].push(handler);
    },

    off(eventName, handler) {
        const handlers = this._eventHandlers?.[eventName];

        if (!handlers) return;

        for (let i = 0; i < handlers.length; i++) {
            if(handlers[i] === handler) {
                handlers.splice(i--, 1)
            }
        }
    },

    trigger(eventName, ...args) {
        if (!this._eventHandlers?.[eventName]) {
            return;
        }

        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
}

class Menu {
    choose(value) {
        this.trigger("select", value);
    }
}

Object.assign(Menu.prototype, eventMixin);

const menu = new Menu();

menu.on("select", value => console.log(`Выбранное значение: ${value}`));

menu.choose("Жаренная селедочка по-флотски");