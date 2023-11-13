// mapSet.js

// 1)
// a)
// function unique(arr) {
//     const set = new Set(arr);
//     const uniqArrOfVal = [];

//     for (let uniqVal of set) {
//         uniqArrOfVal.push(uniqVal);
//     }

//     return uniqArrOfVal;
// }

// b)
// unique = (arr) => [...new Set(arr)];
  
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
  
// alert( unique(values) );

// 2)
aclean = (arr) => {
    let newArr = arr.sort((a, b) => a.length - b.length);



    for (let i = 0; i < newArr.length; i++) {
        for (let j = 1; j < newArr.length; j++) {
            if (arr[j].lenght === arr[i].length) {
                console.log(arr[j].toString().split());
                console.log(arr[i].toString().split());
            }
        }
    }

    return newArr;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );
