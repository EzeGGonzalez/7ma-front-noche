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

const calcularArea = (figura) => {
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

function calcularAreaTotal(figuras) {
  let areaTotal = 0;

  figuras.forEach(function (figura) {
    areaTotal += calcularArea(figura);
  })

  return areaTotal;
}

const crearFiguraHTML = (f) => {
  return `<li>${f.tipo}</li>`;
}
const agregarFiguraHTML = (f) => {
  document.getElementById('figuras').innerHTML += f;
}
// esto es un array
const figurasHTML = figuras.map(crearFiguraHTML)
figurasHTML.forEach(agregarFiguraHTML)

document.querySelector('h3 .area').innerHTML = calcularAreaTotal(figuras);