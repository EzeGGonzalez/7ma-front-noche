const mostrarProductos = () => {
  // const productsList = document.getElementsByClassName('products')[0];
  const productsList = document.querySelector('.products');

  const productsHTML = products.map(product => {
    return `
      <div class="product">
        <div class="product-image">
          <img src="${product.imageUrl}" alt="${product.name}">
        </div>
        <div class="product-name"><span>Product:</span> ${product.name}</div>
        <div class="product-description"><span>Description:</span> ${product.description}</div>
        <div class="product-price"><span>Price:</span> $${product.price}</div>
        <div class="product-add-to-cart">
          <a href="#0" class="button see-more">More Details</a>
          <a href="#0" class="button add-to-cart" data-id=${product.id}>Add to Cart</a>
        </div>
      </div>
    `;
  }); // aca termina el map

  productsList.innerHTML += productsHTML.join('')
}

mostrarProductos();