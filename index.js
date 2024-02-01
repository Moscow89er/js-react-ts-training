// leatcode.js
// 1)
function reduce() {
  nums = [1,2,3,4]
  fn = function sum(accum, curr) { return accum + curr; }
  init = 0
  
  var reduce = function(nums, fn, init) {
    if (nums.length === 0) return init;
  
    for (let i = 0; i < nums.length; i++) {
      init = fn(init, nums[i]);
    }
  
    return init;
  };
  
  console.log(reduce(nums, fn, init));
}

// reduce();

// 2)
function incapsulatedCompose() {
  const functions = [x => x + 1, x => x * x, x => 2 * x];
  const x = 4;

  var compose = function(functions) {
    return function(x) {
       if (functions.length === 0) return x;

       let result = x;
  
       for (let i = 0; i < functions.length; i++) {
        result = functions[i](result);
       }

       return result;
    }
  };

  // from right to left
  // var compose = function(functions) { 
  //   return function(x) {
  //     if (functions.length === 0) return x;

  //     let result = x;
 
  //     for (let i = functions.length - 1; i >= 0; i--) {
  //      result = functions[i](result);
  //     }

  //     return result;
  //   }
  // };

  console.log(compose(functions)(x));
}

incapsulatedCompose();
