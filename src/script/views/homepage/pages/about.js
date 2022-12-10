const About = {

  async render() {
    return `
    <div class="container-fluid body">
      <div class="row" id="section1">
        <div class="col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
          <img src="./assets/img/logo500.png" alt="Logo R" class="img-responsive center-block img-circle" id="adaPortrait" width="50%">
          </a>
        </div>
        
        <div class="col-md-8 textbox">
          <h1 class="text-center fw-bold" style="color: #012970;">Tentang Reforma Trash</h1>
          <br>
          <p class="text-justify text-center fs-5" id="bio">
          Reforma Trash merupakan sistem yang dapat memberikan informasi kepada masyarakat untuk mencari informasi terkait sampah di Indonesia. Penggunaan sistem berbasis website ini diharapkan dapat memudahkan masyarakat untuk melakukan jual beli sampah daur ulang secara online. Selain itu dapat membantu pengepul sampah di Indonesia untuk mengumpulkan sampah. Website tersebut memiliki beberapa fitur antara lain jenis-jenis sampah daur ulang, berita sampah di Indonesia, bahkan memiliki sistem monitoring penjualan sampah seperti barang, rekap penjualan, dan akun penjual serta pembeli.
          </p>
        </div>
      </div>
    </div>

    <div class="container-fluid body bg-white shadow-sm">
      <div class="row" id="section1">
        <div class="col-md-7 textbox">
          <h1 class="text-center fw-bold" style="color: #012970;">Alasan Penggunaan</h1>
          <br>
          <p class="text-justify text-center fs-5" id="bio">
          Reforma Trash dapat memberikan akses kepada administrator untuk dapat memasukan data penjual, pembeli, blog, dan rekap penjualan sehingga setiap data yang diinputkan dapat menjadikan bahan evaluasi bahkan untuk blog akan ditampilkan kepada pengguna. Website ini dapat berkembang melalui dukungan masyarakat. Sehingga diharapkan dapat memberikan kesadaran masyarakat bahwa sampah memiliki nilai serta menjaga lingkungan tetap bersih. Selain itu diharapkan dapat meningkatkan produktivitas pengepul sampah sehingga efisisensi tenaga dan waktu dalam mengumpulkan sampah.
          </p>
        </div>
        
        <div class="col-md-5 col-sm-6 d-flex justify-content-center align-items-center">
            <img src="./assets/img/about-us.png" alt="Ada Lovelace Portrait" class="img-responsive center-block img-circle" width="80%">
          </a>
        </div>
      </div>
    </div>

    <div class="container-fluid body">
      <div class="row" id="section1">
        <div class="col-md-5 col-sm-6 d-flex justify-content-center align-items-center">
          <img src="../../assets/img/how-to-use.png" alt="Ada Lovelace Portrait" class="img-responsive center-block img-circle" id="adaPortrait">
          </a>
        </div>
        
        <div class="col-md-7 textbox d-block justify-content-center align-items-center">
          <h1 class="text-center fw-bold my-3" style="color: #012970;">Cara Penggunaan</h1>
          <br>
          <p class="text-justify text-center fs-5" id="bio">
          Pengguna baru dapat melakukan registrasi melalui <a href="./login.html" class="text-link fw-bold">Login</a> dan pilih untuk daftar sebagai penjual atau pembeli. Lalu mengisikan data sesuai inputan yang telah tersedia untuk data profile dari pengguna. Pastikan inputan daftar sebagai untuk pemilihan user sebagai pengguna dan pembeli. setelah registrasi bisa login.
          untuk pembeli dapat melakukan checkout barang dari halaman home. Untuk penjual akan diarahkan ke halaman dashboard penjual dan dapat menambahkan produk yang akan dijual.
          </p>
        </div>
      </div>
    </div>

    <section class="bg-white shadow" id="about-us">
      <div class="container" style="padding: 7rem 0;">
        <div class="d-grid justify-content-center">
          <h1 class="fw-bold text-center" style="color: #012970;">Our Team</h1>
          <div class="col-12">
            <div class="row">
              <div class="d-flex justify-content-around mt-5 flex-wrap">
                <figure class="member">
                  <div class="image"><img src="./assets/img/trfoto.png" alt="Triyono rifan" title="Triyono Rifan" />
                    <p>
                      Mahasiswa Universitas Pembangunan Nasional Veteran Jawa Timur. Program studi Informatika
                      Angkatan tahun 2020 dan mengikuti program Kampus Merdeka Studi Independen Batch 3
                    </p>
                  </div>
                  <figcaption>
                    <h4><span> Triyono Rifan</span></h4>
                    <h5>📍Sumenep, Madura, Jawa Timur</h5>
                    <div class="icons">
                      <a href="https://www.instagram.com/t_riyo.id/" target="_blank"><i class="fa fa-instagram"></i></a>
                      <a href="mailto:triyonorifan01@gmail.com" target="_blank"><i class="fa fa-envelope address"></i></a>
                      <a href="https://www.linkedin.com/in/triyono-rifan-a19142224/" target="blank"><i class="bi bi-linkedin"></i></a>
                    </div>
                  </figcaption>
                </figure>

                <figure class="member">
                  <div class="image"><img src="./assets/img/lkafoto.jpg" alt="Luthfi Kamal Ananda" title="Luthfi Kamal Ananda" />
                    <p>
                      Mahasiswa Universitas Dian Nuswantoro Semarang. Program Studi Teknik Informatika Angkatan tahun 2020 dan mengikuti
                      program Kampus Merdeka Studi Independen Batch 3
                    </p>
                  </div>
                  <figcaption>
                    <h4><span>Luthfi Kamal Ananda</span></h4>
                    <h5>📍Ngaliyan, Semarang, Jawa Tengah</h5>
                    <div class="icons">
                      <a href="https://www.instagram.com/luthfikamalananda/"><i class="fa fa-instagram"></i></a>
                      <a href="mailto:luthfi_kamal_ananda@yahoo.com"><i class="fa fa-envelope address"></i></a>
                      <a href="https://www.linkedin.com/in/luthfi-ananda-224ab2256/"> <i class="bi bi-linkedin"></i></a>
                    </div>
                  </figcaption>
                </figure>

                <figure class="member">
                  <div class="image"><img src="./assets/img/hymfoto.jpg" alt="sample80" />
                    <p>
                    Mahasiswa Universitas Lampung. Program studi Teknik Informatika Angkatan tahun 2020 dan mengikuti
                    program Kampus Merdeka Studi Independen Batch 3
                    </p>
                  </div>
                  <figcaption>
                    <h4><span> Hesti Yuana Mahardika</span></h4>
                    <h5>📍Natar, Lampung Selatan, Lampung</h5>
                    <div class="icons">
                      <a href="https://instagram.com/hestiyuanam"><i class="fa fa-instagram"></i></a>
                      <a href="mailto:hestiyuana9@gmail.com"><i class="fa fa-envelope address"></i></a>
                      <a href="https://www.linkedin.com/in/hesti-yuana-mahardika-b5aa21250/"> <i class="bi bi-linkedin"></i></a>
                    </div>
                  </figcaption>
                </figure>

                <figure class="member">
                  <div class="image"><img src="./assets/img/msahfoto.png" alt="sample79" />
                    <p>
                    Mahasiswa Universitas Lampung. Program studi Teknik Informatika Angkatan tahun 2020 dan mengikuti
                    program Kampus Merdeka Studi Independen Batch 3
                    </p>
                  </div>
                  <figcaption>
                    <h4><span> Muhammad Syarif Al Husein</span></h4>
                    <h5>📍Bandar Lampung, Lampung, Indonesia</h5>
                    <div class="icons">
                      <a href="#"><i class="fa fa-instagram"></i></a>
                      <a href="mailto:muhammadsyarifalhusein@gmail.com"><i class="fa fa-envelope address"></i></a>
                      <a href="https://www.linkedin.com/in/muhammad-syarif-al-husein-355792243/"> <i class="bi bi-linkedin"></i></a>
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
    document.querySelector('#navAbout').classList.add('active');
  },
};

export default About;
