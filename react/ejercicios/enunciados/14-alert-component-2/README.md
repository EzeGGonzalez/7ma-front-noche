# Ejercicio `14` Componente Alert

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/ejercicio-react-14-ji5su

Con lo que aprendimos hasta este ejercicio, vamos a crear un componente `<Alert />` que reciba 2 props `text` y `type`, y muestre un [Alert de bootstrap] (https://getbootstrap.com/docs/4.0/components/alerts/#examples), como el siguiente:

Así es como deberíamos usar el componente:
```jsx
<Alert text="¡Ocurrió un error!" type="danger" />
<Alert text="¡Todo salió de 10!" type="success" />
```

Así es el HTML resultado que deberíamos obtener:
```html
<div class="alert alert-danger" role="alert">
  ¡Ocurrió un error!
</div>
<div class="alert alert-success" role="alert">
  ¡Ocurrió un error!
</div>
```