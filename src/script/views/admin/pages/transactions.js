/* eslint-disable no-undef */
const TransactionsAdmin = {

  async render() {
    return `
          <h1>Transactions</h1>
          
<section class="section accounts">
      <div class="card">
      <div class="card-body">
      <h5 class="card-title">List Penjualan</h5>
      <div class="table-responsive">
      <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Pembeli</th>
      <th scope="col">Barang</th>
      <th scope="col">Jumlah</th>
      <th scope="col">Penjual</th>
      <th scope="col">Total</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody class="align-middle">
    <tr>
      <th scope="row">1</th>
      <td>Joko</td>
      <td>Sampah Plastik</td>
      <td>3 Kilogram</td>
      <td>Parto</td>
      <td>Rp 20.000</td>
      <td><button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Edit</button> <button type="button" class="btn btn-outline-danger">Del</button></td>
    </tr>
    <tr>
    <th scope="row">2</th>
    <td>Kevin</td>
    <td>Sampah Plastik</td>
    <td>3 Kilogram</td>
    <td>Amala</td>
    <td>Rp 20.000</td>
    <td><button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Edit</button> <button type="button" class="btn btn-outline-danger">Del</button></td>
    </tr>
    <tr>
    <th scope="row">3</th>
    <td>Sinta</td>
    <td>Sampah Plastik</td>
    <td>3 Kilogram</td>
    <td>Parto</td>
    <td>Rp 20.000</td>
    <td><button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Edit</button> <button type="button" class="btn btn-outline-danger">Del</button></td>
  </tbody>
</table>
</div>
</div>
</div>
</section>

<!-- Modal edit transaksi -->
<div class="modal fade" id="exampleModalCenter" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content" id="form-register">
            <form action="#" id="register" method="post">
                <div class="modal-header border-0 border-top border-4 border-primary">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit Akun</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body border-top border-1">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label for="penjual" class="form-label">Nama Penjual <span
                                        class="text-danger">*</span></label>
                                <input required name="penjual" class="form-control" id="penjual" list="penjualListOptions"
                                    placeholder="Nama Penjual">
                                <datalist id="penjualListOptions">
                                </datalist>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                              <label for="pembeli" class="form-label">Nama pembeli <span
                                      class="text-danger">*</span></label>
                              <input required name="pembeli" class="form-control" id="pembeli" list="pembeliListOptions"
                                  placeholder="Nama pembeli">
                              <datalist id="pembeliListOptions">
                              </datalist>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                              <label for="barang" class="form-label">Barang <span
                                      class="text-danger">*</span></label>
                              <input required name="barang" class="form-control" id="barang" list="barangListOptions"
                                  placeholder="Barang dari pembeli">
                              <datalist id="barangListOptions">
                              </datalist>
                            </div>
                        </div>
                        <div class="col-md-4">
                          <div class="mb-3">
                              <label for="totalBarang" class="form-label">Total Barang <span
                                    class="text-danger">*</span></label>
                              <input required name="totalBarang" class="form-control" id="totalBarang" list="totalBarangListOptions"
                                  placeholder="Kuantitas barang">
                              <datalist id="totalBarangListOptions">
                              </datalist>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="mb-3">
                            <label for="totalHarga" class="form-label">Total Harga</label>
                            <input required name="totalHarga" class="form-control" id="totalHarga" readonly disabled
                                placeholder="Total harga">
                          </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" id="btn-submit" class="btn btn-primary">Edit</button>
                </div>
            </form>
        </div>
    </div>
</div>
              `;
  },

  async afterRender() {
    console.log('afterrender transactions');
  },
};

export default TransactionsAdmin;
