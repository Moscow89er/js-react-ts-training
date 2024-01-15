// intl.js
// 1) Строки, Intl.Collator
function getIncapsulatedStrIntl() {
    const collator = new Intl.Collator();
    console.log(collator.compare("ежик", "яблоко"));
    
    const collator2 = new Intl.Collator(undefined, {
        sensitivity: "accent"
    });
    console.log(collator2.compare("Ежик", "ежик"));
}

// getIncapsulatedStrIntl();

// 2) Даты, Intl.DateTimeFormat
function getIncapsulatedDateIntl() {
    const date = new Date(2014, 11, 31, 12, 30, 0);
    
    const formatter = new Intl.DateTimeFormat("ru", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    console.log(formatter.format(date));
    
    const formatter1 = new Intl.DateTimeFormat("ru");
    console.log(formatter1.format(date));
    
    const formatter2 = new Intl.DateTimeFormat("en-US");
    console.log(formatter2.format(date));
    
    const formatter3 = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });
    console.log(formatter3.format(date));
}

// getIncapsulatedDateIntl();

// 3) Числа, Intl.NumberFormat
function getIncapsulatedNumberIntl() {
    const formatter = new Intl.NumberFormat("ru");
    console.log(formatter.format(1234567890.123)); // 1 234 567 890,123

    const formatter1 = new Intl.NumberFormat("ru", {
        maximumSignificantDigits: 3
    });
    console.log(formatter1.format(1234567890.123)); // 1 230 000 000

    const formatter2 = new Intl.NumberFormat("ru", {
        style: "currency",
        currency: "GBP",
        minimumFractionDigits: 2
    });
    console.log(formatter2.format(1234.5)); // // 1 234,50 £
}

// getIncapsulatedNumberIntl();

// Задача
let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

collator = new Intl.Collator(undefined, {
    usage: "sort"
})

collator.compare(animals);

console.log(animals);