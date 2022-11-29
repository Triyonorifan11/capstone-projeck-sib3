/* eslint-disable no-undef */
import RekapProdukSeller from '../../../utils/rekapProduk';
import { createTableCheckoutInDataCheckOut } from '../templates/tableProduct';

const DataCheckout = {
  async render() {
    return `
    <div class="pagetitle">
        <h1>Data Checkout</h1>
        <nav>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#/">Home</a></li>
            <li class="breadcrumb-item active">Data Check Out</li>
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
                    Daftar Checkout Pembelian
                    </h5>
                    <div class="table-responsive p-1">
                      <table class="table table-bordered table-hover" id="dataCheckout">
                          <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">ID Pembelian</th>
                                <th scope="col">Jumlah Barang</th>
                                <th scope="col">Total Harga</th>
                                <th scope="col">Status</th>
                                <th scope="col" class="no-sort">Action</th>
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
    // data rekap checkout
    let i = 0;
    const fetchDataCheckout = await RekapProdukSeller.init();
    const tbody = document.querySelector('tbody');
    fetchDataCheckout.forEach((doc) => {
      i += 1;
      const data = doc.data();
      const status = data.status.toLowerCase();
      data.id_checkout = doc.id;
      if (status === 'sedang dikemas') {
        data.bedge = 'text-bg-secondary';
      } else if (status === 'dikirim') {
        data.bedge = 'text-bg-primary';
      } else if (status === 'selesai') {
        data.bedge = 'text-bg-success';
      }
      tbody.innerHTML += createTableCheckoutInDataCheckOut(data, i);
    });

    $('#dataCheckout').DataTable({
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'All']],
      columnDefs: [{
        targets: 'no-sort',
        orderable: false,
      }],
    });
  },
};

export default DataCheckout;
