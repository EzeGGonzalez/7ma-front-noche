const personas = [
  { nombre: 'Vero et.', dni: '12312312' },
  { nombre: 'Consetetur stet.', dni: '98798798' }
];

// función que recibe un objeto persona, y retorna su representación en HTML
const crearPersonaHTML = (persona) => {
  return `
    <li>
      <p>${persona.nombre}</p>
      <small>DNI: ${persona.dni}</small>
    </li>
  `;
}

// función que recibe un objeto persona, crea su HTML y lo agrega al DOM
const mostrarPersona = (persona) => {
  const personaHTML = crearPersonaHTML(persona);
  document.getElementById('personas').innerHTML += personaHTML;
}

// itero por cada objeto persona, y lo voy agregando al DOM
personas.forEach(mostrarPersona);

// agrego el evento para cuando hacemos el submit del form
document.getElementById('crear-persona').onsubmit = function (e) {
  // evito que la pagina se refresco deteniendo el evento por defecto
  e.preventDefault();

  // creo un nuevo objeto persona con los datos del form
  const nuevaPersona = {
    nombre: document.getElementById('nombre').value,
    dni: document.getElementById('dni').value
  }

  // agrego el objeto al array de personas
  personas.push(nuevaPersona);

  // ejecuto la función que lo agrega al DOM
  mostrarPersona(nuevaPersona);
}