# Ejercicio `12` Componente Jumbotron

Se trata de un componente para mostrar contenidos de forma destacada.

## ⚙️ Ejercicio

Código base del ejercicio: https://codesandbox.io/s/ejercicio-react-12-ppx46

Usando lo que aprendimos en los anteriores ejercicios, vamos a construir un componente Jumbotron que recibe las siguientes propiedades:

```jsx
<Jumbotron
    title="Welcome to react"
    description="React is the most popular rendering library in the world"
    buttonLabel="Go to the official website"
    buttonURL="https://reactjs.org/"
  />
```

El componente debería tener como HTML de salida algo similar a:

```html
<div class="jumbotron m-5">
  <h1 class="display-4">¡Hola mundo!</h1>
  <p class="lead">Consetetur ipsum rebum et at et amet dolore, kasd elitr.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">¡Click!</a>
</div>
```

#### 💡 Pista:

Así es como debería verse el resultado final.

![Jumbotron](https://ucarecdn.com/d376101b-6af1-45cb-97fc-ee246ee312d3/)
