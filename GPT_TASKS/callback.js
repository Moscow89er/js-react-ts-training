// 1) последовательное выполнение асинхронных функций
function executeSeries(arrOfAsyncFuncs, finalCallback) {
    let count = 0;

    function auxiliaryFunction() {
        if (count < arrOfAsyncFuncs.length) {
            // Вызываем текущую асинхронную функцию и передаем ей колбэк
            arrOfAsyncFuncs[count](function() {
                // После завершения текущей функции, увеличиваем счетчик
                count++;
                // Вызываем auxiliaryFunction рекурсивно для следующей функции
                auxiliaryFunction();
            });
        } else {
            // Когда все функции выполнены, вызываем финальный колбэк
            finalCallback()
        }
    }

    // Начальный вызов вспомогательной функции
    auxiliaryFunction();
}

function asyncFunc(number, callback) {
    setTimeout(() => {
        console.log(`Завершена функция: ${number}`);
        callback();
    }, Math.random() * 1000);
}

// executeSeries([
//     (cb) => asyncFunc(1, cb),
//     (cb) => asyncFunc(2, cb),
//     (cb) => asyncFunc(3, cb)
// ], () => {
//     console.log('Все функции выполнены');
// });

// 2) Асинхронное получение данных с обработкой ошибок
function fetchDataWithRetry(url, numOfTries, callback) {
    function attempt() {
        mockFetch(url, function(err, data) {
            if (err) {
                numOfTries--;
                if (numOfTries === 0) {
                    callback(err, null); // Все попытки исчерпаны
                } else {
                    attempt(); // Повторяем попытку
                }
            } else {
                callback(null, data); // Успешное получение данных
            }
        });
    }

    attempt();
}

function mockFetch(url, callback) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            callback('Ошибка запроса', null);
        } else {
            callback(null, `Данные с ${url}`);
        }
    }, 500)
}

fetchDataWithRetry('https://example.com', 3, (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});


// 3) Асинхронный фильтр массива
function asyncFilter(arr, asyncCallback, finalCallback) {
    const resultedArr = [];
    let count = 0;

    // Проверяем не пуст ли массив
    if (arr.length === 0) {
        finalCallback(resultedArr);
        return;
    }

    // Функция для обработки каждого элемента
    arr.forEach(item => {
        asyncCallback(item, (result) => {
            // Если результат истенен, добавляем элемент в результатирующий массив
            if (result) {
                resultedArr.push(item);
            }

            // Увеличиваем счетчик обработки элементов
            count++;

            if (count === arr.length) {
                finalCallback(resultedArr);
            }
        })
    })

}

function isEvenNumber(number, callback) {
    setTimeout(() => {
        callback(number % 2 === 0);
    }, 100);
}

asyncFilter([1, 2, 3, 4, 5, 6], isEvenNumber, (filteredArray) => {
    console.log(filteredArray); // Должно выводить [2, 4, 6]
});

// 4) Асинхронное чтение файла и обработка данных (Node.js)
const fs = require('fs');

function readFileAndProcess(path, callback) {
    fs.readFile(path, 'utf-8', (error, data) => {
        if (error) {
            return callback(error);
        }

        const wordCount = data.split(' ').length;
        callback(null, wordCount);
    })

}

readFileAndProcess('path/to/your/textfile.txt', (error, count) => {
    if (error) {
        console.error('Произошла ошибка:', error);
        return;
    }
    console.log(`Количество слов в файле: ${count}`);
});

// 5) Асинхронная загрузка изображения с колбэком
function loadImage(url, callback) {
    const img = new Image();

    img.onload = function() {
        callback(null, img);
    }

    img.onerror = function() {
        callback(new Error('Не удалось загрузить изображение'));
    }

    img.src = url;
}

// Тестирование функции
loadImage('path/to/your/image.jpg', (error, image) => {
    if (error) {
        console.error('Ошибка при загрузке изображения:', error);
    } else {
        document.body.appendChild(image); // Отображение изображения на странице
        console.log('Изображение успешно загружено');
    }
})

loadImage('path/to/nonexistent/image.jpg', (error, image) => {
    if (error) {
        console.error('Ошибка при загрузке изображения:', error);
    }
});