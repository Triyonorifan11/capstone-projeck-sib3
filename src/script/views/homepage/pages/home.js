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
  <div class="row">
    <div class="col-md-6 p-3">
      <figure>
        <img
          src="https://asset.kompas.com/crops/dDeShZfgwPo3Kao7Z5bZZviP_Jw=/0x0:0x0/750x500/data/photo/2022/06/20/62afda1d4d992.jpg"
          title="perairan-jakarta-tercemar-sampah-saset-ecoton-layangkan-somasi-ke-jokowi" alt="tumpukan sampah"
          width="100%" class="rounded-4 shadow">
        <figcaption><small>Source: <a
              href="https://megapolitan.kompas.com/image/2022/06/20/10203551/perairan-jakarta-tercemar-sampah-saset-ecoton-layangkan-somasi-ke-jokowi?page=1"
              target="_blank" class="link-primary">kompas.com</a></small></figcaption>
      </figure>
    </div>

    <div class="col-md-6 d-flex align-items-center my-auto">
      <p class="p-4">
        Indonesia merupakan penghasil sampah plastik laut terbesar kedua di dunia setelah China (Kementerian
        Kelautan dan Perikanan, 2019). Berdasarkan data Kementerian Lingkungan Hidup dan Kehutanan (KLHK), Indonesia
        menghasilkan 30,8 juta ton sampah per tahun sampai pada tahun 2021. Faktor meningkatnya sampah di Indonesia
        adalah meningkatnya jumlah penduduk dan sampah plastik yang sulit terurai melalui air maupun tanah. Sehingga
        sampah harus dikelola dengan menerapkan reduce, reuse, dan recycle. Namun tidak semua masyarakat memiliki
        pengetahuan dan akses terkait hal tersebut. Oleh karena itu dibutuhkan sebuah platform untuk membantu
        masyarakat mendapatkan informasi terkait sampah dan lingkungan serta perantara jual beli sampah/produk
        sampah secara online.
      </p>

    </div>
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
    console.log('home');
  },
};

export default Home;
