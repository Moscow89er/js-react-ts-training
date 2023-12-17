// errors.js
// 1)
function enterInteger() {
    const num = +prompt('Enter positive integer?', 35);

    let diff, result;

    function fib(n) {
        if (n < 0 || Math.trunc(n) != n) {
            throw new Error("The entered number must be not a negative and not a fractial")
        }

        return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }

    const start = Date.now();

    try {
        result = fib(num);
    } catch(e) {
        result = 0;
    } finally {
        diff = Date.now() - start;
    }

    console.log(result || "An error occurred");
    console.log(`Execution took ${diff}ms`);
}

// enterInteger();

// 2)
function MyErrorFunc() {
    class MyError extends Error {
        constructor(message) {
            super(message);
            this.name = this.constructor.name;
        }
    }
    
    class ValidationError extends MyError {
        constructor() {
            super();
        }
    }
    
    class PropertyRequiredError extends ValidationError {
        constructor(property) {
            super("Нет свойства: " + property);
            this.property = property;
        }
    }
    
    function readUser(json) {
        const user = JSON.parse(json);
    
        if (!user.age) {
            throw new PropertyRequiredError("age");
        }
    
        if (!user.name) {
            throw new PropertyRequiredError("name");
        }
    
        return user;
    }
    
    try {
        const user = readUser('{ "age": 25 }');
    } catch (err) {
        if (err instanceof ValidationError) {
            console.log("Неверные данные: " + err.message);
            console.log(err.name);
            console.log(err.property);
        } else if (err instanceof SyntaxError) {
            console.log("JSON Ошибка синтаксиса: " + err.message);
        } else {
            throw err;
        }
    }
}

// MyErrorFunc();

// 3)
function readErrorFunc() {
    class ReadError extends Error {
        constructor(message, cause) {
          super(message);
          this.cause = cause;
          this.name = 'ReadError';
        }
      }
      
      class ValidationError extends Error { /*...*/ }
      class PropertyRequiredError extends ValidationError { /* ... */ }
      
      function validateUser(user) {
        if (!user.age) {
          throw new PropertyRequiredError("age");
        }
      
        if (!user.name) {
          throw new PropertyRequiredError("name");
        }
      }
      
      function readUser(json) {
        let user;
      
        try {
          user = JSON.parse(json);
        } catch (err) {
          if (err instanceof SyntaxError) {
            throw new ReadError("Синтаксическая ошибка", err);
          } else {
            throw err;
          }
        }
      
        try {
          validateUser(user);
        } catch (err) {
          if (err instanceof ValidationError) {
            throw new ReadError("Ошибка валидации", err);
          } else {
            throw err;
          }
        }
      
      }
      
      try {
        readUser('{bad json}');
      } catch (err) {
        if (err instanceof ReadError) {
          alert(err);
          alert("Исходная ошибка: " + e.cause);
        } else {
          throw err;
        }
      }
}

// readErrorFunc();

// 4)
class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "Format Error";
    }
}

let err = new FormatError("ошибка форматирования");

console.log( err.message ); // ошибка форматирования
console.log( err.name ); // FormatError
console.log( err.stack ); // stack

console.log( err instanceof FormatError );
console.log( err instanceof SyntaxError );