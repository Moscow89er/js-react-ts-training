// string.js
// 1)
// let str = "Ослик Иа-Иа посмотрел на виадук";

// let target = "Иа";

// let pos = 0;

// while(true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;

//     alert(`Найдено тут: ${foundPos}`);
//     pos = foundPos + 1;
// }

// или

// let str = "Ослик Иа-Иа посмотрел на виадук";
// let target = "Иа";

// let pos = -1;
// while((pos = str.indexOf(target, pos + 1)) != -1) {
//     alert(pos);
// }

// 2)
// function ucFirst(str) {
//     if (!str) return str;

//     return str[0].toUpperCase() + str.slice(1);
// }

// alert(ucFirst("vasya"));

// 3)
// a)
// function checkSpam(str) {
//     if (!str) return false;

//     let lowerStr = str.toLowerCase();

//     if (lowerStr.includes("viagra") || lowerStr.includes("xxx")) {
//         return true;
//     }

//     return false;
// }

// b)
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();

//     return lowerStr.includes("viagra") || lowerStr.includes("xxx");
// }

// alert(checkSpam('buy ViAgRA now'));
// alert(checkSpam('free xxxxx'));
// alert(checkSpam("innocent rabbit"));

// 4)
// a)
// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         return str.substring(0, maxlength - 3) + "...";
//     }

//     return str;
// }

// b)
// function truncate(str, maxlength) {
//     return str.length > maxlength ? str.substring(0, maxlength - 3) + "..." : str;
// }

// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// alert(truncate("Всем привет!", 20));

// 5)
// a)
// function extractCurrencyValue(str) {
//     let arr = [];

//     let arrOfStr = str.split('').map(a => +a);

//     for (let i = 0; i < arrOfStr.length; i++) {
//         if (typeof(arrOfStr[i]) === 'number' && Number.isNaN(arrOfStr[i]) === false) {
//             arr.push(arrOfStr[i]);
//         }
//     }
//     return +arr.join('');
// }

// alert(extractCurrencyValue('$120'));
// alert(extractCurrencyValue('$sadasd120sds32423asdas'));

// b)
// function extractCurrencyValue(str) {
//     return +str.replace(/\D/g, "");
// }