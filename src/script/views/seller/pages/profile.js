import profileSeller from '../../../utils/profile-seller';

const Profile = {

  async render() {
    return `
    <div class="pagetitle">
      <h1>Profile</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#/">Home</a></li>
          <li class="breadcrumb-item active">Profile</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->
    <section class="section profile">
      <div class="row">
        <div class="col-xl-4">

          <div class="card">
            <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

              <img src="../../assets/img/profile-img.jpg" alt="Profile" class="rounded-circle">
              <h2 id="nameUser">Kevin Anderson</h2>
              <h3 id="user">Seller <span class="badge " id="status"></span></h3>
              <!-- <div class="social-links mt-2">
                <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
              </div> -->
            </div>
          </div>

        </div>

        <div class="col-xl-8">

          <div class="card">
            <div class="card-body pt-3">
              <!-- Bordered Tabs -->
              <ul class="nav nav-tabs nav-tabs-bordered">

                <li class="nav-item">
                  <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                </li>

                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                </li>


              </ul>
              <div class="tab-content pt-2">

                <div class="tab-pane fade show active profile-overview" id="profile-overview">
                  
                  <h5 class="card-title">Profile Details</h5>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label ">Nama Lengkap</div>
                    <div class="col-lg-9 col-md-8" id="namaLengkap">Kevin Anderson</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Provinsi</div>
                    <div class="col-lg-9 col-md-8" id="provinsi">Jawa Timur</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Kabupaten/Kota</div>
                    <div class="col-lg-9 col-md-8" id="kabupaten">Kota Surabaya</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Kecamatan</div>
                    <div class="col-lg-9 col-md-8" id="kecamatan">A108 Adam Street, New York, NY 535022</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">No Hp/WhatsApp</div>
                    <div class="col-lg-9 col-md-8" id="no_hp_wa">0859 1212 1232</div>
                  </div>

                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Email</div>
                    <div class="col-lg-9 col-md-8" id="email">k.anderson@rtproject.com</div>
                  </div>

                </div>

                <div class="tab-pane fade profile-edit pt-3" id="profile-edit">

                  <!-- Profile Edit Form -->
                  <form method="post" action="#" id="editProfile" enctype="multipart/form-data">
                    <div class="row mb-3">
                      <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Foto Profil</label>
                      <div class="col-md-8 col-lg-9">
                        <img src="../../assets/img/profile-img.jpg" alt="Profile">
                        <input class="form-control" type="file" id="formFile">
                        <div class="pt-2">
                          <a href="#" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="bi bi-upload"></i></a>
                          <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></a>
                        </div>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Nama Lengkap</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="fullName" type="text" class="form-control" autocomplete="off" id="fullName" value="Kevin Anderson">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="edit_provinsi" class="col-md-4 col-lg-3 col-form-label">Provinsi</label>
                      <div class="col-md-8 col-lg-9">
                        <input class="form-control" required name="provinsi" list="datalistOptions" autocomplete="off"
                                        id="edit_provinsi" placeholder="Provinsi">
                                    <!-- https://www.emsifa.com/api-wilayah-indonesia/ -->
                                    <datalist id="datalistOptions">
                                    </datalist>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="kabupaten" class="col-md-4 col-lg-3 col-form-label">Kabupaten</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="kabupaten" type="text" class="form-control" autocomplete="off" id="edit_kabupaten" value="Kota Surabaya">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="kecamatan" class="col-md-4 col-lg-3 col-form-label">Kecamatan</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="kecamatan" type="text" class="form-control" autocomplete="off" id="edit_kecamatan" value="A108 Adam Street, New York, NY 535022">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="nomorhp" class="col-md-4 col-lg-3 col-form-label">Nomor Hp/WhatsApp</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="nomorhp" type="text" class="form-control" autocomplete="off" id="nomorhp" value="0859 1212 1232">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="email" type="email" class="form-control readonly" aria-label="Disabled input email" id="edit_email" value="k.anderson@rtproject.com" disabled readonly>
                      </div>
                    </div>

                    <!-- <div class="row mb-3">
                      <label for="Twitter" class="col-md-4 col-lg-3 col-form-label">Twitter Profile</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="twitter" type="text" class="form-control" id="Twitter" value="https://twitter.com/#">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Facebook" class="col-md-4 col-lg-3 col-form-label">Facebook Profile</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="facebook" type="text" class="form-control" id="Facebook" value="https://facebook.com/#">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Instagram" class="col-md-4 col-lg-3 col-form-label">Instagram Profile</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="instagram" type="text" class="form-control" id="Instagram" value="https://instagram.com/#">
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="Linkedin" class="col-md-4 col-lg-3 col-form-label">Linkedin Profile</label>
                      <div class="col-md-8 col-lg-9">
                        <input name="linkedin" type="text" class="form-control" id="Linkedin" value="https://linkedin.com/#">
                      </div>
                    </div> -->

                    <div class="text-center">
                      <button type="submit" class="btn btn-primary" id="btnEdit">Save Changes</button>
                    </div>
                  </form><!-- End Profile Edit Form -->

                </div>

                

              </div><!-- End Bordered Tabs -->

            </div>
          </div>

        </div>
      </div>
    </section>
      `;
  },

  async afterRender() {
    const datalist = document.querySelector('#datalistOptions');
    fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
      .then((response) => response.json())
      .then((provinces) => provinces.forEach((provinsi) => {
        datalist.innerHTML += `<option value="${provinsi.name}">`;
      }));
    await profileSeller.init();
  },
};

export default Profile;
