import dataProduct from '../../../utils/dataProducts';
import createAllProducts from '../../seller/templates/displayProducts';

const Home = {

  async render() {
    return `<section class="mb-5 position-relative">
  <div class="col-sm-10 col-md-6 position-absolute top-50 start-0 translate-middle-y"
    style="height: 50%;color: #012970;">
    <div class="col-12 col-sm-12 col-lg-9 container p-3">
      <h1 class="fw-bold">Revorma Trash Project</h1>
      <h4 class="text-start">Ayo jaga kebersihan Bumi kita dengan mengurangi volume sampah</h3>
    </div>
  </div>
  <img src="./assets/img/jumbotron.PNG" class="" alt="jumbotron" width="100%">
</section>

<section class='hero'>
  <div class='hero-box-container'>
    <a href='' class='hero-box'>
      <span class='hero-box__circle hero-box__circle--blue'></span>
      <h2 class='hero-box__title'>Reduce</h2>
      <p class='hero-box__text'>Mengurangi penggunaan</p>
      <p class='hero-box__body'>Membawa botol minum atau alat makan sendiri</p>
    </a>
    <a href='' class='hero-box'>
      <span class='hero-box__circle hero-box__circle--green'></span>
      <h2 class='hero-box__title'>Reuse</h2>
      <p class='hero-box__text'>Menggunakan kembali</p>
      <p class='hero-box__body'>Menggunakan botol plastik sebagai pot tanaman</p>
    </a>
    <a href='' class='hero-box'>
      <span class='hero-box__circle hero-box__circle--orange'></span>
      <h2 class='hero-box__title'>Recycle</h2>
      <p class='hero-box__text'>Mendaur ulang</p>
      <p class='hero-box__body'>Membuat kerajinan tangan dengan botol plastik</p>
    </a>
  </div>
</section>

<section class="container pb-3" style="margin: 7rem auto;">
  <div class="row .d-flex" id="products">
  </div>
</section>

<section class="bg-white shadow">
  <div class="container" style="padding: 7rem 0;">
    <div class="d-grid justify-content-center">
      <div class="col-12 container p-3">
        <h1 class="fw-bold text-center" style="color: #012970;">Reforma Trash Project Hadir Untuk Indonesia</h1>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="col-12 p-3">
        <p class="text-center">Dengan hadirnya RT Project akan membantu mengurangi volume sampah di Indonesia.</p>
      </div>
    </div>

    <div class="col-lg-12">
      <div class="row">
        <div class="d-flex justify-content-around mt-5 flex-wrap">

          <div class="card pt-5 hover-card" style="width: 18rem;">
            <img src="./assets/img/mudah.png" class="card-img-top rounded-circle mx-auto" alt="solusi png"
              style="width: 10rem;">
            <div class="card-body">
              <p class="text-center my-4">Mempermudah dalam melakukan pengelolaan sampah.</p>
            </div>
          </div>

          <div class="card pt-5 hover-card" style="width: 18rem;">
            <img src="./assets/img/solusi.png" class="card-img-top rounded-circle mx-auto" alt="solusi png"
              style="width: 10rem;">
            <div class="card-body">
              <p class="text-center my-4">Menjadi solusi dalam mengurangi peningkatan jumlah sampah di Indonesia.
              </p>
            </div>
          </div>

          <div class="card pt-5 hover-card" style="width: 18rem;">
            <img src="./assets/img/jualbeli.png" class="card-img-top rounded-circle mx-auto" alt="solusi png"
              style="width: 10rem;">
            <div class="card-body">
              <p class="text-center my-4">Memberikan platform untuk jual beli sampah.</p>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>

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
    const fetchedDataProduct = await dataProduct._fetchAllDataProduct();
    fetchedDataProduct.forEach(async (d) => {
      const data = d.data();
      data.id = d.id;
      const sellerName = await dataProduct._fetchUserNameById(data.id_user);
      products.innerHTML += createAllProducts(data.nama_product, data.foto, data.harga, sellerName.namalengkap, data.deskripsi, data.stok);
    });
  },
};

export default Home;
