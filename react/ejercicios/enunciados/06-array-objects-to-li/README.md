# Ejercicio `06` .map() de un array a `<li>`

Usando el conocimiento del ejercicio anterior, ahora vamos a arreglar la función del .map() otra vez pero con la diferencia que el array contiene objetos.

```js
const animals = [ { label: 'Horse' }, { label: 'Turtle' }, { label: 'Elephant' }, { label: 'Monkey' } ];
```

# :speech_balloon: Instructions


Código base del ejercicio: https://codesandbox.io/s/react-ejercicio-06-8dgs1

Actualizá el código de la función `.map()` para crear un nuevo array de `<li>` donde cada uno corresponde a un animal del array original **de objetos**, resultando en el siguiente HTML:

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
