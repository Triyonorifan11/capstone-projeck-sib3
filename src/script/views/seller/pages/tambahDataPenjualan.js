/* eslint-disable no-undef */
import addProduct from '../../../utils/addProduct';

const tambahDataPenjualan = {

  async render() {
    return `
      <div class="pagetitle">
        <h1><a href="#/dataseller" title="Back"><i class="bi bi-arrow-left d-xl-none me-2"></i></a> Tambah data</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#/">Home</a></li>
            <li class="breadcrumb-item active">Tambah data</li>
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
                      <h5 class="card-title">Add sales data</h5>
                      <form action="#" method="post" id="addProduct" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="namaBarang" class="form-label">Nama</label>
                                    <input type="text" class="form-control" name="namaBarang" id="namaBarang" aria-label="Nama barang" placeholder="Sampah Plastik" required>
                                </div>
                                <label for="beratBarang" class="form-label">Berat Sampah</label>
                                <div class="input-group mb-3">
                                    <input type="number" class="form-control" name="beratBarang" id="beratBarang" placeholder="3" aria-label="Berat barang" aria-describedby="basic-addon2" required>
                                    <span class="input-group-text" id="basic-addon2">Kg</span>
                                </div>
                                <div class="mb-3">
                                    <label for="jeniBarang" class="form-label">Jenis Sampah</label>
                                    <select class="form-select" id="jenisBarang" name="jenisBarang" aria-label="Jenis sampah" required>
                                        <option selected disabled>Pilih Jenis</option>
                                        <option value="Sampah Organik">Sampah Organik</option>
                                        <option value="Sampah Kaca">Sampah Kaca</option>
                                        <option value="Sampah Limbah">Sampah Limbah</option>
                                        <option value="Sampah Aluminium">Sampah Aluminium</option>
                                        <option value="Sampah Besi dan Logam">Sampah Besi dan Logam</option>
                                        <option value="Sampah Elektronik">Sampah Elektronik</option>
                                        <option value="Sampah Plastik">Sampah Plastik</option>
                                    </select>
                                </div>
                                
                            </div>
                            <div class="col-md-6">
                                <label for="stokBarang" class="form-label">Stok</label>
                                <div class="input-group mb-3">
                                    <input type="number" class="form-control" name="stokBarang" id="stokBarang" placeholder="2" aria-label="Stok barang" required>
                                    <span class="input-group-text" id="basic-addon2">pack</span>
                                </div>
                                <label for="hargaBarang" class="form-label">Harga</label>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon2">Rp</span>
                                    <input type="number" class="form-control" name="hargaBarang" id="hargaBarang" placeholder="13000" aria-label="Berat barang" aria-describedby="basic-addon2" required>
                                </div>
                                
                                <div class="mb-3">
                                    <label for="fotoBarang" class="form-label">Foto Barang</label>
                                    <input class="form-control" type="file" id="fotoBarang" name="fotoBarang" required accept=".jpg,.jpeg,.png">
                                    <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
                                </div>
                                
                            </div>
                            <div class="mb-3">
                              <label for="deskripsi" class="form-label">Deskripsi Produk</label>
                              <textarea class="form-control" id="deskripsi" placeholder="Deskripsi Produk" rows="1"></textarea>
                            </div>
                            <div class="d-grid gap-2 mt-2">
                                <button class="btn btn-primary" type="submit" id="btnTambah">Tambah</button>
                            </div>
                        </div>
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
    document.querySelector('#navDataseller').classList.remove('collapsed');
    await addProduct.init();
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
  },
};

export default tambahDataPenjualan;
