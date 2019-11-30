const personas = [
  { id: 1, nombre: 'Ada', apellido: 'Lovelace', nacionalidad: 'Mexico', estudios: ['Primario', 'Secundario'] },
  { id: 2, nombre: 'Hedy', apellido: 'Lamarr', nacionalidad: 'Uruguay', estudios: ['Primario'] },
];

let idPersonas =
  personas.length > 0 ? personas[ personas.length - 1 ].id : 0;

const guardarPersona = (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const nacionalidad = document.getElementById('nacionalidad').value;
  // const estudios = document.getElementById('estudios').value;

  // 1. ir a buscar el select y quedarme con la propiedad selectedOptions
  const estudiosSeleccionados = document.getElementById('estudios').selectedOptions;
  // 2. transformo una HTMLCollection en un array de JS
  const estudiosSeleccionadosArr = Array.from( estudiosSeleccionados );
  // 3. quedarme con la propiedad .value de cada <option>
  const estudios = estudiosSeleccionadosArr.map(option => option.value);

  const nuevaPersona = {
    nombre: nombre,
    apellido: apellido,
    nacionalidad: nacionalidad,
    estudios: estudios,
    id: ++idPersonas
  }

  personas.push(nuevaPersona);

  const filaPersona = `
    <li id="persona-${nuevaPersona.id}">${nuevaPersona.id} - ${nuevaPersona.nombre} ${nuevaPersona.apellido} ${nuevaPersona.nacionalidad} <button>eliminar</button></li>
  `;

  document.querySelector('#personas').innerHTML += filaPersona;
}

document.getElementById('nueva-persona').onsubmit = guardarPersona;


const eliminarPersona = id => {
  // actualizar los datos
  for (let i = 0; i < personas.length; i++) {
    const persona = personas[i];
    if (persona.id === id) {
      personas.splice(i, 1);
    }
  }

  // actualizamos la vista
  document.getElementById(`persona-${id}`).remove();
}


const mostrarPersonas = () => {
  personas.forEach(p => {
    const filaPersona = `
      <li id="persona-${p.id}">${p.id} - ${p.nombre} ${p.apellido} ${p.nacionalidad} <button onclick="eliminarPersona(${p.id})">eliminar</button></li>
    `;

    document.querySelector('#personas').innerHTML += filaPersona;
  })
}

mostrarPersonas();