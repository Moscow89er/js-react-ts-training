// promise.js

// 1) Последовательная обработка массива промисов
// a) решение с помощью метода reduce

/*
function sequentialPromise(arr) {
    const results = [];

    // Начинаем с разрешенного промиса
    const initialPromise = Promise.resolve();

    // Используем reduce для построения цепочки промисов
    const promisesChain = arr.reduce((chain, currentFunc) => {
        return chain.then(() => currentFunc().then(result => {
            results.push(result); // Добавляем результат в массив результатов
            return results; // Возвращаем обновленный массив
        }));
    }, initialPromise);

    // Возвращаем промис, который разрешается с итоговым массивом результатов
    return promisesChain;
}
*/

// b) решение с помощью рекурсии
function sequentialPromise(arr) {
    const results = [];

    function executeSequentially(index) {
        // проверка на окончание массива
        if (index >= arr.length) {
            return Promise.resolve(results);
        }

        // выполнение текущего промиса
        return arr[index]()
            .then(result => {
                results.push(result); // добавление результата в массив
                return executeSequentially(index + 1); // рекурсивный вызов со следующим индексом
            })
    }

    return executeSequentially(0); // начальный вызов с индексом 0
}

function createPromiseFunction(value) {
    return () => new Promise(resolve => setTimeout(() => resolve(value), 100));
}

const promiseFunctions = [createPromiseFunction(1), createPromiseFunction(2), createPromiseFunction(3)];

sequentialPromise(promiseFunctions).then(console.log); // Должно выводить [1, 2, 3]

// 2) Промис с задержкой и отклонением
function delayedRejectPromise(delay, reason) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(reason), delay);
    }
)}

delayedRejectPromise(1000, 'Ошибка').catch(error => console.log(error));
