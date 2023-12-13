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

// 8)
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

// 9)
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

// 10)
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

// 11)
class Beast {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} is make some noise!`);
    }
}

class Dog extends Beast {
    speak() {
        console.log(`${this.name} is barking!`);
    }
}

let myDog = new Dog("Spock");
// myDog.speak();

// 12)
class NumberUtils {
    static isPrime(number) {
        if (number <= 1) return false;

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }

        return true;
    }
}

console.log(NumberUtils.isPrime(5)); // true
console.log(NumberUtils.isPrime(4)); // false 
