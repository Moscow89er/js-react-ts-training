// taskFromAlexandr.js
const users = [
    { userName: "Alice", age: 28 },
    { userName: "Bob", age: 32 },
    { userName: "Charlie", age: 25 },
    { userName: "Daisy", age: 30 },
    { userName: "Edward", age: 35 }
];

function convertToLocalData(dataArray) {
    return dataArray.map((obj, index) => {
        let trueIndex = index + 1;

        let newObj = {
            [`user${trueIndex}_name`]: obj.userName,
            [`user${trueIndex}_age`]: obj.age
        }

        return newObj;
    })
}

console.log(convertToLocalData(users));

/*
[
{
    user1_name: 1,
    user1_age: 1,
},
{
    user2_name: 2,
    user2_age: 2,
}
]
*/