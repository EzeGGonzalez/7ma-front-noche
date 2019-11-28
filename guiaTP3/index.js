var local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

  ventas: [
    // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
    { id: 1, fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", sucursal: "Centro", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { id: 2, fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", sucursal: "Centro", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
    { id: 3, fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", sucursal: "Caballito", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
    { id: 4, fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", sucursal: "Centro", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
    { id: 5, fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", sucursal: "Caballito", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
  ],

  precios: [
    { componente: "Monitor GPRS 3000", precio: 200 },
    { componente: "Motherboard ASUS 1500", precio: 120 },
    { componente: "Monitor ASC 543", precio: 250 },
    { componente: "Motherboard ASUS 1200", precio: 100 },
    { componente: "Motherboard MZI", precio: 30 },
    { componente: "HDD Toyiva", precio: 90 },
    { componente: "HDD Wezter Dishital", precio: 75 },
    { componente: "RAM Quinston", precio: 110 },
    { componente: "RAM Quinston Fury", precio: 230 }
  ],

  sucursales: ['Centro', 'Caballito', 'Almagro']
};

// función que recibe un objeto que representa una venta, y retorna un string con el HTML
const crearVentaHTML = (venta) => {
  return `
    <li class="venta">
      <div class="fecha">${venta.fecha.getDate()}/${venta.fecha.getMonth() + 1}/${venta.fecha.getFullYear()}</div>
      <div>${ venta.sucursal }</div>
      <div>${ venta.nombreVendedora }</div>
      <div>${ venta.componentes }</div>
      <div>${ precioMaquina(venta.componentes) }</div>
    </li>
  `;
}

const obtenerPrecioDelComponente = (nombreComponente) => {
  return local.precios.find(p => p.componente === nombreComponente).precio;
}

const precioMaquina = (componentes) => {
  // let total = 0;

  // componentes.forEach((c) => {
  //   total += obtenerPrecioDelComponente(c)
  // });

  // return total;


  // return componentes.reduce((total, c) => {
  //   return total + obtenerPrecioDelComponente(c)
  // }, 0);

  return componentes.reduce((total, c) => total + obtenerPrecioDelComponente(c), 0);
}

const cantidadVentasComponente = (componente) => {
  return local.ventas
    .reduce((acc, v) => acc.concat(v.componentes), [])
    .reduce((total, c) => c === componente ? ++total : total, 0);
}



// separar ventas por mes
// separar ventas por vendedora
// sumar las ventas de cada vendedora

// 1) relevo de todas las vendedoras (suma del importe de ventas)
//   - leer la lista de las vendedoras y ver cual es la que tiene mas ventas
// 2) primero buscar las ventas del mes, y despues sumar/separar por vendedoras
//   - me quedo con las ventas del mes y anio
//   - leer la lista de vendedoras
//   - usar una funcion que me diga total de venta por mes/anio y vendedora

const vendedoraDelMes = (mes, anio) => {
  let maxImporte = 0;
  let maxNombreVendedora = '';
  // recorrer listado de vendedoras
  for (let i = 0; i < local.vendedoras.length; i++) {
    const vendedora = local.vendedoras[i];
    let totalVendido = 0;
    // ver cuanto vendió cada una
    // filtro las ventas por vendedora
    local.ventas
      .filter(venta => {
        return venta.nombreVendedora === vendedora
          && venta.fecha.getFullYear() === anio
          && venta.fecha.getMonth() + 1 === mes
      })
      .forEach(venta => {
        const importe = precioMaquina(venta.componentes);
        totalVendido += importe;
      })

    // totalVendido va tener todo lo que vendió X vendedora
    if (totalVendido > maxImporte) {
      maxImporte = totalVendido;
      maxNombreVendedora = vendedora;
    }
  } // aca termina el for de las vendedoras

  return maxNombreVendedora;
}

console.log( vendedoraDelMes(1, 2019) ); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)

const ventasMes = (mes, anio) => {
  // forEach local.ventas
  let total = 0;

  local.ventas.forEach(venta => {
    // checkear si la venta es del mes y anio que llegan por param
    if (venta.fecha.getFullYear() === anio && venta.fecha.getMonth() + 1 === mes) {
      total += precioMaquina(venta.componentes);
    }
  });

  // local.ventas
  //   .filter(venta => venta.fecha.getFullYear() === anio && venta.fecha.getMonth() + 1 === mes)
  //   .forEach(venta => total += precioMaquina(venta.componentes));

  return total;
}

const ventasDelMesYAnio = ventasMes(1, 2019);


console.log( ventasDelMesYAnio ); // 1250

const ventasVendedora = (nombre) => {
  let total = 0;

  local.ventas.forEach(venta => {
    if (venta.nombreVendedora === nombre) {
      total += precioMaquina(venta.componentes);
    }
  })

  // local.ventas
  //   .filter(venta => venta.nombreVendedora === nombre)
  //   .forEach(venta => total += precioMaquina(venta.componentes))

  // return local.ventas
  //   .filter(venta => venta.nombreVendedora === nombre)
  //   .reduce((total, venta) => total + precioMaquina(venta.componentes), 0)

  return total;
}

const huboVentas = (mes, anio) => {
  // uso la funcion ventasMes pasandole el mes y anio
  // si lo que me devuelve es igual a 0, es porque no hubo ventas entonces retorno false
  // y sino retorno true
}

const componenteMasVendido = () => {
  // let elMaximo = '';
  // let elMontoMaximo = -1;

  for (let i = 0; i < local.precios.length; i++) {
      const precio = local.precios[i];

  //   if (elMontoMaximo < cantidadVentasComponente(precio.componente) {
  //     elMontoMaximo = cantidadVentasComponente([NOMBRE COMPONENTE])
  //     elMaximo = [NOMBRE COMPONENTE]
  //   }
  }

  // return elMaximo;
}

const ventasHTML = local.ventas.map(crearVentaHTML);
const ul = document.getElementById('ventas');
ul.innerHTML = ventasHTML.join('');

const abrirModalNuevaVenta = () => {
  // document.querySelector('#modal-nueva-venta').style.display = 'block';
  document.querySelector('#modal-nueva-venta').classList.add('active');
}

document.querySelector('.btn-agregar-venta').onclick = abrirModalNuevaVenta;

const cerrarModal = () => {
  document.querySelector('#modal-nueva-venta').classList.remove('active');
}

document.querySelector('.btn-modal-close').onclick = cerrarModal;

const agregarVenta = () => {
  alert('aca hariamos todo lo necesario para crear la venta!')
  cerrarModal();
}

document.querySelector('.btn-modal-agregar').addEventListener('click', agregarVenta);
// document.querySelector('.btn-modal-agregar').onclick = agregarVenta;


// maxSucursal maxSucursalMonto
// filtras ventas por mes y año
// iterar por cada sucursal
    // iterar por las ventas
          // sumamos las ventas de la sucursal
    // si maxSucursalMonto < las ventas de la sucursal
          // maxSucursal = sucursal












