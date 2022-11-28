/* eslint-disable no-undef */
import {
  getFirestore, getDoc, doc, deleteDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, deleteObject } from 'firebase/storage';
import firebaseConfig from '../global/firebase-config';
import flassMessage from './flassMessage';
import DataDashboardSeller from './dashboardSeller';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const deleteProduct = {
  async init() {
    await this._btndeleteClik();
  },

  async _btndeleteClik() {
    const deleteProduk = document.querySelectorAll('#deleteProduk');
    deleteProduk.forEach((btndelete) => {
      btndelete.addEventListener('click', (e) => {
        const id = btndelete.getAttribute('data-id');
        e.preventDefault();
        Swal.fire({
          title: 'Produk ini akan dihapus? ',
          showCancelButton: true,
          confirmButtonText: 'Confirm',
        }).then((result) => {
          if (result.isConfirmed) {
            this._deleteDataProduk(id);
          }
        });
      });
    });
  },

  async _getproduk(id) {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  },

  async _deleteFileproduct(url) {
    const storage = getStorage();
    const desertRef = ref(storage, url);
    try {
      await deleteObject(desertRef);
    } catch (error) {
      flassMessage('error', 'Error', `Error${error}`);
    }
  },

  async _deleteDataProduk(id) {
    const dataproduk = await this._getproduk(id);
    try {
      await this._deleteFileproduct(dataproduk.foto);
      await deleteDoc(doc(db, 'products', id));
      await DataDashboardSeller.kurangTotalProduk();
      flassMessage('success', 'Berhasil!', 'Data produk dihapus!');
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      flassMessage('error', 'Error', `Error${error}`);
    }
  },
};

export default deleteProduct;
