import UrlParser from '../../../routes/url-parser';
import addCheckout from '../../../utils/addCheckouts';
import dataAccount from '../../../utils/dataAccounts';
import dataProduct from '../../../utils/dataProducts';
import { formatRupiah } from '../../../utils/functions';

const Deskripsi = {
  async render() {
    return `
      <section class="container deskripsi my-5 mt-3" id="container">
        
    </section>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const container = document.getElementById('container');
    const dataProduk = await dataProduct._fetchDataProductByIdProduk(url.id);
    const dataSeller = await dataAccount._fetchUserNameById(dataProduk.id_user);
    container.innerHTML += `
          <div class="row mt-5">
            <div class="col-md-5 p-5">
                <div class="d-flex justify-content-center align-items-center">
                  <img class="img-fluid" style="border-radius: 20px;" src="${dataProduk.foto}" width="300%"/>
                </div>
            </div>

            <div class="col-md-7">
                <h2 class="tittle py-4 fw-bold">${dataProduk.nama_product}</h2>
                <h5 class="fw-bold"><i class="fa-solid fa-money-bill-wave"></i>&nbsp; Harga</h5>
                <p>Rp ${formatRupiah(dataProduk.harga)}</p>
                <h5 class="fw-bold"><i class="fa-solid fa-user"></i>&nbsp; Penjual</h5>
                <p>${dataSeller.namalengkap}</p>
                <h5 class="fw-bold"><i class="fa-solid fa-scale-balanced"></i>&nbsp; Berat Produk</h5>
                <p>${dataProduk.berat_product} Kg</p>
                <h5 class="fw-bold"><i class="fa-solid fa-layer-group"></i>&nbsp; Total Stok</h5>
                <p id='stokProduk' value='${dataProduk.stok}'>${dataProduk.stok}</p>
                <h5 class="mt-4 mb-2 fw-bold"><i class="fa-regular fa-pen-to-square"></i>&nbsp; Deskripsi Produk</h5>
                <p>${dataProduk.deskripsi}</p>
                
                <form action="#" method="post" id="addCheckout" enctype="multipart/form-data">
                  <div class="btn-group my-3" role="group" aria-label="Basic example">
                    <button type="button" id="btnMin" class="btn btn-sm btn-primary"><i class="bi bi-dash-circle"></i></button>
                    <input type="number" class="form-control mx-2" id="totalBeli" min='1' max='${dataProduk.stok}'>
                    <button type="button" id="btnPlus" class="btn btn-sm btn-primary"><i class="bi bi-plus-circle"></i></button>
                  </div>
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary" id="btnCheckout" title="checkout" type="submit"><i class="bi bi-cart-plus fs-5"></i></button>
                  </div>
                </form>
            </div>
        </div>`;
    // const btnPlus = document.querySelector('#btnPlus');
    // const btnMin = document.querySelector('#btnMin');
    // const btnCheckout = document.getElementById('btnCheckout');
    await addCheckout.addToDatabase(url.id, dataProduk.id_user);
    // let totalBeli = parseInt(document.querySelector('#totalBeli').value, 10);
    // btnPlus.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   totalBeli = isNaN(totalBeli) ? 0 : totalBeli;
    //   totalBeli += 1;
    //   document.querySelector('#totalBeli').value = totalBeli;
    // });

    // btnMin.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   totalBeli = isNaN(totalBeli) ? 0 : totalBeli;
    //   totalBeli -= 1;
    //   document.querySelector('#totalBeli').value = totalBeli;
    // });

    // btnCheckout.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   console.log(totalBeli);
    //   console.log(document.querySelector('#totalBeli').value);
    // });

    // console.log(url.id);
  },
};

export default Deskripsi;
