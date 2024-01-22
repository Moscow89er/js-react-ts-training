// callApplyDecorators

// Прозрачное кэширование
// Упомянутый выше кеширующий декоратор не подходит для работы с методами объектов.
function slow(x) {
    alert(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);

        cache.set(x, result);
        return result;
    }
}

slow = cachingDecorator(slow);

// alert(slow(1));
// alert("Again: " + slow(1));

// alert(slow(2));
// alert("Again: " + slow(2));

// Применение «func.call» для передачи контекста.
// 1)
function sayHi() {
    alert(this.name);
}

let user = { name: "Nick" };
let admin = { name: "Mick" };

// sayHi.call(user);
// sayHi.call(admin);

// 2)
function say(phrase) {
    alert(this.name + ': ' + phrase);
}

// say.call(user, "Hello");

let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        alert("Called with " + x);
        return x * this.someMethod();
    }
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }

        let result = func.call(this, x);
        cache.set(x, result);
        return result;
    }
}

worker.slow = cachingDecorator(worker.slow);

// alert(worker.slow(2));
// alert(worker.slow(2));

// Переходим к нескольким аргументам с «func.apply».
const newWorker = {
    slow(min, max) {
        alert(`Called with ${min}, ${max}`);
        return min + max;
    }
}

function advancedCachingDecorator(func, hash) {
    let cache = new Map();

    return function() {
        const key = hash(arguments);
        
        if (cache.has(key)) return cache.get(key);

        let result = func.apply(this, arguments);

        cache.set(key, result);

        return result;
    }
}

function hash(args) {
    return args[0] + ',' + args[1];
}

newWorker.slow = advancedCachingDecorator(newWorker.slow, hash);

// alert( newWorker.slow(3, 5) ); // работает
// alert( "Again " + newWorker.slow(3, 5) ); // аналогично (из кеша)

// Передача всех аргументов вместе с контекстом другой функции
// называется «перенаправлением вызова» (call forwarding).
let wrapper = function() {
    return func.apply(this.arguments);
}

// Заимствование метода
function borrowingMethod() {
    alert( [].join.call(arguments) ); // *
}

// borrowingMethod(1,2,3,4,5);

// 1)
function work(a, b) {
    alert( a + b ); // произвольная функция или метод
}

function spy(func) {

    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}

work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//     alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

// 2)
function f(x) {
    alert(x);
}

function delay(func, miliseconds) {
    return function() {
        setTimeout(() => {
            func.apply(this, arguments);
        }, miliseconds);
    }
}

// создаём обёртки
let f2000 = delay(f, 2000);
let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс


// 3)
function debounce(func, ms) {
    let timeout;

    return function() {
        clearTimeout(timeout);

        timeout = setTimeout(() => func.apply(this, arguments), ms);
    }
}

const func = debounce(alert, 1000);

// setTimeout( () => func("a"), 200);
// setTimeout( () => func("b"), 200);
// setTimeout( () => func("c"), 500);

// 4)
function f(a) {
    console.log(a)
}

function throttle(func, ms) {
    let isThrottled = false;
    let lastThis, lastArguments;

    function wrapper() {
        if (isThrottled) {
            // сохраняем последние аргументы для вызова после таймаута
            lastArguments = arguments;
            lastThis = this;
            return;
        }

        func.apply(this, arguments); // немедленный вызов

        isThrottled = true;

        setTimeout(function() { 
            isThrottled = false; // сброс флага после задержки 
            if (lastArguments) {
                wrapper.apply(lastThis, lastArguments); // вызов с последними аргументами
                lastArguments = lastThis = null;
            }
        }, ms);
    }

    return wrapper;
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);