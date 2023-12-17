// 1)
const validJSON = '{"name": "Alice", "age": 30}';
const invalidJSON = 'invalid json';

function parseJSON(jsonString) {
    try {
        const validObj = JSON.parse(jsonString);
        console.log(validObj);
    } catch(err) {
        console.log(null);
    }
}

// parseJSON(validJSON);
// parseJSON(invalidJSON);

// 2)
const obj = { name: 'Alice' };
const keyName = 'name';
const invalidObj = null;


function getProperty(obj, key) {
    try {
        if (obj.hasOwnProperty(key)) {
            console.log(obj[key]);
        }
    } catch {
        console.log(undefined);
    }
}

// getProperty(obj, keyName);
// getProperty(invalidObj, keyName);

// 3)
const textFile = 'data.text';
const numberFile = 1;

function processFile(outerFile) {
    let file = outerFile;

    try {
        if (typeof file !== "string") {
            throw new SyntaxError("Тип данных не поддерживается");
        }
        console.log(file = file + ' ver.2');
    } catch(err) {
        console.error(err.message, err.name, err.stack)
    } finally {
        console.log('Closing file: ', file);
    }
}

// processFile(textFile);
// processFile(numberFile);