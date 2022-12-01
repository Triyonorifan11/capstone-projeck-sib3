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
          <div class="col-lg-12">
            <div class="row">
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
                        <tbody id="daftarCheckout">
                        </tbody>
                      </table>
                    </div>
                    

                  </div>

                </div>

                <!-- data dibatalkan -->
                <div class="card recent-sales overflow-auto">
                  <div class="card-body">
                    <h5 class="card-title">
                    Daftar dibatalkan
                    </h5>
                    <div class="table-responsive p-1">
                      <table class="table table-bordered table-hover" id="BatalData">
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
                        <tbody id="dibatalkan">
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
    const tbody = document.querySelector('#daftarCheckout');
    fetchDataCheckout.forEach((doc) => {
      i += 1;
      const data = doc.data();
      const status = data.status.toLowerCase();
      data.id_checkout = doc.id;
      if (status === 'sedang dikemas') {
        data.bedge = 'text-bg-secondary';
        data.kemas = 'disabled';
        data.delete = 'd-none';
      } else if (status === 'dikirim') {
        data.bedge = 'text-bg-primary';
        data.delete = 'd-none';
        data.kemas = 'disabled';
        data.kirim = 'disabled';
        data.batal = 'disabled';
      } else if (status === 'selesai') {
        data.kemas = 'disabled';
        data.delete = 'd-none';
        data.kirim = 'disabled';
        data.bedge = 'text-bg-success';
      } else if (status === 'dibatalkan') {
        data.bedge = 'text-bg-danger';
        data.batal = 'disabled';
        data.d_none = 'd-none';
        data.delete = 'd-none';
      } else {
        data.delete = 'd-none';
        data.kirim = 'disabled';
        data.bedge = 'text-bg-warning';
      }
      tbody.innerHTML += createTableCheckoutInDataCheckOut(data, i);
    });

    // table checkout dibatalkan
    const dataDibatalkan = await RekapProdukSeller.getDataCheckoutDibatalkan();
    const dibatalkan = document.querySelector('#dibatalkan');
    let j = 0;
    dataDibatalkan.forEach((doc) => {
      const data = doc.data();
      data.id_checkout = doc.id;
      const status = data.status.toLowerCase();
      if (status === 'dibatalkan') {
        data.d_none = 'd-none';
        data.bedge = 'text-bg-danger';
      }
      j += 1;
      dibatalkan.innerHTML += createTableCheckoutInDataCheckOut(data, j);
    });

    $('#dataCheckout').DataTable({
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'All']],
      columnDefs: [{
        targets: 'no-sort',
        orderable: false,
      }],
    });
    $('#BatalData').DataTable({
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'All']],
      columnDefs: [{
        targets: 'no-sort',
        orderable: false,
      }],
    });
    await RekapProdukSeller.BatalkanProduk();
    await RekapProdukSeller.kirimProduk();
    await RekapProdukSeller.hapusDataCheckout();
  },
};

export default DataCheckout;
