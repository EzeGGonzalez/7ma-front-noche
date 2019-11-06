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

  sucursales: ['Centro', 'Caballito']
};

// itero por todas las ventas
// for (let i = 0; i < local.ventas.length; i++) {
//   const venta = local.ventas[i];

//   // innerHTML
//   const ventaHTML = `
//     <li class="venta">
//       <div class="fecha">${venta.fecha.getDate()}/${venta.fecha.getMonth() + 1}/${venta.fecha.getFullYear()}</div>
//       <div>${ venta.sucursal }</div>
//       <div>${ venta.nombreVendedora }</div>
//       <div>${ venta.componentes }</div>
//     </li>
//   `;

//   const ul = document.getElementById('ventas');

//   ul.innerHTML += ventaHTML;
// }

// función que recibe un objeto que representa una venta, y retorna un string con el HTML
function crearVentaHTML (venta) {
  const ventaHTML = `
    <li class="venta">
      <div class="fecha">${venta.fecha.getDate()}/${venta.fecha.getMonth() + 1}/${venta.fecha.getFullYear()}</div>
      <div>${ venta.sucursal }</div>
      <div>${ venta.nombreVendedora }</div>
      <div>${ venta.componentes }</div>
      <div>${ precioMaquina(venta.componentes) }</div>
    </li>
  `;
  return ventaHTML;
}

/* <li class="venta">
  <div class="fecha">4/2/2019</div>
  <div>	Grace	</div>
  <div>Centro	Monitor GPRS 3000 - Motherboard ASUS 1500	320</div>
</li> */

// function precioMaquina (componentes) {

// }

function obtenerPrecioDelComponente (nombreComponente) {
  // busco el componente X
  // for (let i = 0; i < local.precios.length; i++) {
  //   if (local.precios[i].componente === nombreComponente) {
  //     return local.precios[i].precio;
  //   }
  // }
  const componente = local.precios.find(function (p) {
    return p.componente === nombreComponente;
  })
  return componente.precio;
}

function precioMaquina (componentes) {
  let total = 0;

  // solución imperativa
  // for (let j = 0; j < componentes.length; j++) {
  //   total += obtenerPrecioDelComponente( componentes[j] );
  // }

  // solución declarativa
  componentes.forEach(c => total += obtenerPrecioDelComponente( c ));

  return total;
}


const ventasHTML = local.ventas.map(crearVentaHTML);

const ul = document.getElementById('ventas');

ul.innerHTML = ventasHTML.join('');