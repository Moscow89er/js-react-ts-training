// 1)
function incapsulatedFunc1() {
    function curry(f) {
        return function(a) {
            return function(b) {
                return f(a, b);
            }
        }
    }
    
    function sum(a, b) {
        return a + b;
    }
    
    const curriedSum = curry(sum);
    console.log(curriedSum(1)(2));    
}

// incapsulatedFunc1();

// 2) Для того, чтобы запустить код ниже нужно
// подключить к проекту библеотеку lodash
function incapsulatedFunc2() {
    function log(date, importance, message) {
        console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
    }

    // применяем каррирование
    log = _.curry(log);

    log(new Date(), "DEBUG", "some debug"); // log(a, b, c) - будет работать

    log(new Date())("DEBUG")("some debug"); // log(a)(b)(c) - тоже будет работать
}

// 3) Продвинутая реализация каррирования
function incapsulatedFunc3() {
    function curry(func) {
        return function curried(...args) {
            if (args.length >= func.length) {
                return func.apply(this, args);
            } else {
                return function(...args2) {
                    return curried.apply(this, args.concat(args2));
                }
            }
        }
    }
    
    function sum(a, b, c) {
        return a + b + c;
    }
    
    const curriedSum = curry(sum);

    console.log( curriedSum(1, 2, 3) ); // 6, всё ещё можно вызывать нормально
    console.log( curriedSum(1)(2,3) ); // 6, каррирование первого аргумента
    console.log( curriedSum(1)(2)(3) ); // 6, каррирование всех аргументов
}

incapsulatedFunc3();