// arrowFunctions.js

// 1)
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        this.students.forEach(
            (student) => {
                console.log(`${this.title}: ${student}`);
            }
        )
    }
}

group.showList();

// 2)
// a)
function defer(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms)
    }
}

function sayHi(who) {
    console.log('Hello, ' + who);
}

const sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("Nick");

// b)
function defer(func, ms) {
    return function(...args) {
        let context = this;
        setTimeout(function() {
            return func.apply(context, args);
        }, ms)
    }
}