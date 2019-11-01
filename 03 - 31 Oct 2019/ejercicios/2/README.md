## Ejercicio 2

En la siguiente web tenemos un array con distintas figuras geométricas, cada una con sus propiedades específicas.

```js
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
```

Listamos cada una de las figuras, utilizando el elemento `<ul id="figuras">`.

```js
for (let i = 0; i < figuras.length; i++) {
  document.getElementById('figuras').innerHTML += `
    <li>${figuras[i].tipo}</li>
  `;
}
```

Queremos mostrar dentro del elemento `<h3>Área total: <span class="area"></span></h3>` la sumatoria del área de cada figura. Por ejemplo:
- el área del rectángulo es 6000
- el área del circulo es 7850
- el área del cuadrado es 10000

De esta forma, el área total es: 6000 + 7850 + 10000 = 23850 _(redondeando)_

Para esto, se desarrolló una función que obtiene la sumatoria de cada figura y la suma, utilizando la función `reduce`.

```js
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
```

Si bien esta solución funciona, creemos que hay oportunidades de mejorarla diviéndola en funciones más chicas y reutilizables. ¿Cómo podrías dividir la función `calcularAreaTotal` en un código más sencillo de leer?

