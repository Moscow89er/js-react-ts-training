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