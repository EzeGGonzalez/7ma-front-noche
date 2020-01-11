// 2. Creá una clase Persona que tenga las propiedades nombre y apellido, y un método llamado nombreCompleto que debe retornar el nombre y apellido concatenados.
class Persona {
  constructor (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  nombreCompleto () {
    return `${this.nombre} ${this.apellido}`;
  }
}

// escribí acá la solución
const persona = new Persona('Ada', 'Lovelace');
console.log( persona.nombreCompleto() );
// Ada Lovelace