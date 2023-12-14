// class.js
// Базовый синтаксис для классов выглядит так:
class myClass {
    prop = value;

    constructor(...args) {
        //...
    }

    method(...args) {}

    get something() {} 
    set something(value) {}

    [Symbol.iterator]() {} // метод с вычисляемым именем

    //...
}

// 1)
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    toString() {
        return `Point(${this.x}, ${this.y})`;
    }
}

const p = new Point(1, 2);
// console.log(p.toString());
p.move(3, -1);
// console.log(p.toString());

// 2)
class Accumulator {
    value = 0;

    constructor(initialValue) {
        this.value = initialValue;
    }

    add(number) {
        this.value += number;
    }
}

const accumulator = new Accumulator(0);
accumulator.add(5);
accumulator.add(-2);
// console.log(accumulator.value);

// 3)
class Vehicle {
    constructor(name) {
        this.name = name;
    }

    start() {
        console.log(`Vehicle ${this.name} is working.`);
    }

    stop() {
        console.log(`Vehicle ${this.name} engine is stopped.`);
    }
}

class Car extends Vehicle {
    constructor(model) {
        super(model);
        this.model = model;
    }

    start() {
        console.log(`The ${this.model} car is working.`);
    }
}

let myCar = new Car("Toyota");
// myCar.start();
// myCar.stop();

// 4)
class Beast {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} is make some noise!`);
    }
}

class Dog1 extends Beast {
    speak() {
        console.log(`${this.name} is barking!`);
    }
}

let myDog = new Dog1("Spock");
// myDog.speak();

// 5)
class NumberUtils {
    static isPrime(number) {
        if (number <= 1) return false; // Исключаем числа меньше или равные 1
        if (number === 2) return true; // 2 - простое число
        if (number % 2 === 0) return false; // Исключаем четные числа

        for (let i = 3; i <= Math.sqrt(number); i += 2) { // Проверяем только нечетные числа
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}

// console.log(NumberUtils.isPrime(5)); // true
// console.log(NumberUtils.isPrime(4)); // false 

// 6)
class ObjectUtils {
    static isEqual(firstObj, secondObj) {
        const firstObjKeys = Object.keys(firstObj);
        const secondObjKeys = Object.keys(secondObj);

        if (firstObjKeys.length !== secondObjKeys.length) return false;

        for (let key of firstObjKeys) {
            if (firstObj[key] !== secondObj[key]) {
                return false;
            }
        }

        return true;
    }
}

let obj1 = { name: "Alice", age: 25 };
let obj2 = { name: "Alice", age: 25 };
let obj3 = { name: "Bob", age: 30 };

// console.log(ObjectUtils.isEqual(obj1, obj2)); // true
// console.log(ObjectUtils.isEqual(obj1, obj3)); // false

// 7)
class Counter {
    #count = 0;

    increment() {
        this.#count++;
    }

    getValue() {
        return this.#count;
    }
}

const myCounter = new Counter();
myCounter.increment();
myCounter.increment();
// console.log(myCounter.getValue());

// 8)
class Auth {
    #password = 12345;

    #checkPassword(password) {
        if (this.#password === password) {
            return true;
        }
        return false;
    }

    login(password) {
        if(this.#checkPassword(password) === true) {
            console.log("Correct password, nice to meet you again");  
        } else {
            console.log("Password is not correct");
        }
    }
}

const auth = new Auth();
// auth.login(1234);
// auth.login(12345);

// 9)
class BaseComponent {
    _update() {
        console.log("I was called");
    }
}

class CustomComponent extends BaseComponent {
    refresh() {
        super._update();
    }
}

const myComponent = new CustomComponent();
// myComponent.refresh();

// 10)
class UserAccount {
    _password = "";

    constructor(initialPassword) {
        this._password = initialPassword;
    }

    changePassword(value) {
        this._password = value;
    }

    getPassword() {
        console.log(this._password);
    }
}

const user = new UserAccount('initialPassword');

// user.getPassword();
// user.changePassword('newPassword');
// user.getPassword();

// 11)
class EnhancedArray extends Array {
    sum() {
        return this.reduce((acc, cur) => acc + cur, 0);
    }
}

const arr = new EnhancedArray(1, 2, 3, 4);
// console.log(arr.sum());

// 12)
class ReversibleString extends String {
    reverse() {
        return this.split("").reverse().join("");
    }
}

let myString = new ReversibleString("Hello, World!");
// console.log(myString.reverse());

// 13)
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} make some noise.`);
    }
}

class Dog extends Animal {
    speak() {
        super.speak();
        console.log("Waff!");
    }
}

class Cat extends Animal {
    speak() {
        super.speak();
        console.log("Meow!");
    }
}

const boris = new Cat("Boris Johnson");
const spock = new Dog("Spock");

// boris.speak();
// spock.speak();

// console.log(boris instanceof Dog);
// console.log(spock instanceof Dog);
// console.log(boris instanceof Animal);
// console.log(spock instanceof Animal);

// 14)
function checkType(obj, someClass) {
    if (obj instanceof someClass) return true;
    return false;
}

// console.log(checkType(boris, Dog));
// console.log(checkType(spock, Dog));
// console.log(checkType(boris, Cat));
// console.log(checkType(boris, Animal));

// 15)
function getType(arg) {
    return typeof arg;
}

// console.log(getType(12));
// console.log(getType("hello"));
// console.log(getType(true));
// console.log(getType(() => {}));
// console.log(getType({}));
// console.log(getType(undefined));

// 16)
function isNumber(arg) {
    return (typeof arg === "number" && isFinite(arg));
}

// console.log(isNumber(12));
// console.log(isNumber("hello"));
// console.log(isNumber(true));
// console.log(isNumber(() => {}));

// 17)
function getExactType(arg) {
    return Object.prototype.toString.call(arg).split(" ")[1].slice(0, -1);
}

// console.log(getExactType({}));
// console.log(getExactType([]));
// console.log(getExactType('Hello'));
// console.log(getExactType(new Number(42)));
// console.log(getExactType(true));
// console.log(getExactType(() => {}));
// console.log(getExactType(null));
// console.log(getExactType(undefined));

// 18)
function isArray(arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
}

// console.log(isArray([]));
// console.log(isArray({}));
// console.log(isArray('Hello'));
// console.log(isArray(new Number(42)));

// 19)
const LoginMixin = {
    log() {
        console.log(`${this.name}: ${this.message}`);
    }
}

class User {
    constructor(name, message) {
        this.name = name;
        this.message = message;
    }
}

class Product {
    constructor(name, message) {
        this.name = name;
        this.message = message;
    }
}

Object.assign(User.prototype, LoginMixin);
Object.assign(Product.prototype, LoginMixin);

const user2 = new User("Nick", "Hi, i am Nick!");
const product = new Product("Phone", "Price is 300$");

user2.log();
product.log();
