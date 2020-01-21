# Ejercicio `04` Construyendo con arrays

Con JSX también podemos crear **arrays** de elementos HTML. Por ejemplo: si tenemos un array de `<li>`, podemos incluirlos todos en el documento de una vez de esta forma:

```jsx
const namesInHTML = [
  <li>Dave Grohl</li>,
  <li>Neil Peart</li>,
  <li>John Bonham</li>,
  <li>Taylor Hawkins</li>
];

const content = <ul>{namesInHTML}</ul>;

ReactDOM.render(content, document.querySelector("#root"));
```

El documento HTML resultado será:
```html
<div id="root">
  <ul>
    <li>Dave Grohl</li>
    <li>Neil Peart</li>
    <li>John Bonham</li>
    <li>Taylor Hawkins</li>
  </ul>
</div>
```

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/react-ejercicio-04-bprdt

Supongmos que queremos que react muestre el siguiente contenido HTML:

```html
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link" href="#">Link to google.com</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link to facebook.com</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link to amazon.com</a>
  </li>
</ul>
```

Actualizá el array `navlinkItems` para hacer que el código muestre lo que queremos.

#### 💡 Pista:
- Solo tenés que actualizar el array `navlinkItems`, nada más.
- React te va a pedir que uses keys en cada item del array, [podés lear más acá](https://reactjs.org/docs/lists-and-keys.html#keys).
- Recordá que tenés que usar `className` en lugar del atributo `class`