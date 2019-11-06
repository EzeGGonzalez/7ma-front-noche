const numeros = [1, 5, 7, 3, 2, 4];
const pares = [];

// obtener los números pares
// SOLUCION 2
numeros.forEach(function (n) {
  if(n % 2 === 0) {
    pares.push(n);
  }
});

console.log(pares);