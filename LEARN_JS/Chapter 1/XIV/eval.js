// 1)
function getResult() {
    const expression = prompt("Введите математическое выражение", "");
    const operators = ["+", "-", "/", "*"];

    if (typeof expression === "string" && operators.includes(expression.split(" ")[1])) {
        alert(eval(expression));
    } else {
        alert("Введите корректное математическое выражение");
    }
}

getResult();