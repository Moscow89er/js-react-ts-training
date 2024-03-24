function searchAndReplace() {
    // Задача 1: Поиск и Замена
    // Задание: Напишите функцию, которая принимает в качестве аргументов сложный вложенный объект
    // и два значения: oldValue и newValue. Функция должна обходить все уровни вложенности данного
    // объекта и заменять каждое вхождение oldValue на newValue. Функция должна учитывать циклические
    // ссылки в объекте и корректно обрабатывать специальные типы объектов (например, массивы, даты).
    
    let complexObject = {
      name: "Alice",
      age: 30,
      hobbies: ["reading", "cycling", "hiking"],
      education: {
        primary: "Springfield Elementary",
        highSchool: "Springfield High",
        college: "Springfield College"
      },
      workExperience: [
        {
          company: "Tech Solutions",
          position: "Developer",
          years: 5
        },
        {
          company: "Innovate Tech",
          position: "Senior Developer",
          years: "3"
        }
      ],
      favoriteQuote: "To be or not to be, that is the question.",
      personalInfo: {
        spouse: {
          name: "Bob",
          age: 32,
          hobbies: ["golfing", "fishing"]
        },
        children: [
          {
            name: "Charlie",
            age: 5,
            favoriteToy: "Lego"
          }
        ]
      }
    };
    
    // Добавляем циклическую ссылку
    complexObject.personalInfo.spouse.partner = complexObject;
    complexObject.self = complexObject;
    
    // Добавляем специальный тип объекта - дату
    complexObject.anniversary = new Date("2015-06-15");
    
    function replaceValues(obj, oldValue, newValue, visited = new Set()) {
      if (visited.has(obj)) {
        return;
      }
    
      if (typeof obj === "object" && obj !== null && !(obj instanceof Date)) {
        visited.add(obj);
    
        if (Array.isArray(obj)) {
          for (let i = 0; i < obj.length; i++) {
            if (typeof obj[i] === "object") {
              replaceValues(obj[i], oldValue, newValue, visited);
            } else if (obj[i] === oldValue) {
              obj[i] = newValue;
            }
          }
        } else {
          for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
              let value = obj[key];
      
              if (value === oldValue) {
                obj[key] = newValue;
              } else {
                replaceValues(value, oldValue, newValue, visited);
              }
            }
          } 
        }
      }
    }
    
    replaceValues(complexObject, "Alice", "Igor");
    replaceValues(complexObject, 30, 40);
    
    console.log(complexObject);
  }
  
  searchAndReplace();
  
  function serializeObj() {
    // Задача 2: Сериализация объекта
    // Задание: Создайте функцию сериализации объекта в строку JSON, которая может обрабатывать
    // циклические ссылки и специальные типы данных (Date, Function, RegExp). Вместо того, чтобы
    // выбрасывать ошибку при обнаружении циклических ссылок, функция должна заменять повторные
    // ссылки на специальный объект, указывающий на путь к месту первого вхождения объекта.
    // Специальные типы данных должны сериализоваться в информативные строки.
    
    let complexObject = {
      name: "Alice",
      age: 30,
      hobbies: ["reading", "cycling", "hiking"],
      education: {
        primary: "Springfield Elementary",
        highSchool: "Springfield High",
        college: "Springfield College"
      },
      workExperience: [
        {
          company: "Tech Solutions",
          position: "Developer",
          years: 5
        },
        {
          company: "Innovate Tech",
          position: "Senior Developer",
          years: "3"
        }
      ],
      favoriteQuote: "To be or not to be, that is the question.",
      personalInfo: {
        spouse: {
          name: "Bob",
          age: 32,
          hobbies: ["golfing", "fishing"]
        },
        children: [
          {
            name: "Charlie",
            age: 5,
            favoriteToy: "Lego"
          }
        ]
      }
    };
    
    // Добавляем циклическую ссылку
    complexObject.personalInfo.spouse.partner = complexObject;
    complexObject.self = complexObject;
    
    // Добавляем специальный тип объекта - дату
    complexObject.anniversary = new Date("2015-06-15");
    
    function serializeWithCycles(obj) {
      const seenObjects = new Map();
  
      function replacer(key, value) {
        const path = this.path || "root";
  
        if (typeof value === "object" && value !== null) {
            if (seenObjects.has(value)) {
              // Если объект уже встречался, возвращаем ссылку на путь
              return { cyclicReference: seenObjects.get(value) };
            }
            // Для нового объекта сохраняем его текущий путь
            const newPath = path === "root" ? key : `${path}.${key}`;
            seenObjects.set(value, newPath);
        }
  
        // Обработка специальных типов
        if (value instanceof Date) {
          return `Date(${value.toISOString()})`;
        } else if (typeof value === "function") {
          return `Function(${value.name})`;
        } else if (value instanceof RegExp) {
          return `RegExp(${value})`;
        }
  
        return value; // Возвращаем значение, если оно не требует специальной обработки
      }
  
      return JSON.stringify(obj, function (key, value) {
        if (!this.path) {
            this.path = []; // Инициализация пути для корневого объекта
        }
      
        // Ключ для массивов или ключевое значение для объектов
        const actualKey = Array.isArray(this) ? `[${key}]` : key;
    
        if (key !== "") {
            this.path.push(actualKey); // Обновляем путь, если это не корневой вызов
        }
    
        const result = replacer.call({ path: this.path.join('.') }, key, value);
    
        if (key !== "") {
            this.path.pop(); // Возвращаемся назад по пути
        }
    
        return result;
      }, 2); // Форматирование вывода для лучшей читаемости
    }
    
    const json = serializeWithCycles(complexObject);
  
    console.log(json);
  }
  
  serializeObj();

  function countingDataTypeOccurrences() {
    // Задача 3: Подсчет вхождений типов данных
    // Задание: Разработайте функцию, которая анализирует сложный вложенный объект и возвращает объект,
    // содержащий подсчет количества вхождений каждого типа данных (string, number, object, array,
    // boolean, null, undefined, function, symbol, и специальные типы) во всех уровнях вложенности.
    // Функция должна корректно обрабатывать циклические ссылки и специальные типы объектов, не
    // учитывая их более одного раза в общем подсчете.
  
    let complexObject = {
      name: "Alice",
      age: 30,
      hobbies: ["reading", "cycling", "hiking"],
      education: {
        primary: "Springfield Elementary",
        highSchool: "Springfield High",
        college: "Springfield College"
      },
      workExperience: [
        {
          company: "Tech Solutions",
          position: "Developer",
          years: 5
        },
        {
          company: "Innovate Tech",
          position: "Senior Developer",
          years: "3"
        }
      ],
      favoriteQuote: "To be or not to be, that is the question.",
      personalInfo: {
        spouse: {
          name: "Bob",
          age: 32,
          hobbies: ["golfing", "fishing"]
        },
        children: [
          {
            name: "Charlie",
            age: 5,
            favoriteToy: "Lego"
          }
        ]
      }
    };
    
    // Добавляем циклическую ссылку
    complexObject.personalInfo.spouse.partner = complexObject;
    complexObject.self = complexObject;
    
    // Добавляем специальный тип объекта - дату
    complexObject.anniversary = new Date("2015-06-15");
  
    function countingDataTypes(obj, counted = new Set(), countingObj = null) {
      if (counted.has(obj)) return countingObj;
  
      // Инициализация объекта подсчета, если он еще не был создан
      if (!countingObj) {
        countingObj = {
          object: 0,
          array: 0,
          func: 0,
          string: 0,
          number: 0,
          boolean: 0,
          null: 0,
          undefined: 0,
          symbol: 0,
          date: 0,
          regExp: 0
        };
      }
  
      let type = typeof obj;
  
      if (obj === null) {
        type = "null";
      } else if (Array.isArray(obj)) {
        type = "array";
      } else if (obj instanceof RegExp) {
        type = "regExp";
      } else if (obj instanceof Date) {
        type = "date";
      } else if (obj instanceof Function) {
        type = "func";
        // Подсчет собственных свойств функции, если они есть
        Object.keys(obj).forEach(key => countingDataTypes(obj[key], counted, countingObj))
      } else if (obj instanceof Symbol) {
        type = "symbol";
      } else if (type === "object") {
        type = "object";
      }
  
      countingObj[type] = (countingObj[type] || 0) + 1;
      if (typeof obj === "object" && obj !== null) {
        counted.add(obj);
  
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            countingDataTypes(obj[key], counted);
          }
        }
      }
  
      return countingObj;
    }
  
    let result = countingDataTypes(complexObject);
    console.log(result);
  }
  
  countingDataTypeOccurrences();