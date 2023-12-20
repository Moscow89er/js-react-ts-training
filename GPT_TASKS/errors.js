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

// 4)
class FormValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.field = field;
        this.name = "FormValidationError";
    }
}

function validateForm(data) {
    if (!data.email) {
        throw new FormValidationError("Заполните это поле", "email");
    }
}

try {
    validateForm({email: ''});
} catch(err) {
    if (err instanceof FormValidationError) {
        console.error(`Ошибка в поле: '${err.field}': ${err.message}`);
        console.log(err.name);
    }
}

// 5)
class NetworkError extends Error {
    constructor(message, statusCode, url) {
        super(message);
        this.statusCode = statusCode;
        this.url = url;
    }
}

function fetchResource(url) {
    const statusCode = 404;

    if (statusCode >= 400) {
        throw new NetworkError("Ресурс не найден", statusCode, url);
    }
}

try {
    fetchResource("https://example.com/data");
} catch(err) {
    if (err instanceof NetworkError) {
        console.error(
            `Ошибка при запросе на адресс '${err.url}': ${err.message} (Статус: ${err.statusCode})`
        );
        console.log(err.name);
    }
}

// 6)
function getSpecificErrors(num, str) {
    try {
      if (typeof num !== 'number') throw new TypeError("Not a number")
      if (typeof str !== 'string') throw new Error("Second argument must be a string");
    } catch (err) {
      if (err instanceof TypeError) console.log(err.message);
      if (err instanceof Error && err.message === "Second argument must be a string") {
          console.log("Second argument must be a string");
      }
    } finally {
      console.log("Executing of function is done")
    }
  }
  
  getSpecificErrors(42, "test");
  getSpecificErrors("42", 42);
  
  // 7)
  function garantlyClosedFiles(file) {
    try {
      file = "File is open";
      console.log(file);
  
      if (Math.random() * 100 >= 50) {
        throw new Error("Error!");
      }
  
    } catch(err) {
      console.log(`${err.stack}`);
    } finally {
      file = "File is closed";
      console.log(file);
    }
  }
  
  let emptyFile;
  
  garantlyClosedFiles(emptyFile);

  // 8) 
class ApplicationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ApplicationError";
    }
}

class DatabaseError extends ApplicationError {
    constructor(message) {
        super(message);
        this.name = "DatabaseError";
    }
}

class HttpError extends ApplicationError {
    constructor(message) {
        super(message);
        this.name = "HttpError";
    }
}

const str1 = "Приложение";
const str2 = "Сервер";
const str3 = "URL";

function getError(str) {
    try {
        if (str === "Приложение") throw new ApplicationError("Ошибка приложения");
        if (str === "Сервер") throw new DatabaseError("Ошибка сервера");
        if (str === "URL") throw new HttpError("Ошибка ссылки");
    } catch(err) {
        console.log(err.name);
        console.log(err instanceof ApplicationError);
    }
}

// getError(str1);
// getError(str2);
// getError(str3);

// 8)
class WrappingError extends ApplicationError {
    constructor(message, innerException) {
        super(message);
        this.name = "WrappingError";
        this.innerException = innerException;
    }
}  

function parseData(str) {
    try {
        const json = JSON.parse(str);

        if (!json.name) throw new ApplicationError("Не получено имя");

        return json;
    } catch(err) {
        if (err.name === "ApplicationError") console.log(err.name, err.message);
        throw new WrappingError("Ошибка при вызове функции parseData", err);
    }
}

try {
    parseData('{"age": "14"}')
} catch(originalError) {
    console.log(originalError);
}

const data = '{"name": "Igor"}';

parseData(data);