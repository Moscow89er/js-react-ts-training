// 1)
function incapsulatedRemapData() {
    const data = [
        ['Tomato', 'Nick', 'Igor'],
        ['Cucumber', 'Ivan', 'Igor'],
        ['Rice', 'Nick'],
        ['Eggs', 'Ivan', 'Nick']
      ]
      
      function remapData(data) {
        return data.reduce((acc, arr) => {
          let product = arr[0];
      
          for (let i = 1; i < arr.length; i++) {
            if (acc[arr[i]]) {
              acc[arr[i]].push(product);
            } else {
              acc[arr[i]] = [product];
            }
          }
          return acc;
        }, {})
      }
      
      console.log(remapData(data));
}

// incapsulatedRemapData();

// 2)
function calculateAverageValuesByDate() {
    const data = [/* ... ваш массив данных ... */];

    function remapData(data) {
    // Преобразуем массив данных в Map, группируя по датам
    const groupedByDate = data.reduce((accumulator, currentItem) => {
    // Получаем дату и значение из текущего элемента
        const date = new Date(currentItem.date).toDateString(); // Преобразуем дату в строку для уникальности
        const value = currentItem.value;

        // Добавляем значение в массив для соответствующей даты
        if (accumulator.has(date)) {
            accumulator.get(date).push(value);
        } else {
            accumulator.set(date, [value]);
        }

        return accumulator;
    }, new Map());

    // Создаем Map для ответа, содержащего средние значения
    const answer = new Map();
        for (let [date, values] of groupedByDate) {
            // Рассчитываем среднее значение для каждой даты
            const average = values.reduce((sum, current) => sum + current, 0) / values.length;
            answer.set(date, average);
        }

        return answer;
    }

    const result = remapData(data);
    console.log(Array.from(result.entries()), result);
}

// 3)
class Test {
  #privateMethod() {
		console.log(1);
	}

  publicMethod() {
    console.log(2);
    this.#privateMethod(); // Приватный метод может быть вызван внутри класса
  }

	static staticMethod() {
		console.log('Вызов статического метода');
	}
}

// Test.privateMethod(); // Это вызовет ошибку, так как метод приватный

const newTest = new Test();

// newTest.privateMethod(); // Это также вызовет ошибку, так как метод приватный

newTest.publicMethod(); // Выведет 2 и затем 1, так как publicMethod вызывает privateMethod внутри класса

Test.staticMethod(); // Выведет 'Вызов статического метода'