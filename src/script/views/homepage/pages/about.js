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
          <p class="text-center" id="title">Tentang Reforma Trash</p>
          <br>
          <p class="text-justify text-center" id="bio">
          Reforma Trash merupakan sistem yang dapat memberikan informasi kepada masyarakat untuk mencari informasi terkait sampah di Indonesia. Penggunaan sistem berbasis website ini diharapkan dapat memudahkan masyarakat untuk melakukan jual beli sampah daur ulang secara online. Selain itu dapat membantu pengepul sampah di Indonesia untuk mengumpulkan sampah. Website tersebut memiliki beberapa fitur antara lain jenis-jenis sampah daur ulang, berita sampah di Indonesia, bahkan memiliki sistem monitoring penjualan sampah seperti barang, rekap penjualan, dan akun penjual serta pembeli.
          </p>
        </div>
      </div>
    </div>

    <div class="container-fluid body bg-white shadow-sm">
      <div class="row" id="section1">
        <div class="col-md-7 textbox">
          <p class="text-center" id="title">Alasan Penggunaan</p>
          <br>
          <p class="text-justify text-center" id="bio">
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
      <div class="row container-fluid" id="section1">
        <div class="col-md-5 col-sm-6 d-flex justify-content-center align-items-center">
          <img src="../../assets/img/how-to-use.png" alt="Ada Lovelace Portrait" class="img-responsive center-block img-circle" id="adaPortrait">
          </a>
        </div>
        
        <div class="col-md-7 textbox d-block justify-content-center align-items-center">
          <p class="text-center" id="title">Cara Penggunaan</p>
          <br>
          <p class="text-justify text-center" id="bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper neque ut sodales ornare. Pellentesque vel nisi nulla. Proin ultricies nisl nec tristique ultricies. Quisque volutpat diam et mattis auctor. Curabitur ac neque felis. Proin sed rutrum felis. Vestibulum hendrerit purus at odio facilisis, eu commodo nibh varius. Proin dapibus vulputate metus, at luctus orci pellentesque at. Mauris et sollicitudin massa.
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
                      <a href="wa.me/6285931011450" target="blank"><i class="fa fa-phone address"></i></a>
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
                    <h4><span>Luthfi Kamal Ananda</span></h4>
                    <h5>📍Sukamaju Street, Semarang, Indonesia</h5>
                    <div class="icons">
                      <a href="#"><i class="fa fa-instagram"></i></a>
                      <a href="mailto:hestiyuana9@gmail.com"><i class="fa fa-envelope address"></i></a>
                      <a href="#"> <i class="fa fa-phone address"></i></a>
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
                    <h4><span> Hesti Yuana Mahardika</span></h4>
                    <h5>📍Sukamaju Street, Semarang, Indonesia</h5>
                    <div class="icons">
                      <a href="#"><i class="fa fa-instagram"></i></a>
                      <a href="mailto:hestiyuana9@gmail.com"><i class="fa fa-envelope address"></i></a>
                      <a href="#"> <i class="fa fa-phone address"></i></a>
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
                    <h4><span> Muhammad Syarif Al Husein</span></h4>
                    <h5>📍Sukamaju Street, Semarang, Indonesia</h5>
                    <div class="icons">
                      <a href="#"><i class="fa fa-instagram"></i></a>
                      <a href="mailto:hestiyuana9@gmail.com"><i class="fa fa-envelope address"></i></a>
                      <a href="#"> <i class="fa fa-phone address"></i></a>
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
    console.log('about');
  },
};

export default About;
