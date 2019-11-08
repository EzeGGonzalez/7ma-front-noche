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
  return componentes.reduce((total, c) => total + obtenerPrecioDelComponente(c), 0);
}

const cantidadVentasComponente = (componente) => {
  return local.ventas
    .map(v => v.componentes)
    .flat()
    .reduce((total, c) => c === componente ? ++total : total, 0);
}

const ventasHTML = local.ventas.map(crearVentaHTML);
const ul = document.getElementById('ventas');
ul.innerHTML = ventasHTML.join('');