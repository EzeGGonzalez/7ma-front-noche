// event loop
// non blocking
console.log('empezando');

setTimeout(() => {
  console.log('ejecutando');
}, 500);

setTimeout(() => {
  console.log('ejecutando 2');
}, 500);

console.log('terminando');