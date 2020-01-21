# Ejercicio `01` JSX

JSX permite incluir variables en nuestro HTML, por ejemplo, supongamos que tenemos disponible la siguiente variable:

```js
let edad = 27;
```

Si queremos incluir el valor de esa variable en el código HTML dinámicamente, podemos hacerlo así:
```jsx
<span> Ada tiene { edad } años </span>
```
*Prestemos atención a la posición de las llaves `{` y `}` envolviendo la variable.*

The resulting website HTML document will look like this:
El documento HTML resultante se verá como:
```html
<div id="root">
    <span>Ada tiene 27 años</span>
</div>
```

Básicamente, ahora podemos mezclar HTML y JS en el mismo archivo sin tener que concatenar y usar strings.

## ⚙️ Ejercicio

Código del ejercicio: https://codesandbox.io/s/react-ejercicio-01-e0swp

En el proyecto del enlace hay una variable llamada `name` que contiene un nombre.

Incluir la variable en el HTML para reemplazar el texto hard coded `"Grace"`.