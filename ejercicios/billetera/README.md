## Budget Tracker

_Ejemplo funcional: [http://enchanting-giants.surge.sh/](http://enchanting-giants.surge.sh/)_

En el zip del respositorio, se encuentra la maqueta ejemplo desde la cual comenzar a trabajar. Tenés que descargarlo, descomprimirlo en una nueva carpeta, y abrir el HTML. Van a ver lo siguiente:

![Budget Tracker](https://files-yiudiouyeb.now.sh)

- Los saldos y listado de ingresos/egresos son ejemplos para que puedan copiar la estructura de los componentes a agregar desde JS.

- Ejemplo del componente **ingreso**:
  ```html
  <div class="item clearfix" id="inc-0">
    <div class="item__description">Ingreso 1</div>
    <div class="right clearfix">
      <div class="item__value">+ 1,000.00</div>
      <div class="item__delete">
        <button class="item__delete--btn">
          <i class="ion-ios-close-outline"></i>
        </button>
      </div>
    </div>
  </div>
  ```

- Ejemplo del componente **egreso**:
  ```html
  <div class="item clearfix" id="exp-0">
    <div class="item__description">Gasto 1</div>
    <div class="right clearfix">
      <div class="item__value">- 350.00</div>
      <div class="item__delete">
        <button class="item__delete--btn">
          <i class="ion-ios-close-outline"></i>
        </button>
      </div>
    </div>
  </div>
  ```

- La lista de ingresos es el div con la clase **income__list**
- La lista de egresos es el div con la clase **.expenses__list**


**Se debe agregar el código necesario en JS para implementar la funcionalidad que tiene el ejemplo**:
- Agregar un ingreso o egreso
- Listar el nuevo movimiento en la lista de ingresos o egresos respectivamente
- Actualizar el saldo total
- Actualizar el saldo de ingresos o egresos según corresponda
- Implementar la posibilidad de borrar un movimiento (lo que significa también actualizar el saldo total, de ingreso y/o egreso)