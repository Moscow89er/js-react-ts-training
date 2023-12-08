// ОС от Макса 06.12
// 1)
const weekDays = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",

    [Symbol.iterator]() {
        let index = 1;

        return {
            next() {
                if (index <= 7) {
                    const current = weekDays[index++];

                    return {
                        done: false,
                        value: current
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

// for (const day of weekDays) {
//     console.log(day);
// }


// 2)
// a)
const colorSpectrum = { 
    red: "#FF0000",
    green: "#00FF00", 
    blue: "#0000FF",

    [Symbol.iterator]() {
        const keys = getKeys(colorSpectrum);

        return {
            next() {
                const current = colorSpectrum[keys[0]];

                if (keys.length !== 0) {
                    keys.shift();

                    return {
                        done: false,
                        value: current
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

function getKeys(obj) {
    const arrOfKeys = [];

    for (let key in obj) {
        arrOfKeys.push(key);
    }

    return arrOfKeys;
}

for (const color of colorSpectrum) {
    console.log(color);
}

// b) оптимальное решение
const colorSpectrum2 = {
    red: "#FF0000",
    green: "#00FF00", 
    blue: "#0000FF",

    [Symbol.iterator]() {
        const keys = Object.keys(colorSpectrum2).filter(key => key !== Symbol.iterator.toString());
        let index = 0;

        return {
            next() {
                if (index < keys.length) {
                    const key = keys[index++];

                    return {
                        done: false,
                        value: colorSpectrum2[key]
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

for (const color of colorSpectrum2) {
    console.log(color);
}