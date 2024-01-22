// destructuring.js
// 1)
const desdtucturing = function() {
    const user = {
        name: "John",
        years: 30
    };

    const {
        name,
        years: age,
        isAdmin = false
    } = user;

    console.log(name, age, isAdmin);
}

desdtucturing();

// 2)
const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const emptyObj = {};

function topSalaries(obj) {
    if (Object.keys(obj).length === 0) return null;

    const arr = Object.entries(obj);

    let employee, maxSalary;

    for (let [name, salary] of arr) {
        if (!employee && !maxSalary) {
            employee = name;
            maxSalary = salary;
        }

        if (maxSalary < salary) {
            maxSalary = salary
            employee = name;
        }
    }

    return employee;
}

console.log(topSalaries(salaries));
console.log(topSalaries(emptyObj));