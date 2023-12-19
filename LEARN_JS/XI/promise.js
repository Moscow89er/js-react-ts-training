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