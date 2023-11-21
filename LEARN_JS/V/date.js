// date.js

// 1)
const date = new Date(2012, 1, 20, 3, 12, 0, 0);
const today = new Date();

// alert(date);

// 2)
// a)
// function getWeekDate(day) {
//     const weakDay = day.getDay();

//     switch(weakDay) {
//         case 0:
//             console.log('ВС');
//             break;
//         case 1:
//             console.log('ПН');
//             break;
//         case 2:
//             console.log('ВТ');
//             break;
//         case 3:
//             console.log('СР');
//             break;
//         case 4:
//             console.log('ЧТ');
//             break;
//         case 5:
//             console.log('ПТ');
//             break;
//         case 6:
//             console.log('СБ');
//     }
// }

// b)
function getWeekDate(day) {
    const daysOfTheWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    const weekDay = day.getDay();

    return daysOfTheWeek[weekDay];
}

// console.log(getWeekDate(date));
// console.log(getWeekDate(today));

// 3)
function getLocalDay(date) {
    const day = date.getDay();
    if (day === 0) return 7; 
    return day + 1;
}

// console.log(getLocalDay(today));

// 4)
// a)
// function getDateAgo(date, days) {
//     const miliseconds = days * 86400000;
//     const nameOfMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Avg", "Sep", "Oct", "Nov", "Dec"];

//     const copyDate = new Date(date);
//     const difference = +copyDate - miliseconds;
//     const resultedDate = new Date(difference);
//     const month = resultedDate.getMonth();

//     return (`${resultedDate.getDate()} ${nameOfMonth[month]} ${resultedDate.getFullYear()}`);
// }

// b)
function getDateAgo(date, days) {
   const dateCopy = new Date(date);
   
   dateCopy.setDate(date.getDate() - days);

   return dateCopy.getDate();
}

let date2 = new Date(2015, 0, 2);

// console.log( getDateAgo(date2, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date2, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date2, 365) ); // 2, (2 Jan 2014)

// 5)
// a)
// const getLastDayOfMonth = function(year, month) {
//     const date = new Date();

//     date.setFullYear(year);
//     date.setMonth(month + 1);
//     date.setDate(1);

//     const resultedDate = new Date(date);

//     resultedDate.setDate(date.getDate() - 1);

//     return resultedDate.getDate();
// }

// b)
const getLastDayOfMonth = function(year, month) {
    const date = new Date(year, month + 1, 0);

    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

//  6)
// a)
const getSecondsToday = function() {
    const now = new Date();

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    return Math.round((now - today) / 1000);
}

// b)
// const getSecondsToday = function() {
//     const now = new Date();

//     const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//     return (now - today) / 1000;
// }

console.log(getSecondsToday());

// 7)
const getSecondsToTomorrow = function() {
    const now = new Date();
    const tomorrow = new Date();

    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0,0,0,0);

    return Math.round((tomorrow - now) / 1000);
}

console.log(getSecondsToTomorrow());

// 8)
const formatDate = function(date) {
    const now = new Date();
    const diffInSec = Math.round((now - date) / 1000);

    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth();
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours() < 10 ? `0${date.getHours()}`: date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();


    if (diffInSec < 1) {
        return "right now";
    } else if (diffInSec < 60) {
        return `${diffInSec} sec. ago`;
    } else if (diffInSec < 60 * 60) {
        return `${Math.floor(diffInSec / 60)} min. ago`
    } else {
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
console.log( formatDate(new Date(new Date - 86400 * 1000)) );


let user = {
    name: "Василий Иванович",
    age: 35
  };