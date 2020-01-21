# Ejercicio `03` Construyendo un layout

Vamos a practicar un poco más sobre el uso de JSX para crear HTML.

Ahora tenemos otro objeto que es un poco más complejo que el anterior.

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/react-ejercicio-03-qvt5g

Tenemos el objeto `data` que contiene información sobre Dave Grohl (imagen, título, etc).

```js
const data = {
  image: "https://lastfm.freetls.fastly.net/i/u/arO/f0c695de2eb443a6a4ea0456c994abf3",
  cardTitle: "Dave Grohl",
  cardDescription: "David Eric Grohl (born January 14, 1969) is an American singer, songwriter, musician and ... guest for a concert at the Anfield football stadium in Liverpool, in one of the central events of the English city's year as European Capital of Culture.",
  button: {
    url: "https://en.wikipedia.org/wiki/Dave_Grohl",
    label: "Go to wikipedia"
  }
};
```

Utilicemos la información contenida en `data` para representar una card de bootstrap, por ejemplo: el título de la tarjeta será `data.cardTitle`, y así con cada campo.

Aquí está el código HTML para crear una tarjeta en bootstrap:

```html
<div class="card m-5">
  <img class="card-img-top" src="..." alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
````
Source: [Bootstrap Card](https://getbootstrap.com/docs/4.0/components/card/#example)

### Así se vería el resultado final:

![Dave Grohl Card](https://files-valdcvtvnf.now.sh)
