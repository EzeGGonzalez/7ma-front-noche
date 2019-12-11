const precioMaquina = componentes => {
  return componentes
    .map(c => precios.find(p => p.componente === c).precio)
    .reduce((t, n) => t + n);
}

const renderVenta = (venta) => {
  return `
    <tr>
      <td>${venta.fecha.getDate()}/${venta.fecha.getMonth() + 1}/${venta.fecha.getFullYear()}</td>
      <td>${venta.nombreVendedora}</td>
      <td>${venta.sucursal}</td>
      <td>${venta.componentes.join(' - ')}</td>
      <td>${precioMaquina(venta.componentes)}</td>
      <td>
          <a onclick="remove('${venta.id}')" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
      </td>
    </tr>
  `
}