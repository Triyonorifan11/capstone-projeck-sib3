/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {
  getFirestore, doc, deleteDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../global/firebase-config';
import flassMessage from './flassMessage';
import dataProduct from './dataProducts';
import editTransaction from './editTransactions';
import dataTransactions from './dataTransactions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const deleteTransaction = {
  async init() {
    await this._btndeleteClik();
  },

  async _btndeleteClik() {
    const deleteTransaksi = document.querySelectorAll('#deleteTransaction');
    deleteTransaksi.forEach((btndelete) => {
      btndelete.addEventListener('click', (e) => {
        const id = btndelete.getAttribute('data-id');
        console.log('id', id);
        e.preventDefault();
        Swal.fire({
          title: 'Data ini akan dihapus? ',
          showCancelButton: true,
          confirmButtonText: 'Confirm',
        }).then((result) => {
          if (result.isConfirmed) {
            this._deleteDataTransaction(id);
          }
        });
      });
    });
  },

  async _deleteDataTransaction(id) {
    try {
      const fetchedDataCheckout = await dataTransactions._fetchDataById(id);
      const stokDipesan = fetchedDataCheckout.total_beli;
      const idProduk = fetchedDataCheckout.id_barang;
      console.log(fetchedDataCheckout);
      console.log(idProduk);

      const fetchedDataProduk = await dataProduct._fetchDataProductByIdProduk(idProduk);
      const currentStok = fetchedDataProduk.stok;

      const calculate = Math.floor(stokDipesan) + Math.floor(currentStok);
      const dataToDB = {
        stok: calculate.toString(),
      };
      console.log('data To DB', dataToDB);
      console.log(typeof dataToDB);
      await editTransaction._updateStokProduct(dataToDB, idProduk);
      await deleteDoc(doc(db, 'checkouts', id));
      flassMessage('success', 'Berhasil!', 'Data penjualan dihapus!');
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      flassMessage('error', 'Error', `Error${error}`);
    }
  },
};

export default deleteTransaction;
