const numeros = [1, 5, 7, 6, 3, 2, 4];

let unPar = null;

for (let i = 0; i < numeros.length && unPar === null; i++) {
  if (numeros[i] % 2 === 0) {
    unPar = numeros[i];
  }
}

console.log(unPar); // 6