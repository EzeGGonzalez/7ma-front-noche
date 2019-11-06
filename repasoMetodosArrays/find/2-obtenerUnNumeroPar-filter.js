const numeros = [1, 5, 7, 6, 3, 2, 4];

// SOLUCION 3
const pares = numeros.filter(n => n % 2 === 0);

const unPar = pares[0];

console.log(unPar); // 6