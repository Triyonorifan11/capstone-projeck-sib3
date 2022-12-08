import UrlParser from '../../../routes/url-parser';
import dataAccount from '../../../utils/dataAccounts';
import dataProduct from '../../../utils/dataProducts';
import dataTransactions from '../../../utils/dataTransactions';
import { formatRupiah } from '../../../utils/functions';
import RekapProdukSeller from '../../../utils/rekapProduk';

/* eslint-disable no-undef */
const DetailCheckout = {

  async render() {
    return `
    <section class="section dashboard section mt-5 mx-5 position-relative">
          <div class="row">
            <!-- Left side columns -->
            <div class="col-lg-12">
              <div class="row">
                <!-- Recent Sales -->
                <div class="col-12">
                
                  <div class="card recent-sales overflow-auto">
                    <div class="card-body">
                      <form action="#" method="post" id="selesaikanCheckout" enctype="multipart/form-data">
                        
                      </form>
                        
                    </div>
  
                  </div>
                </div><!-- End Recent Sales -->
              </div>
            </div><!-- End Left side columns -->
  
          </div>
    </section>`;
  },

  async afterRender() {
    console.log('after render detailCheckout');
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const formSelesaikanCheckout = document.getElementById('selesaikanCheckout');
    const fetchedDataCheckouts = await dataTransactions._fetchDataById(url.id);
    const fetchedDataProduk = await dataProduct._fetchDataProductByIdProduk(fetchedDataCheckouts.id_barang);
    const fetchedDataSeller = await dataAccount._fetchUserNameById(fetchedDataCheckouts.id_seller);

    formSelesaikanCheckout.innerHTML = `
    <div class="row mt-3">
        <div class="col-md-6">
            <img src="${fetchedDataProduk.foto}" alt="${fetchedDataProduk.nama_product}" title="foto produk ${fetchedDataProduk.nama_product}" class="rounded" style="object-fit: cover;width: 100%;">        
        </div>
        <div class="col-md-6">
            <div class="mb-3">
                <h4 for="namaBarang" class="form-label fw-bold">Nama Seller</h4>
                <h5 class="" id="namaSeller">${fetchedDataSeller.namalengkap}</h5>
            </div>
            <div class="mb-3">
                <h4 for="namaBarang" class="form-label fw-bold">Lokasi</h4>
                <h5 class="" id="namaBarang">${fetchedDataSeller.kabupaten}</h5>
            </div>
            <div class="mb-3">
                <h4 for="namaBarang" class="form-label fw-bold">Nama Barang</h4>
                <h5 class="" id="namaBarang">${fetchedDataProduk.nama_product}</h5>
            </div>
            <div class="mb-3">
                <h4 for="jeniBarang" class="form-label fw-bold">Jumlah Barang</h4>
                <h5 class="" id="stokTersedia">${fetchedDataCheckouts.total_beli}</h5>
            </div>
            <div class="mb-3">
                <h4 for="jeniBarang" class="form-label fw-bold">Total Harga</h4>
                <h5 class="" id="stokDiminta">Rp ${formatRupiah(fetchedDataCheckouts.total_harga.toString())}</h5>
            </div>
        </div>
    </div>`;

    if (fetchedDataCheckouts.status === 'dikirim') {
      formSelesaikanCheckout.innerHTML += `
        <div class="d-grid gap-2 mt-3">
            <button class="btn btn-success" type="submit" id="btnKonfirmasi"><i class="bi bi-check-circle"></i> Konfirmasi Diterima</button>
        </div>`;

      const btnKonfirmasi = document.getElementById('btnKonfirmasi');

      formSelesaikanCheckout.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = {
          status: 'selesai',
        };
        btnKonfirmasi.classList.add('disabled');
        btnKonfirmasi.innerText = 'Loading ...';
        await RekapProdukSeller._updateStatusCheckOut(data, url.id);
      });
    }
  },
};

export default DetailCheckout;
