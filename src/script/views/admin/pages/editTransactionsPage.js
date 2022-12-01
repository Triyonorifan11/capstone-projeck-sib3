/* eslint-disable no-undef */
import UrlParser from '../../../routes/url-parser';
import dataAccount from '../../../utils/dataAccounts';
import dataProduct from '../../../utils/dataProducts';
import dataTransactions from '../../../utils/dataTransactions';
import editTransaction from '../../../utils/editTransactions';
import { formEditTransaksi } from '../templates/edit';

const editTransactionsPage = {

  async render() {
    return `
      <div class="pagetitle">
        <h1><a href="#/dataseller" title="Back"><i class="bi bi-arrow-left d-xl-none me-2"></i></a>Update Data Transaksi</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#/">Home</a></li>
            <li class="breadcrumb-item active">Edit data</li>
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
                      <h5 class="card-title">Update Data</h5>
                      <form action="#" method="post" id="EditTransaksi" enctype="multipart/form-data">
                        
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
    const fetchedDataTransactions = await dataTransactions._fetchDataById(url.id);

    console.log(fetchedDataTransactions);

    const dataProduk = await dataProduct._fetchDataProductByIdProduk(fetchedDataTransactions.id_barang);
    const dataseller = await dataAccount._fetchUserNameById(fetchedDataTransactions.id_seller);

    const container = document.getElementById('EditTransaksi');
    container.innerHTML = formEditTransaksi(dataProduk, dataseller, fetchedDataTransactions);
    // await editProduct.getValueInputEdit(url.id);

    await editTransaction.getValueInputEdit(url.id);
  },
};

export default editTransactionsPage;
