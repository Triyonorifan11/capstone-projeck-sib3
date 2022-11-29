/* eslint-disable no-undef */
import DataDashboardSeller from '../../../utils/dashboardSeller';
import { formatRupiah } from '../../../utils/functions';
import RekapProdukSeller from '../../../utils/rekapProduk';
import dataProduct from '../../../utils/dataProducts';
import { createTableCheckoutInDashboard } from '../templates/tableProduct';

const DashboardSeller = {

  async render() {
    return `
    <div class="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#/">Home</a></li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section dashboard">
      <div class="row">
        <!-- Left side columns -->
        <div class="col-lg-12">
          <div class="row">

            <!-- Sales Card -->
            <div class="col-xxl-4 col-lg-4 col-md-6">
              <div class="card info-card sales-card">

                <div class="card-body">
                  <h5 class="card-title">Total Produk</h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-cart"></i>
                    </div>
                    <div class="ps-3">
                      <h6 id="total_produk"></h6>
                      <!-- <span class="text-success small pt-1 fw-bold">12%</span> <span
                        class="text-muted small pt-2 ps-1">increase</span>  -->
                    </div>
                  </div>
                </div>

              </div>
            </div><!-- End Sales Card -->

            <!-- Revenue Card -->
            <div class="col-xxl-4 col-lg-4 col-md-6">
              <div class="card info-card revenue-card">

                <div class="card-body">
                  <h5 class="card-title">Total Pendapatan</h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-currency-dollar"></i>
                    </div>
                    <div class="ps-3">
                      <h6 id="total_pendapatan"></h6>
                      <!-- <span class="text-success small pt-1 fw-bold">8%</span> <span
                        class="text-muted small pt-2 ps-1">increase</span> -->

                    </div>
                  </div>
                </div>

              </div>
            </div><!-- End Revenue Card -->

            <!-- Customers Card -->
            <div class="col-xxl-4 col-lg-4">

              <div class="card info-card customers-card">

                <div class="card-body">
                  <h5 class="card-title">Jumlah Pembeli</h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-people"></i>
                    </div>
                    <div class="ps-3">
                      <h6 id="total_pembeli">1244</h6>
                      <!-- <span class="text-danger small pt-1 fw-bold">12%</span> <span
                        class="text-muted small pt-2 ps-1">decrease</span> -->

                    </div>
                  </div>

                </div>
              </div>

            </div><!-- End Customers Card -->

            <!-- Recent Sales -->
            <div class="col-12">
              <div class="card recent-sales overflow-auto">

                <div class="card-body">
                  <h5 class="card-title">Rekap Penjualan <span>| update</span></h5>

                  <table class="table table-borderless" id="dataseller">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">ID Pembelian</th>
                        <th scope="col">Jumlah</th>
                        <th scope="col">Total Harga</th>
                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </table>

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
    const dataDashboard = await DataDashboardSeller.init();
    document.getElementById('total_pembeli').innerText = dataDashboard.jumlah_pembeli;
    document.getElementById('total_pendapatan').innerText = `Rp${formatRupiah(dataDashboard.jumlah_pendapatan.toString())}`;
    document.getElementById('total_produk').innerText = dataDashboard.jumlah_barang;

    // data rekap checkout
    const fetchDataCheckout = await RekapProdukSeller.init();
    console.log(fetchDataCheckout);

    const showDataCheckout = {};
    const data = fetchDataCheckout;
    // fetchDataCheckout.forEach(async (doc) => {
    //   const dataCheckout = doc.data();
    //   const getNamaByid = await dataProduct._fetchUserNameById(dataCheckout.id_buyer);
    //   const getNamaProduk = await dataProduct._fetchDataProductByIdProduk(dataCheckout.id_barang);
    //   const getTbody = document.querySelector('tbody');
    //   i += 1;
    //   showDataCheckout.nomor = i;
    //   showDataCheckout.nama_pembeli = getNamaByid.namalengkap;
    //   showDataCheckout.nama_produk = getNamaProduk.nama_product;
    //   showDataCheckout.id_checkout = doc.id;
    //   showDataCheckout.total_barang = dataCheckout.total_beli;
    //   showDataCheckout.total_harga = dataCheckout.total_harga;
    //   getTbody.innerHTML += createTableCheckoutInDashboard(showDataCheckout, i);
    //   data.push(JSON.stringify(showDataCheckout));
    // });

    $('#dataseller').DataTable({
      data,
      columns: [
        { data: 'nomor' },
        { data: 'id_checkout' },
        { data: 'total_barang' },
        { data: 'total_harga' },
      ],
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'All']],
      columnDefs: [{
        targets: 'no-sort',
        orderable: false,
      }],
    });
  },
};

export default DashboardSeller;
