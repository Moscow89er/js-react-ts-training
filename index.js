// Метод reduce
// Задача: создать объект в котором ключи - это элементы массива, а значения - число повторений соответствующих элементов
// const order = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple', 'orange', 'banana'];

// const result = order.reduce(function (prevVal, item) {
//     if (!prevVal[item]) {
//         prevVal[item] = 1;
//     } else {
//         prevVal[item] += 1;
//     }

//     return prevVal;
// }, {})

// console.log(result);

// // Метод sort
// const myNumbers = [0, 3.14, 2.718, 13];

// myNumbers.sort((a, b) => b - a);

// console.log(myNumbers);

// const diagnoses = [
//     'шизофрения',
//     'синдром упущенной выгоды',
//     'боязнь красного цвета'
// ];

// diagnoses.sort((a, b) => {
//     a = a.toLocaleLowerCase();
//     b = b.toLocaleLowerCase();

//     if (a < b) return - 1;
//     if (b < a) return 1;

//     return 0;
// });

// console.log(diagnoses);



// Необходимо вывести среднее арифметическое по дням месяца в виде Map,
// где будут дни месяца (в виде экземпляра Date),
// а значениями средние величины
const data = [
    {
        date: "2021-06-24T04:25:00.000Z",
        value: 14
    },
    {
        date: "2021-06-25T04:25:00.000Z",
        value: 15
    },
    {
        date: "2021-06-23T04:25:00.000Z",
        value: 11
    },
    {
        date: "2021-06-27T04:25:00.000Z",
        value: 8
    },
    {
        date: "2021-06-11T04:25:00.000Z",
        value: 1
    },
    {
        date: "2021-06-24T04:25:00.000Z",
        value: 14
    },
    {
        date: "2021-06-23T04:25:00.000Z",
        value: 12
    },
    {
        date: "2021-06-22T04:25:00.000Z",
        value: 4
    },
    {
        date: "2021-06-25T04:25:00.000Z",
        value: 19
    },
    {
        date: "2021-06-23T04:25:00.000Z",
        value: 14
    },
    {
        date: "2021-06-24T04:25:00.000Z",
        value: 3
    },
    {
        date: "2021-06-11T04:25:00.000Z",
        value: 9
    },
];

const result = data.reduce((acc, cur) => {
    const date = new Date(cur.date).getTime();

    if (acc.has(date)) {
        acc.set(date, [...acc.get(date), cur.value]);
    } else {
        acc.set(date, [cur.value]);
    }
    return acc;
}, new Map())

const answer = new Map();

for (let [key, value] of result) {
    answer.set(new Date(key), value.reduce((acc, cur) => acc + cur, 0) / value.length);
}

console.log([...answer.entries()], answer);

// let result = new Map();

// data.forEach(item => {
//     const date = new Date(item.date);
//     // Обнуляем время, чтобы сравнивать только даты
//     date.setHours(0, 0, 0, 0);

//     if (!result.has(date)) {
//         result.set(date, {sum: 0, count: 0 });
//     }

//     const current = result.get(date);
//     current.sum += item.value;
//     current.count += 1;
// });

// // Вычисление среднего значения для каждого дня
// for (let [key, value] of result.entries()) {
//     result.set(key, value.sum / value.count);
// }

// console.log(result);