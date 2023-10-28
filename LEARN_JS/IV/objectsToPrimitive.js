// objectsToPrimitive.js
// 1)
// let user = {
//     name: "John",
//     money: 1000,
//     [Symbol.toPrimitive](hint) {
//         alert(`hint: ${hint}`);
//         return hint === "string" ? this.name : this.money;
//     }
// };

// alert(user > 999);
// alert(user);
// alert("Nick" == user);
// alert("John" == user);

// 2)
// let user = {
//     name: "Nick",
//     money: 1000, 

//     toString() {
//         return this.name;
//     },

//     valueOf() {
//         return this.money;
//     }
// }

// alert(user > 999); // true
// alert(user); // "Nick"
// alert("Nick" == user); // false
// alert("John" == user); // false

// 3)
// let obj = {
//     toString() {
//         return "2";
//     }
// }

// alert(obj * 2); // 4
// alert(obj + 2); // 22

// 4)
// let obj = {};
// alert(1 > obj);