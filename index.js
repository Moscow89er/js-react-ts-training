// date.js

// 1)
const date = new Date(2012, 1, 20, 3, 12, 0, 0);
const today = new Date();

// alert(date);

// 2)
function getWeekDate(day) {
    const weakDay = day.getDay();

    switch(weakDay) {
        case 0:
            console.log('ВС');
            break;
        case 1:
            console.log('ПН');
            break;
        case 2:
            console.log('ВТ');
            break;
        case 3:
            console.log('СР');
            break;
        case 4:
            console.log('ЧТ');
            break;
        case 5:
            console.log('ПТ');
            break;
        case 6:
            console.log('СБ');
    }
}

getWeekDate(date);
getWeekDate(today);