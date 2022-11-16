const Home = {

  async render() {
    return `
    <main style="margin-top: 40px; overflow-x: hidden;" id="home">

    <section class="mb-5 position-relative">
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
    `;
  },

  async afterRender() {
    console.log('home');
  },
};

export default Home;
