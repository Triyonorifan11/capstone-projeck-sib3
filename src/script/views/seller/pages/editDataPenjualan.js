/* eslint-disable no-undef */

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
                      <form action="#" method="post" id="addProduct" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="https://firebasestorage.googleapis.com/v0/b/capstone-project-sib3.appspot.com/o/products%2Fproduct_876e3af44529efc70.jpg?alt=media&token=fadc341a-f578-42b3-9d1b-2a635f975267" alt="foto" title="foto produk" class="rounded" style="object-fit: cover;width: 100%;">
                                <div class="my-3">
                                    <label for="editFotoProduk" class="form-label">Ganti foto</label>
                                    <input class="form-control" type="file" id="editFotoProduk" name="editFotoProduk" required accept=".jpg,.jpeg,.png">
                                    <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
                                </div>
                                
                            </div>
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
                                        <option selected>Pilih Jenis</option>
                                        <option value="Sampah Organik">Sampah Organik</option>
                                        <option value="Sampah Anorganik">Sampah Anorganik</option>
                                        <option value="Sampah B3">Sampah B3</option>
                                    </select>
                                </div>
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
                            </div>
                            <div class="mb-3">
                              <label for="deskripsi" class="form-label">Example textarea</label>
                              <textarea class="form-control" id="deskripsi" placeholder="Deskripsi Produk" rows="4"></textarea>
                            </div>
                            <div class="d-grid gap-2 mt-3">
                                <button class="btn btn-primary" type="submit" id="btnEditProduk">Update produk</button>
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

export default editDataPenjualan;
