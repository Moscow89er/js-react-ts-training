// ОС ОТ МАКСА 15.11.2023
//*1 unshift под капотом
const unshiftMaxVersion = function(arr, ...arg) {
    arr.splice(0, 0, ...arg);
    return arr.length;
}

const unshiftMyVersion = function(arr, ...args) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + args.length] = arr[i];
    }

    for (let j = 0; j < args.length; j++) {
        arr[j] = args[j];
    }

    return arr;
}

const arr = [1, 2, 3];

console.log(unshift(arr, 2,3,4));

//*2
const myWeakMap = new WeakMap();

function processTest() {
    const a = {};
    const b = a;
    myWeakMap.set(a, "AAA");

    const c = b;

    return c;
}

const c = processTest();

// console.log(myWeakMap.get(c));