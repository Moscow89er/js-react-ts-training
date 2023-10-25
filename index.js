// constructorNew.js
// 1)
// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// alert ( new A() == new B() );

// 2)
function Calculator() {
    this.read = function() {
        this.a = +prompt("Enter number 1", "");
        this.b = +prompt("Enter number 2", "");
    }

    this.sum = function() {
        alert("Sum = " + (this.a + this.b));
    }

    this.mul = function() {
        alert("Mul = " + this.a * this.b);
    }
}

let calculator = new Calculator();
calculator.read();
calculator.sum();
calculator.mul();