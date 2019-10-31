// parametro
function mostrarSaludo (nombre, apellido) {
  `hola ${nombre} ${apellido}`;
}

function armarSaludo (nombre, apellido) {
  return `hola ${nombre} ${apellido}`;
}

// argumento
const saludo0 = mostrarSaludo('grace' ,'hopper');

const saludo = armarSaludo('ezequiel', 'gonzalez');
const saludo2 = armarSaludo('otro', 'nombre');

console.log(saludo0);
console.log(saludo);
alert(saludo2);

/// OTRAS FORMAS DE CREAR DE FUNCIONES

const sumar = function (a, b) {
  return a + b;
}

const dosMasTres = sumar(2, 3);
console.log( dosMasTres );

console.log( sumar(45, 7) );
console.log( sumar(-20, 9) );


//// ES6 - ARROW  FUNCTIONS - FUNCIONES FLECHA
// binding
const restar = (a, b) => {
  return a - b;
}

const tresMenosSiete = restar(3, 7);
console.log(tresMenosSiete);