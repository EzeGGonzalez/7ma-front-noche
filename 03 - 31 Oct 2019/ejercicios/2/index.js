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

for (let i = 0; i < figuras.length; i++) {
  document.getElementById('figuras').innerHTML += `
    <li>${figuras[i].tipo}</li>
  `;
}

function calcularAreaTotal(figuras) {
  return figuras.reduce((sum, figura) => {
    // Calculate the area of this figura
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
    // Add it to the sum
    return sum + area;
  }, 0)
}

document.querySelector('h3 .area').innerHTML = calcularAreaTotal(figuras);