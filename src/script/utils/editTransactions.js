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

  async getValueInputEdit(id, stokBarang, prevvalue) {
    const stokBeli = document.getElementById('stokBarang');
    const namaProduk = document.getElementById('produkDetail');
    const idProduk = namaProduk.getAttribute('value');
    const status = document.getElementById('status');
    const formEditTransaksi = document.getElementById('EditTransaksi');
    const btnEditTransaksi = document.getElementById('btnEditTransaksi');

    formEditTransaksi.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnEditTransaksi.innerText = 'Mohon tunggu ...';
      btnEditTransaksi.classList.add('disabled');
      const stokRequest = Math.floor(stokBeli.value);
      const previousVal = Math.floor(prevvalue);
      const currentStock = Math.floor(stokBarang);
      console.log('stokBar', stokBarang);
      console.log('curStok', currentStock);
      // eslint-disable-next-line space-infix-ops

      if (stokRequest > previousVal) {
        const calculate = stokRequest - previousVal;
        console.log('stok', stokRequest);
        console.log('prev', previousVal);
        console.log('calcilate', calculate);
        const dataToDB = currentStock - calculate;
        console.log(typeof calculate);
        console.log(typeof dataToDB);
        console.log(dataToDB);

        const updatedataStok = {
          stok: dataToDB.toString(),
        };
        await this._updateStokProduct(updatedataStok, idProduk);
      } if (stokRequest < previousVal) {
        const calculate = previousVal - stokRequest;
        const dataToDB = currentStock + calculate;
        console.log(typeof calculate);
        console.log(typeof dataToDB);
        console.log('data to db', dataToDB);
        const updatedataStok = {
          stok: dataToDB.toString(),
        };
        await this._updateStokProduct(updatedataStok, idProduk);
      }

      const dataTransaksi = {
        status: escapeHtml(status.value),
        total_beli: escapeHtml(stokRequest.toString()),
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

  async _updateStokProduct(data, idProduk) {
    try {
      const docRef = doc(db, 'products', idProduk);
      await updateDoc(docRef, data);
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
