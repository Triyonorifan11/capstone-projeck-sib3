/* eslint-disable no-undef */
import {
  getFirestore, getDoc, doc, deleteDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, deleteObject } from 'firebase/storage';
import firebaseConfig from '../global/firebase-config';
import flassMessage from './flassMessage';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const deleteAccount = {
  async init() {
    await this._btndeleteClik();
  },

  async _btndeleteClik() {
    const deleteAkun = document.querySelectorAll('#deleteAkun');
    deleteAkun.forEach((btndelete) => {
      btndelete.addEventListener('click', (e) => {
        const id = btndelete.getAttribute('data-id');
        e.preventDefault();
        Swal.fire({
          title: 'Akun ini akan dihapus? ',
          showCancelButton: true,
          confirmButtonText: 'Save',
        }).then((result) => {
          if (result.isConfirmed) {
            this._deleteDataAkun(id);
          }
        });
      });
    });
  },

  async _getaccount(id) {
    const docRef = doc(db, 'users', id);
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

  async _deleteDataAkun(id) {
    const dataakun = await this._getaccount(id);
    try {
      await this._deleteFileproduct(dataakun.fotoprofile);
      await deleteDoc(doc(db, 'users', id));
      flassMessage('success', 'Berhasil!', 'Data akun dihapus!');
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      flassMessage('error', 'Error', `Error${error}`);
    }
  },
};

export default deleteAccount;
