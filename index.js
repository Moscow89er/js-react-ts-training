// proxy.js
// 1)
function getSimpleProxy() {
    const target = {};
    const proxy = new Proxy(target, {}); // пустой handler
    
    proxy.test = 5;
    
    console.log(target.test);
    console.log(proxy.test);
    
    for (let key in proxy) console.log(key);
}

// getSimpleProxy();

// 2)
function getSimpleProxyWithTrapGet() {
    let numbers = [0, 1, 2];

    numbers = new Proxy(numbers, {
        get (target, prop) {
            if (prop in target) {
                return target[prop];
            } else {
                return 0; // значение по умолчанию
            }
        }
    });

    console.log(numbers[1]); // 1
    console.log(numbers[123]); // 0 (нет такого элемента)
}

// getSimpleProxyWithTrapGet();

// 3)
function getDictionaryProxy() {
    let dictionary = {
        "Hello": "Hola",
        "Bye": "Adios"
    };

    dictionary = new Proxy(dictionary, {
        get(target, phrase) {
            if (phrase in target) {
                return target[phrase];
            } else {
                // иначе возвращаем непереведённую фразу
                return phrase;
            }
        }
    });

    console.log(dictionary["Hello"]); // Hola
    console.log(dictionary["Welcome to Proxy"]); // Welcome to Proxy
}

// getDictionaryProxy();

// 4)
function proxyValidationWithTrapSet() {
    let numbers = [];

    numbers = new Proxy(numbers, {
        set(target, prop, val) {
            if (typeof val === "number") {
                target[prop] = val;
                return true;
            } else {
                return false;
            }
        }
    });

    numbers.push(1);
    numbers.push(2);
    console.log("Length: " + numbers.length); // 2

    numbers.push("тест"); // TypeError (ловушка set на прокси вернула false)

    console.log("Интерпретатор никогда не доходит до этой строки (из-за ошибки в строке выше)");
}

proxyValidationWithTrapSet();