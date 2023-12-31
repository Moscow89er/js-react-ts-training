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

// 3)
function fetchMultipleUrls(urls) {
    // Используем reduce для создания цепочки промисов.
    // Начальное значение - разрешенный промис с пустым массивом.
    return urls.reduce((chain, url) => {
        // Для каждого URL в массиве urls добавляем новый шаг в цепочку промисов.
        return chain.then(acc => {
            // Выполняем fetch запрос для текущего URL. Fetch возвращает промис.
            return fetch(url)
                // Когда промис от fetch разрешается, преобразуем ответ в JSON.
                // Это также возвращает промис.
                .then(response => response.json())
                // После получения JSON, добавляем его в аккумулирующий массив acc.
                .then(result => {
                    acc.push(result);
                    // Возвращаем аккумулированный массив для следующего шага в цепочке.
                    return acc;
                });
        });
    }, Promise.resolve([])); // Начальное значение цепочки - промис, разрешенный с пустым массивом.
}

const urls = [
    'https://example.com/data1',
    'https://example.com/data2',
    'https://example.com/data3'
];

// fetchMultipleUrls(urls)
//     .then(results => {
//         console.log(results); // Массив результатов от каждого URL
//     })
//     .catch(error => {
//         console.error('Ошибка в запросе:', error);
//     });

// 4)
function fetchDataWithErrorHandling(url) {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.status === 404) {
                throw new Error ("Page Not Found");
            }

            if (response.status === 500) {
                throw new Error ("Server error, please try again later");
            }

            const json = response.json();
            return json;
        })
        .catch(err => {
            console.log(err.message);
        })
}

// fetchDataWithErrorHandling('https://example.com/data')
//     .then(data => console.log(data))
//     .catch(error => console.error('Ошибка запроса:', error));

// 5)
function processDataChain(data) {
    return Promise.resolve(data)
            .then(response => {
                return 'Converted data 1';
            })
            .then(response => {
                return 'Converted data 2';
            })
            .catch(err => {
                console.error(err, err.message);
                throw err;
            })
}

const initialData = Promise.resolve({ ok: true });

processDataChain(initialData)
    .then(finalData => console.log('Итоговые данные:', finalData))
    .catch(error => console.error('Ошибка в процессе обработки данных:', error));

// 6) Использование Promise.all
function aggregateData(urls) {
    // Преобразовываем каждый URL в промис, возвращаемый fetch
    const fetchPromises = urls.map(url => {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: статус ${response.status}`);
                }
                return response.json();
            });
    });

    // Если нужно, чтобы все запросы были завершены (независимо от успеха или
    // неудачи каждого отдельного), можно использовать Promise.allSettled
    return Promise.all(fetchPromises)
        .catch(err => {
            console.error(err);
            // Важно пробросить ошибку дальше
            throw err;
        });
}

const urls2 = ['https://api.example.com/data1', 'https://api.example.com/data2'];
aggregateData(urls2)
    .then(data => console.log(data))
    .catch(error => console.error(error));

// 7)
function fetchWithTimer(url, timeout) {
    const json = fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: статус ${response.status}`);
            }

            return response.json();
        })

    return Promise.race([
        json,
        new Promise((_, reject) => setTimeout(() => reject(new Error ("Таймаут запроса"))), timeout)
    ]).then(console.log);
}

fetchWithTimeout('https://api.example.com/data', 5000) // 5000 миллисекунд таймаут
    .then(data => console.log(data))
    .catch(error => console.error('Ошибка:', error));

// 8)
function executeAll(promises) {
    return Promise.allSettled(promises.map(promise => {
        return promise
            .then(data => {
                return data;
            })
            .catch(err => {
                console.error('Возникла ошибка: ', err);
                return "Возникла ошибка при получении данных";
            })
    }))
}

// 9)
function delay(ms) {
    const seconds = ms / 1000;

    return new Promise(resolve => {
        setTimeout(() => {
        console.log(`Задержка составила: ${seconds} сек.`);
        resolve();
        }, ms);
    });
}

delay(2000).then(() => console.log("Задержка завершена"));

// 10)
function racePromises(firstPromice, secondPromise) {
    return Promise.race([firstPromice, secondPromise]);
}

const one = new Promise((resolve, reject) => {
    setTimeout(() => resolve("One"), 1000);
    // setTimeout(() => reject(new Error("Ошибка в промисе One")), 1000);
})


const two = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Two"), 500);
    // setTimeout(() => reject(new Error("Ошибка в промисе Two")), 500);
})

racePromises(one, two)
    .then((value) => console.log(value))
    .catch((err) => console.error(err));

// 11)
const urls3 = ["https://www.error.site.net/", "https://www.error.site2.net/", "https://www.error.site3.net/"];

function fetchMultipleUrls(urls) {
    return Promise.allSettled(urls.map(url => {
        return fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.status;
                } else {
                    throw new Error(`Ошибка HTTP: статус ${response.status}`);
                }
            })
            .catch(err => {
                console.error(`Ошибка при запросе к ${url}:`, err);
                return err; // Возвращаем ошибку для обработки в allSettled
            })
    }))
}

fetchMultipleUrls(urls3)
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`URL ${urls[index]}: успешно с статусом ${result.value}`);
            } else {
                console.log(`URL ${urls[index]}: не удалось загрузить, ошибка ${result.reason}`);
            }
        })
    })

// 12)
function fetchSequentially(firstUrl, secondUrl) {
    return fetch(firstUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: статус ${response.status}`);
            }

            return response.json();
        })
        .then(firstResult => {
            return fetch(secondUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: статус ${response.status}`);
                }
        
                return response.json();
            })
            .then(secondResult => {
                return { firstResult, secondResult };
            });
        })
        .catch(err => {
            console.error(err);
            throw err; // проброс ошибки для внешней обработки
        });
}

fetchSequentially('https://api.example.com/data1', 'https://api.example.com/data2')
    .then(result => {
        console.log('Результаты запросов:', result);
    })
    .catch(error => {
        console.error('Ошибка при выполнении запросов:', error);
    });

// 13)
function analyzeRequests(urls) {
    const fetchPromises = urls.map(url => fetch(url).then(response => response.json()));

    return Promise.allSettled(fetchPromises)
        .then (results => {
            const analysis = results.reduce((acc, result) => {
                if (result.status === 'fulfilled') {
                    acc.successful++;
                } else {
                    acc.failed++;
                }
                return acc;
            }, { successful: 0, failed: 0 });

            return analysis;
        });
}

analyzeRequests(['https://api.example.com/data1', 'https://nonexistent.example.com', 'https://api.example.com/data2'])
    .then(analysis => console.log('Анализ результатов:', analysis))
    .catch(error => console.error('Ошибка:', error));

// 14)
function loadMultipleUrls(urls) {
    return Promise.all(urls.map(url => fetch(url)
        .then(response => {
            if (response.ok) {
                const data = response.json();
                return data;
            } else {
                throw new Error("Ошибка загрузки данных");
            }
        })
    ))
    .then(results => {
        console.log("Все данные успешно загружены", results);
        return results;
    })
    .catch(err => {
        console.error("Ошибка в одном из запросов", err);
        // Можно здесь решить, нужно ли пробрасывать ошибку дальше или обрабатывать её здесь
        throw err;
    })
}

// 15)
function fetchWithTimeout(url, delay) {
    return Promise.race([
        fetch(url).then(response => response.json()),
        new Promise((_, reject) => 
            setTimeout(() => reject(new Error("Таймаут запроса")), delay)
        )
    ])
}