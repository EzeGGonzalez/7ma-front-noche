# Ejercicio `05` .map() de un array a `<li>`

Ahora vamos a crear un array de forma dinámica. Supongamos que tenemos un array de animales:

```js
const animals = [ 'Horse', 'Turtle', 'Elephant', 'Monkey' ];
```

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/react-ejercicio-05-xoxlb

Actualizá el código de la función `.map()` para crear un nuevo array de `<li>` donde cada uno corresponde a un animal del array original, resultando en el siguiente HTML:

```jsx
const animalsInHTML = [
  <li>Horse</li>,
  <li>Turtle</li>,
  <li>Elephant</li>,
  <li>Monkey</li>
];
```

Finalmente incluí a cada uno en el documento principal.

#### 💡 Pista:

- Podés usar el segundo parámetro del map como la `key` de cada item.

El resultado final debería ser: ![LIs](https://ucarecdn.com/773cea7c-acab-46f2-b8af-d03911bbfe24/)
