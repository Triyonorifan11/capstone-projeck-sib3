/* eslint-disable no-undef */
import {
  getFirestore, doc, deleteDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../global/firebase-config';
import flassMessage from './flassMessage';

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
