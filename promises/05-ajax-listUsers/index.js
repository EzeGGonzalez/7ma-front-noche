const cargarDatos = () => {
  // hacer un get a una api
  // HTTP GET
  axios
    .get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
    .then((response) => {
      const users = response.data;

      users.forEach(u => {
        const userHTML = `
          <tr>
            <td>${u.first}</td>
            <td>${u.last}</td>
            <td>${u.email}</td>
          </tr>
        `;

        document.querySelector('#users-tbody').innerHTML += userHTML;
      });
    })
}

document.getElementById('btn-cargar').onclick = cargarDatos;