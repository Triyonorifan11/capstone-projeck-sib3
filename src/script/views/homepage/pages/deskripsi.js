/* eslint-disable camelcase */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable quote-props */
import UrlParser from '../../../routes/url-parser';
import addCheckout from '../../../utils/addCheckouts';
import dataAccount from '../../../utils/dataAccounts';
import dataProduct from '../../../utils/dataProducts';
import { formatRupiah, getUserInfo } from '../../../utils/functions';

const Deskripsi = {
  async render() {
    return `
    <section class="container deskripsi my-5 mt-3" id="container">
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    if (getUserInfo() == null) {
      document.getElementById('container').innerHTML = '<h2 class="mt-5 bold">Silahkan Login untuk melihat produk dan melakukan cekout</h2>';
    } else {
      const buyerId = getUserInfo().id;

      const dataBuyer = await dataAccount._fetchUserNameById(buyerId);
      const buyerCityId = dataBuyer.city_id;

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
                  <h5 class="fw-bold"><i class="fa-solid fa-users"></i>&nbsp; Penjual</h5>
                  <p>${dataSeller.namalengkap}</p>
                  <h5 class="fw-bold"><i class="fa-solid fa-scale-balanced"></i>&nbsp; Berat Produk</h5>
                  <p>${dataProduk.berat_product} Kg</p>
                  <h5 class="fw-bold"><i class="fa-solid fa-layer-group"></i>&nbsp; Total Stok</h5>
                  <p id='stokProduk' value='${dataProduk.stok}'>${dataProduk.stok}</p>
                  <h5 class="mt-4 mb-2 fw-bold"><i class="fa-regular fa-pen-to-square"></i>&nbsp; Deskripsi Produk</h5>
                  <p>${dataProduk.deskripsi}</p>
                  
                  <form action="#" method="post" id="addCheckout" enctype="multipart/form-data">
                    <div class="btn-group my-3" role="group" aria-label="Basic example">
                      <label for="totalBeli" class="form-label">Satuan Kg</label>
                      <input type="number" class="form-control mx-2" id="totalBeli" min='1' max='${dataProduk.stok}' value='0' required>
                    </div>
                    <div class="mb-3">
                      <label for="jenisEkspedisi" class="form-label">Pilih Ekspedisi</label>
                      <select class="form-select" id="jenisEkspedisi" name="jenisEkspedisi" aria-label="Jenis Ekspedisi" required>
                          <option selected value="jne">JNE</option>
                          <option value="tiki">TIKI</option>
                          <option value="pos">POS</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="tipePengiriman" class="form-label">Tipe Pengiriman</label>
                      <select class="form-select" id="tipePengiriman" name="tipePengiriman" aria-label="Tipe Pengiriman" required>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="totalHarga" class="form-label">Total Harga</label>
                      <input type="text" class="form-control mx-2" id="totalHarga" readonly>
                    </div>
                    <div class="d-grid gap-2">
                      <button class="btn btn-primary" id="btnCheckout" title="checkout" type="submit"><i class="bi bi-cart-plus fs-5"></i></button>
                    </div>
                  </form>
              </div>
          </div>
  
          
          `;

      await addCheckout.addToDatabase(url.id, dataProduk.id_user);
      const tipePengiriman = document.getElementById('tipePengiriman');
      const totalHargaForm = document.getElementById('totalHarga');
      let totalBeli = 1;
      let totalBerat = 0;
      let totalHarga = 0;
      let ekspedisi = 'jne';
      $('input[id=totalBeli]').change(async function () {
        totalBeli = $(this).val();
        totalBerat = Math.floor(totalBeli) * (Math.floor(dataProduk.berat_product) * 1000);

        totalHarga = 0;
        totalHargaForm.setAttribute('totalHargaNumber', totalHarga);
        totalHarga = (totalBeli * dataProduk.harga) + Math.floor(tipePengiriman.value);
        totalHargaForm.value = `Rp ${formatRupiah(totalHarga.toString())}`;

        console.log(totalBeli);
        console.log(totalBerat);

        tipePengiriman.innerHTML = '<option>Silahkan Pilih Jasa</option>';

        try {
          const response = await fetch(`https://proud-erin-parrot.cyclic.app/ongkir?origin=${dataSeller.city_id}&destination=${buyerCityId}&weight=${totalBerat}&courier=${ekspedisi}`, {
            method: 'GET',
            headers: {
              'key': 'a8be5cd808491d7418dd4b76b7884dc6',
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          });
          const responseJson = await response.json();

          const data_ongkir = responseJson.rajaongkir.results[0].costs;
          data_ongkir.forEach((d) => {
            tipePengiriman.innerHTML += `<option value="${d.cost[0].value}" estimate="${d.cost[0].etd}" service="${ekspedisi.toUpperCase()} ${d.service}">${d.service} | ${formatRupiah(d.cost[0].value.toString())} | Estimasi ${d.cost[0].etd} hari </option>`;
          });

          console.log(responseJson);
        } catch (error) {
          console.log(error);
        }
      });

      const dropDownEkspedisi = document.getElementById('jenisEkspedisi');
      dropDownEkspedisi.addEventListener("change", async () => {
        ekspedisi = dropDownEkspedisi.options[dropDownEkspedisi.selectedIndex].value;
        console.log(ekspedisi);

        tipePengiriman.innerHTML = '<option>Silahkan Pilih Jasa</option>';

        try {
          const response = await fetch(`https://proud-erin-parrot.cyclic.app/ongkir?origin=${dataSeller.city_id}&destination=${buyerCityId}&weight=${totalBerat}&courier=${ekspedisi}`, {
            method: 'GET',
            headers: {
              'key': 'a8be5cd808491d7418dd4b76b7884dc6',
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          });
          const responseJson = await response.json();

          const data_ongkir = responseJson.rajaongkir.results[0].costs;
          data_ongkir.forEach((d) => {
            tipePengiriman.innerHTML += `
            <option value="${d.cost[0].value}" estimate="${d.cost[0].etd}" service="${ekspedisi.toUpperCase()} ${d.service}">${d.service} | ${formatRupiah(d.cost[0].value.toString())} | Estimasi ${d.cost[0].etd} hari </option>`;
          });

          console.log(responseJson);
        } catch (error) {
          console.log(error);
        }
      });

      tipePengiriman.addEventListener("change", () => {
        totalHarga = 0;
        totalHarga = (totalBeli * dataProduk.harga) + Math.floor(tipePengiriman.value);
        totalHargaForm.setAttribute('totalHargaNumber', totalHarga);
        totalHargaForm.value = `Rp ${formatRupiah(totalHarga.toString())}`;
      });
    }
  },
};

export default Deskripsi;
