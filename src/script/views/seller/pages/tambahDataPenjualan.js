/* eslint-disable no-undef */
const tambahDataPenjualan = {

  async render() {
    return `
      <div class="pagetitle">
        <h1><a href="#/dataseller" title="Back" class="me-2"><i class="bi bi-arrow-left"></i></a> Tambah data</h1>
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
                      <form action="" method="post">
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
                                        <option selected>Pilih Jenis</option>
                                        <option value="sampahOrganik">Sampah Organik</option>
                                        <option value="sampahAnorganik">Sampah Anorganik</option>
                                        <option value="sampahB3">Sampah B3</option>
                                    </select>
                                </div>
                                    
                            </div>
                            <div class="col-md-6">
                                <label for="hargaBarang" class="form-label">Berat Sampah</label>
                                <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon2">Rp</span>
                                    <input type="number" class="form-control" name="hargaBarang" id="hargaBarang" placeholder="13000" aria-label="Berat barang" aria-describedby="basic-addon2" required>
                                </div>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Foto Barang</label>
                                    <input class="form-control" type="file" id="formFile" name="fotoBarang" required accept=".jpg,.jpeg,.png">
                                    <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
                                </div>
                                <div class="d-grid gap-2 mt-4">
                                    <button class="btn btn-primary" type="submit">Tambah</button>
                                </div>
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
    console.log('add data');
  },
};

export default tambahDataPenjualan;
