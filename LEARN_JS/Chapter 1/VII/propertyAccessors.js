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

// 5)
const person = {
    name: "Nick",
    lastName: "Stone",

    get fullName() {
        return this.name + ' ' + this.lastName;
    },

    set fullName(value) {
        [this.name, this.lastName] = value.split(" ");
    }
}

console.log(person.fullName);

person.fullName = "Иван Говнов";

console.log(person.fullName);

// 6)
const newUser = {
    _age: 34,

    get age() {
        return this._age;
    },

    set age(value) {
        if (typeof value === "number" && value > 0) {
            this._age = value;
        }
    }
}

console.log(newUser.age);

newUser.age = 25;

console.log(newUser.age);

// 7)
const settings = {
    _theme: "white",

    get theme() {
        console.log(this._theme);
        return this._theme;
    },

    set theme(value) {
        console.log(this._theme);
        console.log(value);
        if (typeof value === "string" && value.length > 0) {
            this._theme = value;
            console.log(this._theme);
        } else {
            throw new Error("Введите, пожалуйста, текст!");
        }
    }
}

console.log(settings.theme);

settings.theme = "dark";

settings.theme = 55;