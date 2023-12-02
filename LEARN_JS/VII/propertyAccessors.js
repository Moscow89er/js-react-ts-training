// propertyAccessors.js

// 1)
const firstUser = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        console.log(value.split(" "));
        [this.name, this.surname] = value.split(" ");
    }
};

firstUser.fullName = "Alice Cooper";

// console.log(user.name);
// console.log(user.surname);

// 2)
const secondUser = {
    name: "Nick",
    surname: "Stone"
}

Object.defineProperty(secondUser, "fullName", {
    get() {
        return `${this.name} ${this.surname}`;
    },
    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
})

console.log(secondUser.fullName);

for(let key in secondUser) console.log(key);

// 3)
const thirdUser = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length <= 3) {
            console.log("Вы ввели слишком короткое имя!");
            return;
        }
        
        this._name = value;
    }
}

thirdUser.name = "Pete";
alert(thirdUser.name);

thirdUser.name = "";

// 4)
function User(name, birthday) {
    this.name = name;

    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get() {
            const todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    })
}

const fourthUser = new User ("Nick", new Date(1989, 9, 25));

console.log(fourthUser.birthday);
console.log(fourthUser.age);