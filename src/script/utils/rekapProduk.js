/* eslint-disable no-undef */
import { initializeApp } from 'firebase/app';
import {
  getFirestore, query, where, collection, getDocs, doc, getDoc, updateDoc,
} from 'firebase/firestore';
import firebaseConfig from '../global/firebase-config';
import { getUserInfo, redirect } from './functions';
import dataProduct from './dataProducts';
import flassMessage from './flassMessage';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const RekapProdukSeller = {
  async init() {
    const getdata = await this._fetcDataRekap();
    return getdata;
  },

  async _fetcDataRekap() { // fetch data from checkout table
    const getiId = getUserInfo().id;
    const q = query(collection(db, 'checkouts'), where('id_seller', '==', getiId));
    const docSnap = await getDocs(q);
    return docSnap;
  },

  async fetchDataRekapById(id) {
    const docRef = doc(db, 'checkouts', `${id}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  },

  async getRealDataCheckout(data) {
    const realData = {};
    const databuye = await dataProduct._fetchUserNameById(data.id_buyer);
    const databarang = await dataProduct._fetchDataProductByIdProduk(data.id_barang);
    realData.namaPembeli = databuye.namalengkap;
    realData.namaBarang = databarang.nama_product;
    realData.fotoBarang = databarang.foto;
    realData.stokTersedia = Math.floor(databarang.stok);
    realData.stokDiminta = data.total_beli;
    realData.totalHarga = data.total_harga;
    realData.hargaProduk = Math.floor(databarang.harga);
    if (realData.stokDiminta > realData.stokTersedia) {
      flassMessage('info', 'Maaf!', 'Tidak Dapat Kemas barang. Stok tidak mencukupi');
    }
    return realData;
  },

  async checkOutAndKemasProduk(id) {
    const formkemasProduk = document.getElementById('kemasProduk');
    const btnKemasProduk = document.getElementById('btnKemasProduk');
    const idCheckOut = id;
    formkemasProduk.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = {
        status: 'sedang dikemas',
      };
      btnKemasProduk.classList.add('disabled');
      btnKemasProduk.innerText = 'Loading ...';
      await this._updateStatusCheckOut(data, idCheckOut);
    });
  },

  async kirimProduk() {
    const btnKirim = document.querySelectorAll('#kirimBarang');
    btnKirim.forEach((btndelete) => {
      btndelete.addEventListener('click', (e) => {
        const id = btndelete.getAttribute('data-id');
        e.preventDefault();
        Swal.fire({
          title: 'Produk ini akan dikirim? ',
          showCancelButton: true,
          confirmButtonText: 'Confirm',
        }).then((result) => {
          if (result.isConfirmed) {
            const data = {
              status: 'dikirim',
            };
            this._updateStatusCheckOut(data, id);
          }
        });
      });
    });
  },

  async _updateStatusCheckOut(data, idCheckOut) {
    try {
      const docRef = doc(db, 'checkouts', idCheckOut);
      await updateDoc(docRef, data);
      if (data.status === 'dikirim') {
        flassMessage('success', 'Berhasil!', 'Produk akan dikirim');
        setTimeout(() => {
          location.reload();
        }, 2000);
      } else {
        flassMessage('success', 'Berhasil!', 'Produk sedang dikemas');
        setTimeout(() => {
          redirect('#/datacheckout');
        }, 2000);
      }
    } catch (error) {
      flassMessage('error', 'Error!', `error:${error}`);
    }
  },
};

export default RekapProdukSeller;
