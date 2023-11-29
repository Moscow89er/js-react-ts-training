// closure.js
// 1)
function generateUniqId() {
    let arrOfId = new Set();

    return function() {
        let newId;

        do {
            newId = Math.floor(Math.random() * 1000)
        } while (arrOfId.has(newId));
        
        arrOfId.add(newId);

        return newId;
    }
}

const newId = generateUniqId();
console.log(newId());
console.log(newId());
console.log(newId());
