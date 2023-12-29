// generators.js


// asyncIteratorsGenerators.js
const asyncRange = {
    from: 1,
    to: 5,
  
    // for await..of вызывает этот метод один раз в самом начале
    [Symbol.asyncIterator]() {
      // ...возвращает объект-итератор:
      // далее for await..of работает только с этим объектом,
      // запрашивая у него следующие значения вызовом next()
      return {
        current: this.from,
        last: this.to,
  
        // next() вызывается на каждой итерации цикла for await..of
        async next() {
          // должен возвращать значение как объект {done:.., value :...}
          // (автоматически оборачивается в промис с помощью async)
  
          // можно использовать await внутри для асинхронности:
          await new Promise(resolve => setTimeout(resolve, 1000));
  
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };

(async () => {
    for await (let value of asyncRange) {
        console.log(value);
    }
})()
