import {
  doc, getDoc, getFirestore, updateDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../global/firebase-config';
import { escapeHtml, redirect } from './functions';
import flassMessage from './flassMessage';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const editTransaction = {
  async init(idTransaksi) {
    const fetchdata = await this._fetchDataByIdProduct(idTransaksi);
    return fetchdata;
  },

  async getValueInputEdit(id) {
    const stokRequest = document.getElementById('stokBarang');
    const status = document.getElementById('status');
    const formEditTransaksi = document.getElementById('EditTransaksi');
    const btnEditTransaksi = document.getElementById('btnEditTransaksi');

    formEditTransaksi.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnEditTransaksi.innerText = 'Mohon tunggu ...';
      btnEditTransaksi.classList.add('disabled');
      const dataTransaksi = {
        status: escapeHtml(status.value),
        total_beli: escapeHtml(stokRequest.value),
      };
      await this._insertEditdata(dataTransaksi, id);
    });
  },

  async _insertEditdata(data, idTransaksi) {
    try {
      const docRef = doc(db, 'checkouts', idTransaksi);
      await updateDoc(docRef, data);
      flassMessage('success', 'Berhasil!', 'Data berhasil di edit');
      setTimeout(() => {
        redirect('#/transactions');
      }, 2000);
    } catch (error) {
      flassMessage('error', 'Error!', `error:${error}`);
    }
  },

  async _fetchDataByIdProduct(idTransaksi) {
    const getId = idTransaksi;

    const docRef = doc(db, 'products', `${getId}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  },
};

export default editTransaction;
