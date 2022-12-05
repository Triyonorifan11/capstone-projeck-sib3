import dataProduct from '../../../utils/dataProducts';
import createAllProducts from '../templates/displayProducts';

const Product = {

  async render() {
    return `<section class="mb-5 position-relative">
  <div class="col-sm-10 col-md-6 position-absolute top-50 start-0 translate-middle-y"
    style="height: 50%;color: #012970;">
    <div class="col-12 col-sm-12 col-lg-9 container p-3">
      <h1 class="fw-bold">Reforma Trash Project</h1>
      <h4 class="text-start">Ayo jaga kebersihan Bumi kita dengan mengurangi volume sampah</h3>
    </div>
  </div>
  <img src="./assets/img/jumbotron.PNG" class="" alt="jumbotron" width="100%">
</section>

<main class="main-container">
    <section class="container pb-3" style="margin: 1rem auto;">
    <div class="d-grid justify-content-center">
    <div class="col-12 container p-3">
    <h1 class="fw-bold text-center" style="color: #012970;">Daftar Produk</h1>
    </div>
    </div>
    <div class="row d-flex" id="products">
    </div>
    </section>
</main>

<!-- <div class="collapse navbar-collapse" id="navbarNav">
      <a href="admin/" class="btn btn-primary ms-auto">admin</a>
      <a href="seller/" class="btn btn-success ms-3">penjual</a>
      <a href="buyer/" class="btn btn-success ms-3">pembeli</a>
      <a href="login.html" class="btn btn-info ms-3">Login</a>
    </div> -->
<!-- </div>
</nav> -->
`;
  },

  async afterRender() {
    const products = document.querySelector('#products');
    document.querySelector('#navHome').classList.add('active');
    const fetchedDataProduct = await dataProduct._fetchAllDataProduct();
    fetchedDataProduct.forEach(async (d) => {
      const data = d.data();
      data.id = d.id;
      const sellerName = await dataProduct._fetchUserNameById(data.id_user);
      // if (data.stok <= 0) {
      //   products.innerHTML = '';
      // }
      products.innerHTML += createAllProducts(data.nama_product, data.foto, data.harga, sellerName.namalengkap, data.deskripsi, data.stok, data.id);
    });
  },
};

export default Product;
