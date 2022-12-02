import { formatRupiah } from '../../../utils/functions';

const createAllProducts = (name, image, price, seller, description, stock, id) => `
  <div class="col-md-4 col-lg-3">
    <div class="card_product">
      <a class="img-card">
        <img src="${image}" />
      </a>
      <figcaption>Rp${formatRupiah(price)}</figcaption>
      <div class="card-content">
        <h5 class="card-title">${name}</h5>
        <p class="card-text"><i class="fa-sharp fa-solid fa-user"></i>&nbsp; Penjual : ${seller}</p>
        <p class="card-text"><i class="fa-solid fa-layer-group"></i>&nbsp; Stok : ${stock}</p>
      </div>
      <div class="card-read-more py-4">
        <div class="text-center">
          <a href="#/deskripsi/${id}" class="my-5 btn-link btn-block"></i>Lihat Produk</a>
        </div>
      </div>
    </div>
  </div>
`;

export default createAllProducts;
