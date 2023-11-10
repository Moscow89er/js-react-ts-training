// leatCode.js
// Counter II
// var createCounter = function(init) {
//     let curVal = init;

//     return {
//         increment() {
//             return curVal += 1;
//         },
//         decrement() {
//             return curVal -= 1;
//         },
//         reset() {
//             return curVal = init;
//         }
//     }
// };


function sortDict(dict) {
    let newArr = Object.entries(dict);

    for (arr of newArr) {
        arr[0] = isNaN(Number(arr[0])) ? arr[0] : Number(arr[0]);
    }

    return newArr.sort((a, b) => b[1] - a[1]);
}

console.log(sortDict({3:1, 2:2, 1:3}));
console.log(sortDict({1:2, 2:4, 3:6}));