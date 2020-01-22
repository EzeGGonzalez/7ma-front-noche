# Ejercicio `07` .map() de un array a `<li>`

Cuando estamos transformando un array de datos con `.map()` para convertirlo en array de HTML, tenemos que especificar **una función de transformación** que recibe cada item del array original, lo transforma y agrega en un array nuevo.
Ej:

```js

const originalData = [];

const mappingFunction = (item, index) => {
  // return algo en JSX.
};

const htmlList = originalData.map(mappingFunction);
// la variable htmlList ahora contiene un nuevo array.
```

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/react-ejercicio-07-xqgli

Vamos a utilizar el componente [list-group bootstrap](https://getbootstrap.com/docs/4.1/components/list-group/#basic-example) para mostrar una lista de planetas partienda del array:

```js
const planets = [ 'Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune' ];
```

Usá el método `.map` y lográ que el HTML resultado sea el siguiente:

```jsx
<ul class="list-group m-5">
  <li class="list-group-item">Mars</li>
  <li class="list-group-item">Venus</li>
  <li class="list-group-item">Jupiter</li>
  <li class="list-group-item">Earth</li>
  <li class="list-group-item">Saturn</li>
  <li class="list-group-item">Neptune</li>
</ul>
```

#### El resultado final debería ser:

![list-group](https://ucarecdn.com/2fa34a3a-33ba-4938-a69f-94d550ece79c/)
