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

const clock = new Clock({ template: 'h:m:s' });
clock.start();
setTimeout(() => clock.stop(), 5000);

// 2)
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with the speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands motionless.`);
    }
}

const animal = new Animal("My pet");

class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name);
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

const rabbit = new Rabbit("White rabbit", 10);

rabbit.run(5);
rabbit.stop();

console.log(rabbit.name);
console.log(rabbit.earLength);