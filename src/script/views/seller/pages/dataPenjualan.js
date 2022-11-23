import dataProduct from '../../../utils/dataProducts';
import createRowTableProduct from '../templates/tableProduct';
import deleteProduct from '../../../utils/deleteProduct';

/* eslint-disable no-undef */
const DataPenjualan = {

  async render() {
    return `
    <div class="pagetitle">
      <h1>Data Penjualan</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#/">Home</a></li>
          <li class="breadcrumb-item active">Data Penjualan</li>
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
                    <h5 class="card-title">
                    Recent Sales
                    <a href="#/addsales" class="btn btn-primary ms-4"><i class="bi bi-plus-circle"></i> Tambah Data</a>
                    </h5>
                    <div class="table-responsive p-1">
                      <table class="table table-bordered table-hover" id="dataseller2">
                          <thead>
                            <tr>
                              <th scope="col">No</th>
                              <th scope="col">Foto</th>
                              <th scope="col">Nama Produk</th>
                              <th scope="col">Harga</th>
                              <th scope="col">stock</th>
                              <th scope="col">Tgl update</th>
                              <th scope="col" class="no-sort">Actions</th>
                            </tr>
                          </thead>
                        <tbody>
                        </tbody>
                      </table>
                    </div>
                    

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
    const dataproduc = await dataProduct.init();
    const tbody = document.querySelector('tbody');
    let i = 0;
    dataproduc.forEach((product) => {
      const data = product.data();
      data.id_produk = product.id;
      i += 1;
      tbody.innerHTML += createRowTableProduct(data, i);
    });

    $('#dataseller2').DataTable({
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'All']],
      columnDefs: [{
        targets: 'no-sort',
        orderable: false,
      }],
    });
    await deleteProduct.init();
  },

};

export default DataPenjualan;
