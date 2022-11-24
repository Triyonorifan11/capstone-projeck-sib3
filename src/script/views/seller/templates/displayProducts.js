const createAllProducts = (name, image, price, seller, description, stock) => `
<div class="col-lg-3">
    <div class="card" style="width: 18rem;">
      <img src="${image}" 
      class="card-img-top" alt="gambar produk">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
        <p class="card-text">Harga : ${price}</p>
        <p class="card-text">Penjual : ${seller}</p>
        <p class="card-text">Stok : ${stock}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
`

export default createAllProducts;
