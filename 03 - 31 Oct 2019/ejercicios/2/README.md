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