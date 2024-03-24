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
  
  // searchAndReplace();
  
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