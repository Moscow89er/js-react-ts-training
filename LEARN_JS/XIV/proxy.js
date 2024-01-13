// PROXY
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
function validationProxyWithTrapSet() {
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

// validationProxyWithTrapSet();

// 5)
function filterProxyKeys() {
    let user = {
        name: "Vasya",
        age: 30,
        _password: "****"
    };

    user = new Proxy(user, {
        ownKeys(target) {
            return Object.keys(target).filter(key => !key.startsWith('_'));
        }
    });

    for (let key in user) console.log(key); // name, age

    // аналогичный эффект для этих методов:
    console.log(Object.keys(user));
    console.log(Object.values(user));
}

// filterProxyKeys();

// 6)
function returnProxyKeys() {
    let user = { };

    user = new Proxy(user, {
        ownKeys(target) {
            return ["a", "b", "c"]; // вызывается 1 раз для получения списка свойств
        },

        // получение дескриптора нужно перехватывать только если свойство отсутствует в самом объекте
        getOwnPropertyDescriptor(target, prop) { // вызывается для каждого свойства
            return {
                enumerable: true,
                configurable: true
                /* ...другие флаги, возможно, "value: ..." */
            }
        }
    });

    console.log(Object.keys(user)); // a, b, c
}

// returnProxyKeys();

// 7)
function protectedProxyValues() {
    let user = {
        name: "Vasya",
        _password: "****"
    };

    user = new Proxy(user, {
        get(target, prop) {
            if (prop.startsWith("_")) {
                throw new Error("Access denied");
            } else {
                const value = target[prop];

                // метод самого объекта, например user.checkPassword(), должен иметь доступ к свойству _password
                return (typeof value === "function") ? value.bind(target) : value;
            }
        },

        set(target, prop, val) { // перехватываем запись свойства
            if (prop.startsWith('_')) {
                throw new Error("Access denied");
            } else {
                target[prop] = val;
                return true;
            }
        },

        deleteProperty(target, prop) { // перехватываем удаление свойства
            if (prop.startsWith("_")) {
                throw new Error("Access denied");
            } else {
                delete target[prop];
                return true;
            }
        },

        ownKeys(target) { // перехватываем попытку итерации
            return Object.keys(target).filter(key => !key.startsWith("_"));
        }
    });

    // "get" не позволяет прочитать _password
    try {
        console.log(user._password); // Error: Отказано в доступе
    } catch(e) { console.log(e.message); }

    // "set" не позволяет записать _password
    try {
        user._password = "test"; // Error: Отказано в доступе
    } catch(e) { console.log(e.message); }

    // "deleteProperty" не позволяет удалить _password
    try {
        delete user._password; // Error: Отказано в доступе
    } catch(e) { console.log(e.message); }

    // "ownKeys" исключает _password из списка видимых для итерации свойств
    for(let key in user) console.log(key); // name
}

// protectedProxyValues();

// 8)
function checkRangeWithProxy() {
    let range = {
        start: 1,
        end: 10
    }

    range = new Proxy(range, {
        has(target, prop) {
            return prop >= target.start && prop <= target.end
        }
    });

    console.log(5 in range); // true
    console.log(50 in range); // false
}

// checkRangeWithProxy();

// 9)
// a)
function wrappingFunction() {
    function delay(f, ms) {
        // возвращает обёртку, которая вызывает функцию f через таймаут
        return function() {
            setTimeout(() => f.apply(this, arguments), ms);
        };
    }

    function sayHi(user) {
        console.log(`Привет, ${user}!`);
    }

    console.log(sayHi.length); // 1 (в функции length - это число аргументов в её объявлении)

    // после обёртки вызовы sayHi будут срабатывать с задержкой в 3 секунды
    sayHi = delay(sayHi, 3000);

    console.log(sayHi.length); // 0 (в объявлении функции-обёртки ноль аргументов)

    sayHi("Вася");
}

// wrappingFunction();

// b)
function wrappingFunctionWithProxy() {
    function delay(f, ms) {
        return new Proxy(f, {
            apply(target, thisArg, args) {
                setTimeout(() => target.apply(thisArg, args), ms);
            }
        });
    }

    function sayHi(user) {
        console.log(`Hello, ${user}!`);
    }

    sayHi = delay(sayHi, 4000);

    // 1 прокси перенаправляет чтение свойства length на исходную функцию
    console.log(sayHi.length);

    sayHi("Vasya");
}

// wrappingFunctionWithProxy();

// REFLECT
// 1)
function getBasicReflectObj() {
    let user = {};

    Reflect.set(user, "name", "Vasya");

    console.log(user.name);
}

// getBasicReflectObj();

// 2)
function representProxyWithReflect() {
    let user = {
        name: "Vasya"
    };

    user = new Proxy(user, {
        get(target, prop, receiver) {
            console.log(`GET ${prop}`);

            return Reflect.get(target, prop, receiver); // читаем свойство объекта
        },

        set(target, prop, val, receiver) {
            console.log(`SET ${prop}=${val}`);

            // записываем свойство и возвращаем true при успехе, иначе false
            return Reflect.set(target, prop, val, receiver); 
        }
    });

    let name = user.name; // выводит "GET name"
    user.name = "Petya"; // выводит "SET name=Petya"
}

// representProxyWithReflect();

// 3)
function getCorrectInheritanceWithProxy() {
    let user = {
        _name: "Guest",
        get name() {
            return this.name;
        }
    };

    const userProxy = new Proxy(user, {
        get (target, prop, receiver) {
            return Reflect.get(target, prop, receiver);

            // или
            // return Reflect.get(...arguments);
        }
    });

    const admin = {
        __proto__: userProxy,
        _name: "Admin"
    };

    console.log(admin._name);
}

// getCorrectInheritanceWithProxy();

// PROBLEMS WITH PROXY

// 1)
function getMapWithStaticMethodsWithProxy() {
    let map = new Map();

    const proxy = new Proxy(map, {
        get(target, prop, receiver) {
            const value = Reflect.get(...arguments);
            return typeof value === "function" ? value.bind(target) : value;
        }
    });

    proxy.set("test", 1);
    console.log(proxy.get("test")); // 1 (работает)
}

// getMapWithStaticMethodsWithProxy();

// 2)
function getPrivateValueWithProxy() {
    class User {
        #name = "Guest";

        getName() {
            return this.#name;
        }
    }

    let user = new User();

    user = new Proxy(user, {
        get(target, prop, receiver) {
            const value = Reflect.get(...arguments);
            return typeof value === "function" ? value.bind(target) : value;
        }
    });

    console.log(user.getName());
}

// getPrivateValueWithProxy();

// 3) Прокси != оригинальный объект
function getComparisonOriginalObjWithProxy() {
    const allUsers = new Set();
    
    class User {
        constructor(name) {
            this.name = name;
            allUsers.add(this);
        }
    }
    
    let user = new User("Vasya");
    
    console.log(allUsers.has(user)); // true
    
    user = new Proxy(user, {});
    
    console.log(allUsers.has(user)) // false
}

// getComparisonOriginalObjWithProxy();

// 4)
function getRevocableProxy() {
    const obj = {
        data: "Important data"
    };

    const {proxy, revoke} = Proxy.revocable(obj, {});

    // передаём прокси куда-нибудь вместо оригинального объекта...
    console.log(proxy.data); // Important data

    // позже в коде
    revoke();

    // прокси больше не работает (отключён)
    console.log(proxy.data); // Error
}

// getRevocableProxy();

// 5)
function getMappedRevocableProxy() {
    const revokes = new WeakMap();

    const obj = {
        data: "Important data"
    };

    let {proxy, revoke} = Proxy.revocable(obj, {});

    revokes.set(proxy, revoke);

    // позже в коде
    revoke = revokes.get(proxy);
    revoke();

    console.log(proxy.data); // Ошибка (прокси отключён)
}

// getMappedRevocableProxy();

// TASKS FROM LJS
// 1)
// a)
function incapsulatedFirstTaskVarA() {
    let user = {
        name: "John"
    };

    function wrap(target) {
        return new Proxy(target, {
            get(target, prop, receiver) {
                if (target[prop] === undefined) {
                    throw new Error(`There is no ${prop} key`);
                } else {
                    return target[prop];
                }
            }
        });
    }

    user = wrap(user);

    console.log(user.name); // John
    console.log(user.age); // Error
}

// incapsulatedFirstTaskVarA();

// b)
function incapsulatedFirstTaskVarB() {
    let user = {
        name: "John"
    };

    function wrap(target) {
        return new Proxy(target, {
            get(target, prop, receiver) {
                if (prop in target) {
                    return Reflect.get(target, prop, receiver);
                } else {
                    throw new ReferenceError(`There is no ${prop} key`);
                }
            }
        });
    }

    user = wrap(user);

    console.log(user.name); // John
    console.log(user.age); // Error
}

// incapsulatedFirstTaskVarB();

// 2)
// a)
function incapsulatedSecondTaskVarA() {
    let array = [1, 2, 3];

    array = new Proxy(array, {
        get(target, prop, receiver) {
            if (prop < 0) {
                return target[target.length - (-prop)];
            } else {
                return target[prop];
            }
        }
    });

    console.log( array[-1] ); // 3
    console.log( array[-2] ); // 2
}

// incapsulatedSecondTaskVarA();

// b)
function incapsulatedFirstTaskVarB() {
    let array = [1, 2, 3];

    array = new Proxy(array, {
        get(target, prop, receiver) {
            if (prop < 0) {
                // даже если обращение к элементу идёт как arr[1]
                // prop является строкой, нужно преобразовать её к числу
                prop = +prop + target.length;
            }

            return Reflect.get(target, prop, receiver);
        }
    });

    console.log( array[-1] ); // 3
    console.log( array[-2] ); // 2
}

// incapsulatedFirstTaskVarB();

// 3)
function incapsulatedSecondTask() {
    const handlers = Symbol("handlers");

    function makeObservable(target) {
        target[handlers] = [];

        target.observe = function(handler) {
            this[handlers].push(handler);
        }

        return new Proxy(target, {
            set(target, prop, val, receiver) {
                // Успешное присваивание значения свойству
                let success = Reflect.set(target, prop, val, receiver);
                if (success) { // Если присваивание успешно
                    // Вызов всех обработчиков с новым значением
                    target[handlers].forEach(handler => handler(prop, val));
                }
                return success;
            },
        });
    }

    let user = {};
    user = makeObservable(user);

    user.observe((key, value) => {
        console.log(`SET ${key}=${value}`);
    });

    user.name = "John"; // выводит: SET name=John
}

incapsulatedSecondTask();