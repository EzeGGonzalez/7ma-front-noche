const products = [{
    id: 1,
    name: "Dolor est.",
    description: "Amet stet sanctus amet eos eirmod amet. Et amet ipsum.",
    imageUrl: "https://picsum.photos/200/300?random=1",
    price: 799
  },
  {
    id: 2,
    name: "Sit.",
    description: "Ipsum ipsum no et ut ipsum sed diam tempor. Duo.",
    imageUrl: "https://picsum.photos/200/300?random=2",
    price: 349,
  },
  {
    id: 3,
    name: "Lorem invidunt.",
    description: "Kasd lorem rebum nonumy tempor sanctus invidunt. Amet et tempor.",
    imageUrl: "https://picsum.photos/200/300?random=3",
    price: 1499
  },
  {
    id: 4,
    name: "Erat est clita.",
    description: "Invidunt sit eirmod at kasd et. Dolore lorem sadipscing voluptua.",
    imageUrl: "https://picsum.photos/200/300?random=4",
    price: 999
  },
  {
    id: 5,
    name: "Sed.",
    description: "Dolor takimata diam sed vero lorem sit no et lorem.",
    imageUrl: "https://picsum.photos/200/300?random=5",
    price: 599
  },
  {
    id: 6,
    name: "Sanctus dolores.",
    description: "Sed clita labore invidunt sanctus duo aliquyam elitr sit dolores,.",
    imageUrl: "https://picsum.photos/200/300?random=6",
    price: 499
  }
];

// agregar el id de cada elemento a una variable global array
const productsCart = [];

function addToCart (id) {

  // buscar los datos del producto sobre el que hicimos click
  let productoAAgregar;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.id === id) { // encontre el producto que tengo que agregar
      productoAAgregar = product;
    }
  }

  productsCart.push(productoAAgregar.id);

  const cantidadVendidos = productsCart.reduce((total, p) => {
    return p === productoAAgregar.id ? ++total : total
  }, 0)

  // agrego el nombre y precio del producto al <ul>
  if (cantidadVendidos === 1) {
    const cartHTML = `<li id="product-${productoAAgregar.id}">${productoAAgregar.name} - $${productoAAgregar.price} - Q: ${cantidadVendidos}</li>`;
    document.querySelector('.shopping-cart-list').innerHTML += cartHTML;
  } else {
    document.getElementById(`product-${productoAAgregar.id}`).innerHTML = `${productoAAgregar.name} - $${productoAAgregar.price * cantidadVendidos} - Q: ${cantidadVendidos}`;
  }
}








// solucion 1
const mostrarProductos = () => {
  const productsList = document.querySelector('.products');

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productHTML = `
      <div class="product">
        <div class="product-image">
          <img src="${product.imageUrl}" alt="${product.name}">
        </div>
        <div class="product-name"><span>Product:</span> ${product.name}</div>
        <div class="product-description"><span>Description:</span> ${product.description}</div>
        <div class="product-price"><span>Price:</span> $${product.price}</div>
        <div class="product-add-to-cart">
          <a href="#0" class="button see-more">More Details</a>
          <a href="#0" class="button add-to-cart" onclick="addToCart(${product.id})">Add to Cart</a>
        </div>
      </div>
    `;

    productsList.innerHTML += productHTML;
  }
}

mostrarProductos();