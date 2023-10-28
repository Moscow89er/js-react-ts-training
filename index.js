// number.js
// 1)
// let firstNum = +prompt("Enter first number", "");
// let secondNum = +prompt("Enter second number", "");

// alert(firstNum + secondNum);

// 2)
// alert(Math.round(6.35 * 10) / 10);

// 3)
function readNumber() {
    let num;

    do {
        num = +prompt("Enter number", "");
    } while (!isFinite(num));

    if (num == null || num == "") return null;

    return +num;
}

alert(readNumber());
