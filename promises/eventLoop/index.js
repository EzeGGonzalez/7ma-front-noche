

function clickCaja (e) {
  const el = document.querySelector('.box');

  // 1. Cambiar el texto del elemento a "¡Clickeado!"
  el.innerText = "¡Clickeado!";

  // 2. Hacer que el elemento sea un círculo después de 2 segundos
  setTimeout(() => {
    el.classList.add('circle');

    // 3. Hacer que el elemento sea naranja después de medio segundo
    setTimeout(() => {
      el.classList.add('orange');

      // 4. Hacer que el elemento sea un cuadrado después de un cuarto de segundo
      setTimeout(() => {
        el.classList.remove('circle');

        // 5. Hacer que el elemento sea violeta desdpués de un tercio de segundo
        setTimeout(() => {
          el.classList.remove('orange');
          el.classList.add('purple');

          // 6. Ocultar el elemento después de medio segundo
          setTimeout(() => {
            el.classList.add('fadeOut');
          }, 500);
        }, 333)
      }, 250);
    }, 500);
  }, 2000);




}

const box = document.querySelector('.box');
box.addEventListener('click', clickCaja);