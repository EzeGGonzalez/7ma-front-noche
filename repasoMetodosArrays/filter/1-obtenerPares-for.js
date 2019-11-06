const numeros = [1, 5, 7, 3, 2, 4];
const pares = [];

// obtener los números pares
// SOLUCION 1
for (let i = 0; i < numeros.length; i++) {
  // si el numero es multiplo de 2
  if(numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
  }
}

console.log(pares);