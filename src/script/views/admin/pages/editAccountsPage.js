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
    await editAccount.getValueInputEdit(url.id);
  },
};

export default editAccountsPage;
