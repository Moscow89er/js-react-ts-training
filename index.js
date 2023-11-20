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

    return (now - today) / 1000;
}

// b)
// const getSecondsToday = function() {
//     const now = new Date();

//     const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//     return (now - today) / 1000;
// }

console.log(getSecondsToday());