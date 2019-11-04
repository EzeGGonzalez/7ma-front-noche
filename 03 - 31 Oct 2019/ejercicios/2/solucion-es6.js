const figuras = [{
  alto: 200,
  ancho: 30,
  tipo: 'rectangulo'
}, {
  radio: 50,
  tipo: 'circulo'
}, {
  ancho: 100,
  tipo: 'cuadrado'
}];

// la función recibe por parámetro una figura, y retorna su area según el tipo de figura que sea
const calcularArea = figura => {
  let area = 0
  if (figura.tipo === 'cuadrado') {
    area = figura.ancho * figura.ancho;
  }
  if (figura.tipo === 'rectangulo') {
    area = figura.alto * figura.ancho;
  }
  if (figura.tipo === 'circulo') {
    area = figura.radio * figura.radio * Math.PI;
  }
  return area;
}

const calcularAreaTotal = figuras => {
  let areaTotal = 0;

  // en lugar de tener todo el código de la lógica dentro del forEach, lo llevo a una función afuera calcularArea
  // voy calculando el area de cada figura y la sumo al acumulador
  figuras.forEach(figura => areaTotal += calcularArea(figura));

  return areaTotal;
}

// creo una función que recibe el objeto de una figura, y devuelve su representación en HTML
const crearFiguraHTML = f => `<li>${f.tipo}</li>`;
// creo una función que recibe un elemento HTML de una figura (lo que retorna la función crearFiguraHTML) y lo agrega en la lista
const agregarFiguraHTML = f => document.getElementById('figuras').innerHTML += f;

// figuras es un array
// le aplico un map para transformar de los objetos figura a los elementos HTML
// con el array que devuelve MAP, hago un forEach y los voy agregando al DOM
const figurasHTML = figuras.map(crearFiguraHTML).forEach(agregarFiguraAlDOM)

// agrego el area total al DOM
document.querySelector('h3 .area').innerHTML = calcularAreaTotal(figuras);