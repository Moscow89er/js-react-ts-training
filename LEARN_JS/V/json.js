// json.js
//  1)
let user = {
    name: "Василий Иванович",
    age: 35
};

const convertAndRead = function(obj) {
    return JSON.parse(JSON.stringify(obj));
}

console.log(convertAndRead(user));

// 2)
const room = {
    number: 23
};
  
const meetup = {
title: "Совещание",
occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key !== "" && value === meetup ) ? undefined : value;
}, 2));