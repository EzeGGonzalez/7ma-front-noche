# Ejercicio `02` Rendering con objetos

Ahora usemos una variable más compleja para representar nuestro HTML, digamos que tenemos el siguiente objeto JS que contiene información de una persona:

```js
const customer = {
    firstName: 'Ada',
    lastName: 'Lovelace'
};
```

Para obtener cualquier propiedad del objeto `customer` tenemos que usar el operador punto `.` de esta manera:

```js
console.log(customer.firstName); // va a mostrar "Ada" en la consola.
```

## ⚙️ Ejercicio

Código del ejercicio: https://codesandbox.io/s/react-ejercicio-02-duyz1

Abrir el código y agregar el código necesario para hacer que React genere el siguiente documento:

```jsx
<div>
    <h1>My first name is Ada</h1>
    <h2>My last name is Lovelace</h2>
</div>
```
