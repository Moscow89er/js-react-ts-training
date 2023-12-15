Object.prototype.forEach = function(callback) {
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            callback(this[key], key, this);
        }
    }

    return this;
}

const obj = {
    0: 1,
    1: 2,
    2: 3,
    3: 4
}


obj.forEach((value, key) => {
    let multiplyer = 5;

    console.log(multiplyer *= value);
});