// Задача: создать объект в котором ключи - это элементы массива, а значения - число повторений соответствующих элементов

const order = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple', 'orange', 'banana'];

const result = order.reduce(function (prevVal, item) {
    if (!prevVal[item]) {
        prevVal[item] = 1;
    } else {
        prevVal[item] += 1;
    }

    return prevVal;
}, {})

console.log(result);