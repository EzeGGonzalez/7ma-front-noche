const capitalizarTexto = function (texto) {
  return texto[0].toUpperCase() + texto.slice(1);
}

function capitalizarElemento (selector) {
  const elementos = document.querySelectorAll(selector);

  for (let i = 0; i < elementos.length; i++) {
    const heading = elementos[i].innerText;

    const capital = capitalizarTexto(heading);

    elementos[i].innerText = capital;
  }
}

function capitalizar () {
  capitalizarElemento('h1');
}

document.querySelector('button').onclick = capitalizar;

const nombre = 'grace';

const nombreCapitalizado = capitalizarTexto(nombre);

capitalizarElemento('ul li:nth-child(2) p');