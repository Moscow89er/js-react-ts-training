// 1)
// a) callback
function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Error loading script ${src}`));

    document.head.append(script);
}

// b) promise
function loadScriptOnPromise(src) {
    return new Promise(function(resolve, reject) {
        const script = document.createElement("script");
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Error loading script ${src}`));

        document.head.append(script);
    })
}

const promise = loadScriptOnPromise("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

// promise.then(
//     script => console.log(`${script.src} was loaded!`),
//     error => console.log(`Error: ${error.message}`)
// );

// promise.then(script => console.log('Yet another handler...'));

// c) пример promise chaining
// loadScriptOnPromise("/article/promise-chaining/one.js")
//     .then(script => loadScriptOnPromise("/article/promise-chaining/two.js"))
//     .then(script => loadScriptOnPromise("/article/promise-chaining/three.js"))
//     .then(script => {
//         // скрипты загружены, мы можем использовать объявленные в них функции
//         one();
//         two();
//         three();
//     });

// 2)
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

// delay(3000).then(() => console.log('выполнилось через 3 секунды'));

// 3)
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function(result) {
    console.log(result);

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000)
    });

}).then(function(result) {
    console.log(result);

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
      });
    
}).then(function(result) {
    console.log(result);
    
});

// 4)
class Thenable {
    constructor(num) {
        this.num = num;
    }

    then(resolve, reject) {
        console.log(resolve);

        setTimeout(() => resolve(this.num * 2), 1000);
    }
}

new Promise(resolve => resolve(1))
    .then(result => {
        return new Thenable(result);
    })
    .then(console.log);

// 5) 
//  a) fetch
// Запрашиваем user.json
fetch('/article/promise-chaining/user.json')
    // Загружаем данные в формате json
    .then(response => response.json())
    // Делаем запрос к GitHub
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    // Загружаем ответ в формате json
    .then(response => response.json())
    // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
    .then(githubUser => new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    }))
    // срабатывает через 3 секунды
    .then(githubUser => console.log(`Закончили показ ${githubUser.name}`))
    .catch(error => console.log(error.message));

// b) тоже самое, но написааное на переиспользуемых функциях
function loadJson(url) {
    return fetch(url)
        .then(response => response.json());
}

function loadGithubUser(name) {
    return fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json());
}

function showAvatar(githubUser) {
    return new Promise(function(resolve, reject) {
        const img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    });
}

loadJson('/article/promise-chaining/user.json')
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)
    .then(githubUser => console.log(`Показ аватара ${githubUser.name} завершён`));

// 6) обработка ошибок
// a)
new Promise((resolve, reject) => {
    resolve("ok");
}).then((result) => {
    throw new Error("Ошибка!"); // генерируем ошибку
}).catch(alert); // Error: Ошибка!

// b)
new Promise((resolve, reject) => {
    resolve("ok");
}).then((result) => {
    blabla(); // такой функции нет
}).catch(console.log());

// 7) пробрасывание ошибок
// a) the execution: catch -> then
new Promise((resolve, reject) => {
    throw new Error("Ошибка!");
}).catch(function(error) {
    console.log("Ошибка обработана, продолжить работу")
}).then(() => console.log("Управление перейдёт в следующий then"));

// b) // the execution: catch -> catch -> then
new Promise((resolve, reject) => {
    throw new Error("Ошибка!");
}).catch(function(error) {
    if (error instanceof URIError) {
        // обрабатываем ошибку
    } else {
        console.log("Не могу обработать ошибку");
        throw error; // пробрасывает эту или другую ошибку в следующий catch
    }
}).then(function() {
    // не выполнится
}).catch(error => {
    console.log(`Неизвестная ошибка: ${error}`);
    // ничего не возвращаем => выполнение продолжается в нормальном режиме
});

// 8) Promise.all
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))
]).then(console.log);

// 9)
const urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

const requests = urls.map(url => fetch(url));

Promise.all(requests)
    .then(responses => responses.forEach(
        response => alert(`${response.url}: ${response.status}`)
    ));

// 10)
const names = ['iliakan', 'remy', 'jeresig'];

const requests2 = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests2)
    .then(responses => {
        // все промисы успешно завершены
        for (let response of responses) {
            alert(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
        }

        return responses;
    })
    // преобразовать массив ответов response в response.json(),
    // чтобы прочитать содержимое каждого
    .then(responses => Promise.all(responses.map(r => r.json())))
    // все JSON-ответы обработаны, users - массив с результатами
    .then(users => users.forEach(user => console.log(user.name)));

// 11)
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(console.log);

Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000)
    }),
    2,
    3
]).then(console.log);

// 12) Promise.allSettled
Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => {
        results.forEach((result, num) => {
            if (result.status === "fulfilled") {
                console.log(`${urls[num]}: ${result.value.status}`);
            }
            if (result.status === "rejected") {
                console.log(`${urls[num]}: ${result.reason}`);
            }
        });
    });

// 13) Promise.race
Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)), // выполнится только первый, остальные игнорируются
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log);

// 14) Promise.any
Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)), // выполнится только первый успешно выполненный
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert);

// 15)  
Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ещё одна ошибка!")), 2000))
]).catch(error => {
    console.log(error.constructor.name); // AggregateError
    console.log(error.errors[0]); // Error: Ошибка!
    console.log(error.errors[1]); // Error: Ещё одна ошибка!
});

// 16) Promise.resolve
const cache = new Map();

function loadCached(url) {
    if (cache.has(url)) {
        return Promise.resolve(cache.get(url));
    }

    return fetch(url)
        .then(response => response.text())
        .then(text => {
            cache.set(url, text);
            return text;
        });
}