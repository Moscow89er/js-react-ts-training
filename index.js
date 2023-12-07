// iteration.js
// 1)
let a = {
	[Symbol.iterator]() {
    return {
      next() {
        if (this.current) {
          return {
            done: false,
            value: this.current++
          }
        } else {
          return {
            done: true
          }
        }
      }
    }
	},
}

console.log([...a]);
