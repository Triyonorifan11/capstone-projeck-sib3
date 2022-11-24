/* eslint-disable no-undef */
import editProduct from '../../../utils/editProduct';
import UrlParser from '../../../routes/url-parser';
import { formEditProduk } from '../templates/tableProduct';

const editDataPenjualan = {

  async render() {
    return `
      <div class="pagetitle">
        <h1><a href="#/dataseller" title="Back"><i class="bi bi-arrow-left d-xl-none me-2"></i></a>Update data produk</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#/">Home</a></li>
            <li class="breadcrumb-item active">Edit data</li>
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
    const dataProduk = await editProduct.init(url.id);
    const formEdit = document.getElementById('EditProduct');
    formEdit.innerHTML = formEditProduk(dataProduk);
    $('#deskripsi').summernote({
      placeholder: 'Tulis Deskripsi postingan',
      tabsize: 2,
      height: 100,
      toolbar: [
        ['style', ['undo', 'redo', 'style', 'bold', 'underline', 'clear']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['fontsize', ['fontsize']],
        ['fontname', ['fontname']],
        ['height', ['height']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'video']],
        ['view', ['help']],
      ],
    });
    await editProduct.getValueInputEdit(url.id);
  },
};

export default editDataPenjualan;
