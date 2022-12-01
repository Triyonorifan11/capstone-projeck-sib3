const createAllProducts = (name, image, price, seller, description, stock) => `
  <div class="col-xs-12 col-sm-4">
    <div class="card_product">
      <a class="img-card">
        <img src="${image}" />
      </a>
      <figcaption>Rp ${price}</figcaption>
      <div class="card-content">
        <h4 class="card-title"><a>${name}</a></h4>
        <p class="card-text"><i class="fa-sharp fa-solid fa-user"></i>&nbsp; Penjual : ${seller}</p>
        <p class="card-text"><i class="fa-solid fa-layer-group"></i>&nbsp; Stok : ${stock}</p>
        <p class="card-text">${description}</p>
      </div>
      <div class="card-read-more">
        <center>
        <a href="#" class="btn btn-link btn-block"><i class="fa-solid"></i>Deskripsi Produk</a>
        </center>
      </div>
    </div>
  </div>
`;

export default createAllProducts;