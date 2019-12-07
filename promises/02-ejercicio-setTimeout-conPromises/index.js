// declaro una función que crea un promesa para ejecutar una acción después de una cantidad de milisegundos
const esperar = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function clickCaja (e) {
  const el = document.querySelector('.box');

  // 1. Cambiar el texto del elemento a "¡Clickeado!"
  el.innerText = "¡Clickeado!";

  // PROMISES
  esperar(2000)
    .then(() => {
      el.classList.add('circle');
      return esperar(500);
    })
    .then(() => {
      el.classList.add('orange');

      return esperar(250)
    })
    .then(() => {
      el.classList.remove('circle');

      return esperar(333)
    })
    .then(() => {
      el.classList.remove('orange');
      el.classList.add('purple');

      return esperar(500)
    })
    .then(() => {
      el.classList.add('fadeOut');
    })
}

const box = document.querySelector('.box');
box.addEventListener('click', clickCaja);