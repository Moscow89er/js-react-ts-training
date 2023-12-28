// generators.js
// 1)
const range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
        for(let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
}

console.log([...range]);

// 2) Композиция генераторов

function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

// a)
function* generatePasswordCodes() {
    // 0...9
    yield* generateSequence(48, 57);

    // A...Z
    yield* generateSequence(65, 90);

    // a...z
    yield* generateSequence(97, 122);
}

// b)
function* generateAlphaNum() {
    // yield* generateSequence(48, 57);
    for (let i = 48; i <= 57; i++) yield i;

    // yield* generateSequence(65, 90);
    for (let i = 65; i <= 90; i++) yield i;

    // yield* generateSequence(97, 122);
    for (let i = 97; i <= 122; i++) yield i;
}

let str = "";
let str2 = "";

for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
}

for(let code of generateAlphaNum()) {
    str2 += String.fromCharCode(code);
}

console.log(str);
console.log(str2);

// 3) yield – дорога в обе стороны:
// он не только возвращает результат наружу,
// но и может передавать значение извне в генератор.

function* gen() {
    // Передаём вопрос во внешний код и ожидаем ответа
    const result = yield "2 + 2 = ?";
    console.log(result); // 4

    const result2 = yield "3 * 3 = ?";
    console.log(result2); // 9
}

const generator = gen();
const question = generator.next().value; // yield возвращает значение

// a)
generator.next(4); // передаем результат в генератор
// b)
setTimeout(() => generator.next(9), 2000); // возобновить генератор через некоторое время

setTimeout(() => console.log(generator.next(9).done), 2500); // true

// 4) generator.throw: можно передать не только результат,
// но и инициировать ошибку. Это естественно,
// так как ошибка является своего рода результатом.

function* gen() {
    try {
        const result = yield "2 + 2 = ?";

        console.log("Выполнение программы не дойдёт до этой строки, потому что выше возникнет исключение");
    } catch(e) {
        console.log(e); // покажет ошибку
    }
}

const generator2 = gen();
const question2 = generator2.next().value;

generator2.throw(new Error("Ответ не найден в моей базе данных"));