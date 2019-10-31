const personas = [
  { nombre: 'Vero et.', dni: '12312312' },
  { nombre: 'Consetetur stet.', dni: '98798798' }
];

for (let i = 0; i < personas.length; i++) {
  const persona = personas[i];

  const personaHTML = `
    <li>
      <p>${persona.nombre}</p>
      <small>DNI: ${persona.dni}</small>
    </li>
  `;

  document.getElementById('personas').innerHTML += personaHTML;
}

document.getElementById('crear-persona').onsubmit = function (e) {
  e.preventDefault();

  const nuevaPersona = {
    nombre: document.getElementById('nombre').value,
    dni: document.getElementById('dni').value
  }

  personas.push(nuevaPersona);

  const personaHTML = `
    <li>
      <p>${nuevaPersona.nombre}</p>
      <small>DNI: ${nuevaPersona.dni}</small>
    </li>
  `;

  document.getElementById('personas').innerHTML += personaHTML;
}