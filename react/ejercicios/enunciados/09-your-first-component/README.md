# Ejercicio `09` funciones en JSX

Cuando creamos funciones que retornan HTML, JSX nos va a permitir tratarlas como **Componentes**, básicamente se convertirán en nuestras propias etiquetas HTML personalizadas.

## Creando nuestro primer Componente Funcional

Una de las cosas que podemos hacer gracias a JSX es llamar a funciones como si fueran una etiqueta HTML, por ejemplo:
```js
// si declaramos una función llamada Mensaje
const Mensaje = () => {
    return <h1>¡Vamos React!</h1>;
}

// vamos a poder llamar como si fuera una etiqueta de HTML:
<Mensaje />

// en lugar del típico uso con los paréntesis
Mensaje();
```

Cuando llamamos a una función como esa, se convierte en un **Componente de React**, que es una función que genera (retorna) HTML dinámicamente. Lo que sea que devuelva la función se reemplazará en el mismo lugar donde se colocó la etiqueta original `<Mensaje />`.

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/react-ejercicio-09-6xrcx

En la línea 10 del archivo App.js, cambiar la forma en la que la función es llamada. Utilizar como un **Componente de React** usando `<` y `>` como en las etiquetas de HTML.
