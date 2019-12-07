// event loop
// non blocking
// console.log('empezando');

// setTimeout(() => {
//   console.log('ejecutando');
// }, 0);
// console.log('terminando');

setTimeout(() => {
  alert('hola mundo')
}, 5000);

// PROMESAS
const prom = new Promise((resolve) => {
  setTimeout(resolve, 5000);
});

prom.then(() => {
  alert('hola mundo')
});