import dataProduct from '../../../utils/dataProducts';

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
                  <tr>
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
                      <form action="#" id="register" method="post">
                          <div class="modal-header border-0 border-top border-4 border-primary">
                              <h1 class="modal-title fs-5" id="addProductsLabel">Add Barang</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body border-top">
                              <div class="row">
                                  <div class="col-md-12">
                                      <div class="mb-3">
                                          <label for="productsSeller" class="form-label">Nama Penjual <span
                                                  class="text-danger">*</span></label>
                                          <select class="form-select" name="productsSeller" id="productsSeller" required>
                                            <option selected disabled>Pilih penjual</option>
                                            <option value="1">Joko</option>
                                            <option value="2">Kevin</option>
                                            <option value="3">Sinta</option>
                                          </select>
                                      </div>
                                      <div class="mb-3">
                                          <label for="productsName" class="form-label">Nama Barang <span
                                                  class="text-danger">*</span></label>
                                          <input type="text" required name="productsName" class="form-control" id="productsName"
                                              placeholder="Barang jual">
                                      </div>
                                      <div class="mb-3">
                                        <label for="productsGambar" class="form-label">Gambar <span
                                        class="text-danger">*</span></label>
                                        <input class="form-control" type="file" id="productsGambar" required>
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="mb-3">
                                      <label for="productsStock" class="form-label">Stok <span
                                      class="text-danger">*</span></label>
                                      <input class="form-control" type="number" id="productsStock" required
                                          placeholder="....">
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="mb-3">
                                      <label for="productsharga" class="form-label">Harga Satuan <span
                                      class="text-danger">*</span></label>
                                      <input class="form-control" type="number" id="productsharga" required
                                          placeholder="Rp .....">
                                    </div>
                                  </div>
                              </div>
                          </div>
                          <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="submit" id="btn-submit" class="btn btn-primary">Tambah</button>
                          </div>
                      </form>
                  </div>
              </div>
      </div>

      <!-- Modal Edit Products -->
<div class="modal fade" id="editProducts" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="editProductsLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content" id="form-edit">
                <form action="#" id="register" method="post">
                    <div class="modal-header border-0 border-top border-4 border-primary">
                        <h1 class="modal-title fs-5" id="editProductsLabel">Edit Barang</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body border-top">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label for="productsName" class="form-label">Nama Barang <span
                                            class="text-danger">*</span></label>
                                    <input type="text" required name="productsName" class="form-control" id="productsName"
                                        placeholder="Barang jual">
                                </div>
                                <div class="mb-3">
                                  <label for="productsGambar" class="form-label">Gambar <span
                                  class="text-danger">*</span></label>
                                  <input class="form-control" type="file" id="productsGambar" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                              <div class="mb-3">
                                <label for="productsStock" class="form-label">Stok <span
                                class="text-danger">*</span></label>
                                <input class="form-control" type="number" id="productsStock" required
                                    placeholder="....">
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="mb-3">
                                <label for="productsharga" class="form-label">Harga Satuan <span
                                class="text-danger">*</span></label>
                                <input class="form-control" type="number" id="productsharga" required
                                    placeholder="Rp .....">
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
    console.log('afterrender items');

    const bodyProduct = document.querySelector('#bodyProduct');
    const fetchedDataProduct = await dataProduct._fetchAllDataProduct();
    console.log(fetchedDataProduct);
    let i = 1;

    fetchedDataProduct.forEach((d) => {
      // const sellerName = await dataProduct._fetchUserNameById(d.id_user);
      bodyProduct.innerHTML += `<tr>
      <th scope="row">${i}</th>
      <td>${d.id_user}</td>
      <td>${d.nama_product}</td>
      <td>${d.stok} Kilogram</td>
      <td>${d.harga}</td>
      <td><img src="${d.foto}" style="width: 90px; height: 80px" class="rounded"></td>
      <td><button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editProducts">Edit</button> <button type="button" class="btn btn-outline-danger">Del</button></td>
    </tr>`;
      i += 1;
    });

    $('#productTable').DataTable({
      // eslint-disable-next-line quotes
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
      columnDefs: [{
        targets: 'no-sort',
        orderable: false,
      }],
    });
  },
};

export default ProductsAdmin;
