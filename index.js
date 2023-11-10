// leatCode.js
// Counter II
var createCounter = function(init) {
    let curVal = init;

    return {
        increment() {
            return curVal += 1;
        },
        decrement() {
            return curVal -= 1;
        },
        reset() {
            return curVal = init;
        }
    }
};
