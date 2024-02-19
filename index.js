console.log(0);
setTimeout(() => console.log(1), 50);
setTimeout(console.log, 0, 2);
new Promise((resolve) => { 
  console.log(3);
  setTimeout(() => resolve(4));
})
  .then(console.log)
  .then(() => console.log(5))
  .catch(() => console.log(6))
  .then(() => {
    setTimeout(() => console.log(7));
  })
  .then(console.log(8));

setTimeout(() => {
  console.log(9); 
});
Promise.reject(10)
  .then(() => console.log(11)) 
  .catch(console.log);

console.log(12);
