/* eslint-disable prefer-destructuring */
import { initializeApp } from 'firebase/app';
import {
  getFirestore, doc, setDoc,
} from 'firebase/firestore';
import { customAlphabet } from 'nanoid';
import firebaseConfig from '../global/firebase-config';
import dataProduct from './dataProducts';
import editTransaction from './editTransactions';
import flassMessage from './flassMessage';
import {
  getUserInfo, escapeHtml,
} from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const addCheckout = {
  async init() {
    await this.addToDatabase();
  },

  async addToDatabase(idProduk, idSeller) {
    const totalPesan = document.querySelector('#totalBeli');
    const btnSubmit = document.getElementById('btnCheckout');
    const formAddCheckout = document.getElementById('addCheckout');
    const totalHargaForm = document.getElementById('totalHarga');

    const dataProduk = await dataProduct._fetchDataProductByIdProduk(idProduk);
    const currentStock = dataProduk.stok;

    formAddCheckout.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnSubmit.innerText = 'Mohon tunggu ...';
      btnSubmit.classList.add('disabled');

      const totalHarga = totalHargaForm.getAttribute('totalHargaNumber');
      console.log(totalHarga);
      // eslint-disable-next-line no-undef, quotes
      const servicePengiriman = $("#tipePengiriman").find(':selected').attr('service');
      console.log(servicePengiriman);

      const dataCheckout = {
        id_barang: escapeHtml(idProduk),
        id_buyer: getUserInfo().id,
        id_seller: escapeHtml(idSeller),
        status: 'diminta',
        total_beli: escapeHtml(totalPesan.value),
        total_harga: escapeHtml(totalHarga.toString()),
        service: escapeHtml(servicePengiriman),
      };

      const calculateNewStock = Math.floor(currentStock) - Math.floor(totalPesan.value);
      const updatedStockData = {
        stok: calculateNewStock,
      };
      const nanoid = customAlphabet('1234567890abcdef', 17);
      const idCheckout = `checkout_${nanoid()}`;
      await this._insertData(dataCheckout, idCheckout); // add to database checkout
      await editTransaction._updateStokProduct(updatedStockData, idProduk); // update stok produk
    });
  },

  async _insertData(data, id) {
    try {
      await setDoc(doc(db, 'checkouts', id), data);
      flassMessage('success', 'Berhasil!', 'Pemesanan akan diproses!');
      setTimeout(() => {
        location.reload();
      }, 1000);
    } catch (error) {
      flassMessage('error', 'Gagal Memesan', `Error= ${error}`);
    }
  },
};

export default addCheckout;
