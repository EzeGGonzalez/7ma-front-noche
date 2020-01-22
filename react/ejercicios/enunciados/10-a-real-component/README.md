# Ejercicio `10` Un componente más real

En el anterior ejercicio, hicimos nuestro primer componente llamado **DarLaBienvenida**, y aprendimos que podemos utilizarlo como una etiqueta de HTML.
```jsx
<DarLaBienvenida />
```

Ahora vamos a crear otro componente (función) llamado **Card** que retorna el siguiente HTML:

```jsx
<div class="card m-5">
  <img class="card-img-top" src="https://lastfm.freetls.fastly.net/i/u/arO/f0c695de2eb443a6a4ea0456c994abf3" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Dave Grohl</h5>
    <p class="card-text">David Eric Grohl (born January 14, 1969) is an American singer, songwriter, musician and ... guest for a concert at the Anfield football stadium in Liverpool, in one of the central events of the English city's year as European Capital of Culture.</p>
    <a href="https://en.wikipedia.org/wiki/Dave_Grohl" class="btn btn-primary">Go to wikipedia</a>
  </div>
</div>
```

El código del HTML está basado en las Card de bootstrap: [Bootstrap Card](https://getbootstrap.com/docs/4.0/components/card/#example)

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/react-ejercicio-10-968l2

En `App.js`, creá una función llamada `BootstrapCard` que retorne el código de la Card y usala como una etiqueta dentor del código de la función `App` para agregarla al DOM.
