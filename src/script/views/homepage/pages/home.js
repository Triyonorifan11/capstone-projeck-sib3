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

<!-- Blog -->
<div class="container main-container mt-5" id="blog">
  <header id="header">
    <div class="row">
      <div class="col-sm-12 head-column">
        <h1 class="fw-bold text-center" style="color: #012970;">Blog</h1>
      </div>

      <div class="col-sm-12 filter-group-wrapper">
        <div class="filter-group">
          <button class="filter-button" id="all-articles">All</button>
          <button class="filter-button" id="artikel">Artikel</button>
          <button class="filter-button" id="berita">Berita</button>
          <button class="filter-button" id="blogs">Blogs</button>
        </div>
      </div>
    </div>
  </header>


  <section class="mt-5 mb-2">

    <div class="row">
      <div class="d-flex justify-content-center">
        <div class="article-display-container"></div>
      </div>
    </div>

  </section>


  <div class="d-flex justify-content-center my-5">
    <ul class="page-numbers pagination">
      <li><a href="#"><i class="fa fa-arrow-left"></i></a></li>
      <li class="active"><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#"><i class="fa fa-arrow-right"></i></a></li>
    </ul>
  </div>
</div>

<!-- <div class="collapse navbar-collapse" id="navbarNav">
      <a href="admin/" class="btn btn-primary ms-auto">admin</a>
      <a href="seller/" class="btn btn-success ms-3">penjual</a>
      <a href="buyer/" class="btn btn-success ms-3">pembeli</a>
      <a href="login.html" class="btn btn-info ms-3">Login</a>
    </div> -->
<!-- </div>
</nav> -->
<!-- About Us -->
<section class="bg-white shadow" id="about-us">
  <div class="container" style="padding: 7rem 0;">
    <div class="d-grid justify-content-center">
      <h1 class="fw-bold text-center" style="color: #012970;">About Us</h1>
      <div class="col-12">
        <div class="row">
          <div class="d-flex justify-content-around mt-5 flex-wrap">
            <figure class="member">
              <div class="image"><img src="./assets/img/mudah.png" alt="sample70" />
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore
                  et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip
                  ex ea commodo consequat."
                </p>
              </div>
              <figcaption>
                <h4><span> Nutrisha</span></h4>
                <h5>📍Sukamaju Street, Semarang, Indonesia</h5>
                <div class="icons"><a href="#"><i class="fa fa-instagram"></i></a><a
                    href="mailto:hestiyuana9@gmail.com">
                    <i class="fa fa-envelope address"></i></a><a href="#"> <i class="fa fa-phone address"></i></a>
                </div>
              </figcaption>
            </figure>

            <figure class="member">
              <div class="image"><img src="./assets/img/mudah.png" alt="sample79" />
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore
                  et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip
                  ex ea commodo consequat."
                </p>
              </div>
              <figcaption>
                <h4><span>Valentino</span></h4>
                <h5>📍Sukamaju Street, Semarang, Indonesia</h5>
                <div class="icons"><a href="#"><i class="fa fa-instagram"></i></a><a
                    href="mailto:hestiyuana9@gmail.com">
                    <i class="fa fa-envelope address"></i></a><a href="#"> <i class="fa fa-phone address"></i></a>
                </div>
              </figcaption>
            </figure>

            <figure class="member">
              <div class="image"><img src="./assets/img/mudah.png" alt="sample80" />
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore
                  et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip
                  ex ea commodo consequat."
                </p>
              </div>
              <figcaption>
                <h4><span> Soimah</span></h4>
                <h5>📍Sukamaju Street, Semarang, Indonesia</h5>
                <div class="icons"><a href="#"><i class="fa fa-instagram"></i></a><a
                    href="mailto:hestiyuana9@gmail.com">
                    <i class="fa fa-envelope address"></i></a><a href="#"> <i class="fa fa-phone address"></i></a>
                </div>
              </figcaption>
            </figure>

            <figure class="member">
              <div class="image"><img src="./assets/img/mudah.png" alt="sample79" />
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore
                  et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip
                  ex ea commodo consequat."
                </p>
              </div>
              <figcaption>
                <h4><span> Bambang</span></h4>
                <h5>📍Sukamaju Street, Semarang, Indonesia</h5>
                <div class="icons"><a href="#"><i class="fa fa-instagram"></i></a><a
                    href="mailto:hestiyuana9@gmail.com">
                    <i class="fa fa-envelope address"></i></a><a href="#"> <i class="fa fa-phone address"></i></a>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
  },

  async afterRender() {
    const products = document.querySelector('#products');
    const fetchedDataProduct = await dataProduct._fetchAllDataProduct();
    fetchedDataProduct.forEach(async (d) => {
      const sellerName = await dataProduct._fetchUserNameById(d.id_user);
      products.innerHTML += createAllProducts(d.nama_product, d.foto, d.harga, sellerName.namalengkap, d.deskripsi, d.stok);
    });
  },
};

export default Home;
