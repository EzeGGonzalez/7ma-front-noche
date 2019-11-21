## Notepad

_Ejemplo funcional: [http://smooth-mitten.surge.sh/](http://smooth-mitten.surge.sh/)_

En el zip del respositorio, se encuentra la maqueta ejemplo desde la cual comenzar a trabajar. Tenés que descargarlo, descomprimirlo en una nueva carpeta, y abrir el HTML. Van a ver lo siguiente:

![Notepad](https://files-cmhxmpkzzs.now.sh)

- Las notas ya creadas y el carte que dice 'Note added' son ejemplos para que puedan copiar la estructura de los componentes a agregar desde JS.

- Ejemplo del componente **nota**:
  ```html
    <div id="note-2" class="card text-white bg-primary mb-3">
        <div class="card-header">
            <span>Nota 2</span>
            <i class="fas fa-trash" aria-hidden="true"></i>
            <i class="fas fa-pencil-alt mr-3" aria-hidden="true"></i>
        </div>
        <div class="card-body bg-warning ">
            <p class="card-text">Esta es otra nota.</p>
        </div>
    </div>
  ```

- La lista de notas es el div con ID **note-list**


**Se debe agregar el código necesario en JS para implementar la funcionalidad que tiene el ejemplo**:
- Agregar una nota que tiene como propiedades titulo, descripción y el color de fondo
- Los colores que puede tener una nota son:
  - bg-primary
  - bg-secondary
  - bg-success
  - bg-danger
  - bg-warning
  - bg-info
  - bg-light
  - bg-dark
  - bg-white
- Cuando se agrega una nota se tiene que mostrar una notificación que diga que se agregó la nota
- Implementar la funcionalidad para eliminar una nota (sin confirmación)
- Implementar la funcionalidad para editar una nota: tiene que volver a poner los datos en el formulario, y al aprentar 'agregar' se tiene que modificar la nota.