/* eslint-disable no-undef */
import UrlParser from '../../../routes/url-parser';
import editAccount from '../../../utils/editAccounts';
import { formEditAkun } from '../templates/edit';

const editAccountsPage = {

  async render() {
    return `
      <div class="pagetitle">
        <h1><a href="#/dataseller" title="Back"><i class="bi bi-arrow-left d-xl-none me-2"></i></a>Update Akun</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#/">Home</a></li>
            <li class="breadcrumb-item active">Edit</li>
          </ol>
        </nav>
      </div><!-- End Page Title -->
      
        <section class="section dashboard">
          <div class="row">
            <!-- Left side columns -->
            <div class="col-lg-12">
              <div class="row">
                <!-- Recent Sales -->
                <div class="col-12">
                
                  <div class="card recent-sales overflow-auto">
                    <div class="card-body">
                      <h5 class="card-title">Update Data</h5>
                      <form action="#" method="post" id="EditProduct" enctype="multipart/form-data">
                        
                      </form>
                        
                    </div>
  
                  </div>
                </div><!-- End Recent Sales -->
              </div>
            </div><!-- End Left side columns -->
  
          </div>
        </section>
      
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    console.log(url.id);
    const dataAkun = await editAccount.init(url.id);
    console.log(dataAkun);
    const formEdit = document.getElementById('EditProduct');
    formEdit.innerHTML = formEditAkun(dataAkun);
    if (dataAkun.fotoprofile) {
      document.getElementById('profilepic').setAttribute('src', dataAkun.fotoprofile);
    } else {
      document.getElementById('profilepic').setAttribute('src', '../../assets/img/profile-img.png');
    }
    const datalist = document.querySelector('#datalistOptions');
    const datalistKab = document.querySelector('#kabupatenData');
    // const inputprovinsi = document.querySelector('#provinsi');
    let provinsiId = '';

    try {
      const response = await fetch('https://proud-erin-parrot.cyclic.app/provinsi', {
        method: 'GET',
        headers: {
          key: 'a8be5cd808491d7418dd4b76b7884dc6',
        },
      });
      const responseJson = await response.json();

      const dataProvinsi = responseJson.rajaongkir.results;
      dataProvinsi.forEach((d) => {
        datalist.innerHTML += `<option data-idprov="${d.province_id}" value="${d.province}">${d.province}</option>`;
      });
    } catch (error) {
      console.log(error);
    }

    datalist.addEventListener('change', async () => {
    //   provinsi = $('#provinsi').val(); // mengambil value dari input
    //   provinsiId = $(`#datalistOptions option[value='${provinsi}']`).attr('data-idprov');
      // ^ mencari atribut pada datalist (<option data-idprov="2" value="dua">) menggunakan bantuan value (DATALIST)

      provinsiId = $('#datalistOptions').find(':selected').attr('data-idprov');

      try {
        const response = await fetch(`https://proud-erin-parrot.cyclic.app/kota?provId=${provinsiId}`, {
          method: 'GET',
          headers: {
            key: 'a8be5cd808491d7418dd4b76b7884dc6',
          },
        });
        const responseJson = await response.json();

        const dataKota = responseJson.rajaongkir.results;
        datalistKab.innerHTML = '';
        datalistKab.innerHTML += '<option data-idcity="null" value="null" disabled selected>Pilih Kab/Kota</options>';
        dataKota.forEach((d) => {
          datalistKab.innerHTML += `<option data-idcity="${d.city_id}" value="${d.city_name}">${d.type} ${d.city_name}</option>`;
        });
      } catch (error) {
        console.log(error);
      }
    });
    await editAccount.getValueInputEdit(url.id);
  },
};

export default editAccountsPage;
