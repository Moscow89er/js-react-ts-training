// weakmapWeakset.js

// 1)
// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ];

// const readedMessages = new WeakSet();

// readedMessages.add(messages[0]);
// readedMessages.add(messages[1]);

// console.log("Was the first message readed: " + readedMessages.has(messages[0]));
// console.log("Was the second message readed: " + readedMessages.has(messages[1]));
// console.log("Was the third message readed: " + readedMessages.has(messages[2]));

// messages.shift();

// console.log("Was the first message readed: " + readedMessages.has(messages[0]));
// console.log("Was the second message readed: " + readedMessages.has(messages[1]));
// console.log("Was the third message readed: " + readedMessages.has(messages[2]));

// 2)
// let messages = [
//     { text: "Hello", from: "John" },
//     { text: "How goes?", from: "John" },
//     { text: "See you soon", from: "Alice" }
// ];

// const whenWasReaded = new Map();

// whenWasReaded.set(messages[0], new Date(2023, 11, 14));

// console.log(whenWasReaded);