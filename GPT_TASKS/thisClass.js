// thisClass.js
class Timer {
    initialTime;
    currentTime;
    timerId;

    constructor(initialTime) {
        this.currentTime = initialTime;
        this.initialTime = initialTime;
    }

    start = () => {
        this.timerId = setInterval(() => {
            if (this.currentTime > 0) {
                console.log(this.currentTime--);
            } else {
                clearInterval(this.timerId);
            }
        }, 1000)
    }

    pause = () => {
        clearInterval(this.timerId);
    }

    reset = () => {
        clearInterval(this.timerId);
        this.currentTime = this.initialTime;
    }
}

const timer = new Timer(10);
timer.start();
setTimeout(() => timer.pause(), 5000);
setTimeout(() => timer.start(), 10000);

// 2)
class Calculator {
    result = 0;

    add = (number) => {
        this.result += number;
        return this;
    }

    subtract = (number) => {
        this.result -= number;
        return this;
    }

    multiply = (number) => {
        this.result *= number;
        return this;
    }

    divide = (number) => {
        this.result /= number;
        return this;
    }

    clear = () => {
        this.result = 0;
        return this;
    }

    getResult = () => {
        return this.result;
    }
}

const calc = new Calculator();
console.log(calc.add(5).subtract(2).multiply(3).getResult());
console.log(calc.clear().add(8).divide(2).getResult());