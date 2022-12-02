import UrlParser from '../../../routes/url-parser';
import { kemasProduk } from '../templates/tableProduct';
import RekapProdukSeller from '../../../utils/rekapProduk';

const KemasProduk = {
  async render() {
    return `
    <div class="pagetitle">
        <h1><a href="#/datacheckout" title="Back"><i class="bi bi-arrow-left d-xl-none me-2"></i></a>Kemas Produk</h1>
        <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#/datacheckout">Data Penjualan</a></li>
                <li class="breadcrumb-item active">Kemas Produk</li>
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
                      <form action="#" method="post" id="kemasProduk" enctype="multipart/form-data">
                        
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
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataProdukChecOut = await RekapProdukSeller.fetchDataRekapById(url.id);
    const realDataCheckout = await RekapProdukSeller.getRealDataCheckout(dataProdukChecOut);
    const formkemasProduk = document.querySelector('#kemasProduk');
    formkemasProduk.innerHTML = kemasProduk(realDataCheckout);
    const btnKemasProduk = document.querySelector('#btnKemasProduk');
    if (dataProdukChecOut.status.toLowerCase() !== 'diminta') {
      btnKemasProduk.classList.add('disabled');
      btnKemasProduk.classList.add('d-none');
      btnKemasProduk.remove();
    }
    await RekapProdukSeller.checkOutAndKemasProduk(url.id);
  },
};

export default KemasProduk;
