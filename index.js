// bitwiseOperators.js
// 1) Вспомогательные функции
const access = parseInt("11000", 2);
// console.log(access);

const access2 = access.toString(2);
// console.log(access2);

// 2) Нужно запомнить ~n == -(n+1)
// console.log(~3); // -4
// console.log(~-1); // 0

// 3)
function checkAccessRights() {
    const ACCESS_ADMIN = 1; // 00001
    const ACCESS_GOODS_EDIT = 2; // 00010
    const ACCESS_GOODS_VIEW = 4; // 00100
    const ACCESS_ARTICLE_EDIT = 8; // 01000
    const ACCESS_ARTICLE_VIEW = 16; // 10000

    // Получить комбинацию доступов можно при помощи операции '|'
    const guest = ACCESS_ARTICLE_VIEW | ACCESS_GOODS_VIEW; // 10100
    const editor = guest | ACCESS_ARTICLE_EDIT | ACCESS_GOODS_EDIT; // 11110
    const admin = editor | ACCESS_ADMIN // 11111

    // чтобы понять, есть ли в доступе editor нужный доступ,
    // например управление правами – достаточно применить к
    //  нему побитовый оператор И (&) с соответствующей константой.

    // Ненулевой результат будет означать, что доступ есть:
    console.log(editor & ACCESS_ADMIN); // 0, доступа нет
    console.log(editor & ACCESS_ARTICLE_EDIT); // 8, доступ есть

    // проверка
    const check = ACCESS_GOODS_VIEW | ACCESS_GOODS_EDIT // 6, 00110

    console.log(admin & check); // не 0, значит есть доступ к просмотру ИЛИ изменению
}

// checkAccessRights();

// 4) Округление
function getResultsOfRounding() {
    console.log(~~12.345); // 12

    console.log(12.345 ^ 0); // 12

    console.log(12.3 * 14.5 ^ 0); // (=178) "12.3 умножить на 14.5 и округлить"

    //  побитовых операторов достаточно низкий приоритет, он меньше чем у остальной арифметики
    console.log(1.1 + 1.2 ^ 0); // 2, сложение выполнится раньше округления
}

// getResultsOfRounding();

// 5) Проверка на -1 ( ~n = -(n+1) )
function checkResult() {
    const n = 5;
    const b = -1;
    const str = "Проверка";

    if (~n) { // сработает, т.к. ~n = -(5+1) = -6
        console.log("n не -1"); // // выведет!
    }

    if (~b) {   // не сработает, т.к. ~b = -(-1+1) = 0
        console.log("...ничего не выведет...");
    }

    if (~str.indexOf("верка")) { // Сочетание "if (~...indexOf)" читается как "если найдено"
        console.log("Найдено!");
    }
}

// checkResult();

// 6) Умножение и деление на степени
function getResultFromMulAndDivByPows() {
    // Оператор a << b, сдвигая биты, по сути умножает a на 2 в степени b
    console.log(1 << 2); // 1*(2*2) = 4
    console.log(1 << 3); // 1*(2*2*2) = 8
    console.log(3 << 3); // 3*(3*3*3) = 24

    // Оператор сдвига в другую сторону a >> b,
    // производит обратную операцию – целочисленное деление a на 2 в степени b
    console.log(8 >> 2); // 2 = 8/4, убрали 2 нуля в двоичном представлении
    console.log(11 >> 2); // 2, целочисленное деление (менее значимые биты просто отброшены)
}

getResultFromMulAndDivByPows();