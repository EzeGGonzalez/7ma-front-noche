let id = 0;
let movimientos = [];
let saldo = 0;
let totalIngresos = 0;
let totalEgresos = 0;


// endpoints
// GET https://billetera-api-bwvhnmcdel.now.sh/api/movimientos
// POST https://billetera-api-bwvhnmcdel.now.sh/api/movimientos
// DELETE https://billetera-api-bwvhnmcdel.now.sh/api/movimientos/:id

const loadData = () => {
  // traer de la api los movimientos persistidos
  axios
    .get('https://billetera-api-bwvhnmcdel.now.sh/api/movimientos')
    .then(res => {
      movimientos = res.data;

      movimientos.forEach(m => {
        agregarMovimientoAlDOM(m);
      });
    })
}

const agregarMovimientoAlDOM = (m) => {
  const movimientoHTML = crearMovimientoHTML(m);

  if (m.tipoMovimiento === 'inc') {
    document.querySelector('.income__list').innerHTML += movimientoHTML;
    totalIngresos += m.monto;
  } else {
    document.querySelector('.expenses__list').innerHTML += movimientoHTML;
    totalEgresos += m.monto;
  }
}

const crearMovimientoHTML = movimiento => {
  const signo = movimiento.tipoMovimiento === 'inc' ? '+' : '-';
  return `
    <div class="item clearfix" id="${movimiento.tipoMovimiento}-${movimiento.id}">
      <div class="item__description">${movimiento.descripcion}</div>
      <div class="right clearfix">
        <div class="item__value">${signo} ${movimiento.monto}</div>
        <div class="item__delete"><button onclick="eliminarMovimiento('${movimiento.id}')" class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
        </div>
      </div>
    </div>
  `;
}

const agregarMovimiento = () => {
  const tipoMovimiento = document.querySelector('.add__type').value;
  const descripcion =  document.querySelector('.add__description').value;
  const monto =  document.querySelector('.add__value').value;

  const nuevoMovimiento = {
    id: ++id,
    tipoMovimiento: tipoMovimiento,
    descripcion: descripcion,
    monto: parseInt(monto)
  };

  movimientos.push(nuevoMovimiento);

  agregarMovimientoAlDOM(nuevoMovimiento);

  actualizarSaldos();
}

const actualizarSaldos = () => {
  saldo = totalIngresos - totalEgresos;

  document.querySelector('.budget__value').innerText = saldo >= 0 ? `+ ${saldo}` : `- ${saldo * -1}`;
  document.querySelector('.budget__income--value').innerText = `+ ${totalIngresos}`;
  document.querySelector('.budget__expenses--value').innerText = `- ${totalEgresos}`;
}

const eliminarMovimiento = id => {
  axios
    .delete(`https://billetera-api-bwvhnmcdel.now.sh/api/movimientos/${id}`)
    .then(res => {
      for (let i = 0; i < movimientos.length; i++) {
        const movimiento = movimientos[i];
        if (movimiento.id === id) {
          if (movimiento.tipoMovimiento === 'inc') {
            totalIngresos -= movimiento.monto;
          } else {
            totalEgresos -= movimiento.monto;
          }

          actualizarSaldos();

          document.querySelector(`#${movimiento.tipoMovimiento}-${movimiento.id}`).remove();

          movimientos.splice(i, 1);
        }
      }
    })
}

document.querySelector('.add__btn').onclick = agregarMovimiento;

loadData();