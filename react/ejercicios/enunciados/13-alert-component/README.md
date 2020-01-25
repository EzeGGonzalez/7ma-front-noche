# Ejercicio `13` Componente Alert

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/ejercicio-react-13-887df

Con lo que aprendimos hasta este ejercicio, vamos a crear un componente `<Alert />` que reciba 1 prop `text` y muestre un [Alert de bootstrap] (https://getbootstrap.com/docs/4.0/components/alerts/#examples), como el siguiente:

Así es como deberíamos usar el componente:
```jsx
<Alert text="¡Ocurrió un error!" />
```

Así es el HTML resultado que deberíamos obtener:
```html
<div class="alert alert-danger" role="alert">
  ¡Ocurrió un error!
</div>
```