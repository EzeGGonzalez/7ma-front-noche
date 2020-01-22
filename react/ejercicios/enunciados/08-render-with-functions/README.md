# Ejercicio `08` funciones en JSX

JSX permite usar funciones para mostrar HTML!

Es una práctica recomendada porque te permite crear plantillas y reutilizarlas.
Ej:

```js
// WHAT: Esta función retorna un string que va a ser mostrado
const Saludar = () => {
    return <h1>Hola Mundo</h1>;
}
               //what           //where
ReactDOM.render(Saludar(), document.getElementById('root'));
```

Nota: la función Saludar empieza con mayúscula porque la vamos a convertir en un [Componente de React](https://reactjs.org/docs/react-component.html) en el próximo ejercicio.

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/react-ejercicio-08-dlbo4

Modificá el código para que la función __DarLaBienvenida__ retorne `<h1>¡Aguante React!</h1>` en lugar de `<h1>Hola Mundo</h1>`.
