import addProduct from '../../../utils/addProduct';
import dataAccount from '../../../utils/dataAccounts';
import dataProduct from '../../../utils/dataProducts';
import deleteProduct from '../../../utils/deleteProduct';

/* eslint-disable no-undef */
const ProductsAdmin = {

  async render() {
    return `
    <div class="mb-3" >
    <button type="button" class="btn btn-primary btn" data-bs-toggle="modal" data-bs-target="#addProducts">Tambah Barang</button>
    </div>

      <section class="section accounts">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">List Barang</h5>
            <div class="table-responsive">
              <table class="table table-hover" id="productTable">
                <thead>
                  <tr class="table-secondary">
                    <th scope="col">#</th>
                    <th scope="col">Penjual</th>
                    <th scope="col">Barang</th>
                    <th scope="col">Stok</th>
                    <th scope="col">Harga</th>
                    <th scope="col" class="no-sort">Gambar</th>
                    <th scope="col" class="no-sort">Actions</th>
                  </tr>
                </thead>
                <tbody class="align-middle" id="bodyProduct">
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- Modal Add Products -->
      <div class="modal fade" id="addProducts" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
              aria-labelledby="addProductsLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-xl">
                  <div class="modal-content" id="form-edit">
                    <form action="#" method="post" id="addProduct" enctype="multipart/form-data">
                          <div class="modal-header border-0 border-top border-4 border-primary">
                              <h1 class="modal-title fs-5" id="addProductsLabel">Add Barang</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body border-top">
                              <div class="row">
                                  <div class="mb-3">
                                        <label for="idSeller" class="form-label">ID Seller</label>
                                        <select class="form-select" aria-label="Default select example" name="idSeller" id="idSeller">
                                          <option selected>Pilih nama penjual</option>
                                        </select>
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
                                  </div>
                                  <div class="col-md-6">
                                      <label for="stokBarang" class="form-label">Stok</label>
                                      <div class="input-group mb-3">
                                          <input type="number" class="form-control" name="stokBarang" id="stokBarang" placeholder="2" aria-label="Stok barang" required>
                                          <span class="input-group-text" id="basic-addon2">Pack</span>
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
                                    <textarea class="form-control" id="deskripsi" name="deskripsi" placeholder="Deskripsi Produk" rows="3"></textarea>
                                  </div>
                                  <div class="d-grid gap-2 mt-2">
                                      <button class="btn btn-primary" type="submit" id="btnTambah">Tambah</button>
                                  </div>
                              </div>
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          </div>
                      </form>
                      
                  </div>
              </div>
      </div>
            `;
  },

  async afterRender() {
    console.log('afterrender items');

    const bodyProduct = document.querySelector('#bodyProduct');
    const fetchedDataProduct = await dataProduct._fetchAllDataProduct();
    console.log(fetchedDataProduct);
    let i = 1;

    fetchedDataProduct.forEach(async (d) => {
      const data = d.data();
      data.id = d.id;
      bodyProduct.innerHTML += `<tr>
      <th scope="row">${i}</th>
      <td id='sellerName' value='${data.id_user}'>${data.id_user}</td>
      <td>${data.nama_product}</td>
      <td>${data.stok} Kilogram</td>
      <td>${data.harga}</td>
      <td><img src="${data.foto}" style="width: 90px; height: 80px" class="rounded"></td>
      <td><a href="#/editProduct/${data.id}" role="button" class="btn btn-outline-secondary">Edit</a>
      <button type="button" class="btn btn-outline-danger" id="deleteProduk" data-id="${data.id}">Del</button></td>
    </tr>`;
      i += 1;
    });

    await dataAccount._convertIDtoName();

    // tambah data
    const selectID = document.getElementById('idSeller');
    const dataSeller = await dataAccount._fetchSellerDataAccount();
    dataSeller.forEach((d) => {
      const data = d.data();
      data.id = d.id;
      selectID.innerHTML += `<option value="${data.id}">${data.namalengkap}</option>`;
    });
    await addProduct._getDataFormAdmin();

    // delete data
    await deleteProduct.init();

    $('#productTable').DataTable({
      // eslint-disable-next-line quotes
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
      columnDefs: [{
        targets: 'no-sort',
        orderable: false,
      }],
    });

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

export default ProductsAdmin;
