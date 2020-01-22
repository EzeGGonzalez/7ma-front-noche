# `03.3` Component Properties

El componente **BootstrapCard** que hicimos en el ejercicio anterior está [hard coded](https://www.quora.com/What-does-hard-coded-something-mean-in-computer-programming-context) solo para **Dave Grohl**.

Pero, ¿que pasa si necesitamos re-utilizar el mismo componente `<BootstrapCard />` para **Kurt Cobain**?

## Usando propiedades en HTML

Cuando estamos escribiendo HTML, estamos constanmente usando las propiedades/atributos de `<tag>` para modificar su comportamiento. Ejemplo:

Cuando usamos la etiqueta **anchor** (ancla) `<a>` necesitamos especificar la propiedad **href** de la siguiente forma:

```html
<a href="http://google.com">Vamos a google</a>
<a href="http://linkedin.com">Vamos a linkedin</a>
```

☝🏽 Acá estamos la misma etiqueta `<a>` para dos direcciones diferentes

## Usando las propiedades en React.js

En React también podemos crear nuestras propias etiquetas y usar nuestras propias propiedades inventadas, por ejemplo, podríamos especificar la propiedad `title` de nuestra` <BootstrapCard /> `de esta manera:

```jsx
               //for Kurt Cobain
<BootstrapCard title="Kurt Cobain" />

               //for Dave Grohl
<BootstrapCard title="Dave Grohl" />
```

Nuestro componente de función va a recibir todas sus propiedades (incluido el title) a través del primer parámetro que podemos llamar **props**.

```jsx
const BootstrapCard = (props) => {
  return <div class="card">
    ...
      <h5 class="card-title">{props.title}</h5>
    ...
  </div>;
}
```

## ⚙️ Ejercicio

Ahora vamos a agregar/usar las propiedades `imageUrl`, `description`, `buttonUrl` y `buttonLabel` dentro del componente/función **BootstrapCard** y también sobre la etiqueta `<BootstrapCard />`. Hay que hacerlo de la misma forma en la que fue incluída la propiedad `title` en ambos lados.

#### 💡 Pista:

- Tenés que editar 2 partes del archivo.
- El primer paso debería ser remplazar las partes harcoded con las propiedades dentro del componente.
- El siguiente paso sería agregar la etiqueta `<BootstrapCard>` dentro de la función `App` incluyendo todas las propiedades y sus respectivos valores.
