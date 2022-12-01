/* eslint-disable no-undef */
import { initializeApp } from 'firebase/app';
import {
  getFirestore, query, where, collection, getDocs, doc, getDoc, updateDoc, deleteDoc,
} from 'firebase/firestore';
import firebaseConfig from '../global/firebase-config';
import { getUserInfo } from './functions';
import dataProduct from './dataProducts';
import flassMessage from './flassMessage';
import editProduct from './editProduct';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const RekapProdukSeller = {
  async init() {
    const getdata = await this._fetcDataRekap();
    return getdata;
  },

  async _fetcDataRekap() { // fetch data from checkout table
    const getiId = getUserInfo().id;
    const status = ['diminta', 'sedang dikemas', 'dikirim', 'selesai'];
    const q = query(collection(db, 'checkouts'), where('id_seller', '==', getiId), where('status', 'in', status));
    const docSnap = await getDocs(q);
    return docSnap;
  },

  async getDataCheckoutDibatalkan() {
    const getiId = getUserInfo().id;
    const q = query(collection(db, 'checkouts'), where('id_seller', '==', getiId), where('status', '==', 'dibatalkan'));
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
    btnKirim.forEach((btnkirim) => {
      btnkirim.addEventListener('click', (e) => {
        const id = btnkirim.getAttribute('data-id');
        e.preventDefault();
        Swal.fire({
          title: 'Produk ini akan dikirim? ',
          showCancelButton: true,
          confirmButtonText: 'Kirim',
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

  async BatalkanProduk() {
    const btnBatalKirim = document.querySelectorAll('#batalBarang');
    btnBatalKirim.forEach((batal) => {
      batal.addEventListener('click', async (e) => {
        const id = batal.getAttribute('data-id');
        const gettotalBeli = await this.fetchDataRekapById(id);
        const totalBeli = gettotalBeli.total_beli;
        const idBarang = gettotalBeli.id_barang;
        e.preventDefault();
        Swal.fire({
          title: 'Produk ini akan dibatalkan? ',
          showCancelButton: true,
          confirmButtonText: 'Batalkan',
        }).then((result) => {
          if (result.isConfirmed) {
            const data = {
              status: 'dibatalkan',
            };
            this._updateStokAfterDibatalkan(totalBeli, idBarang);
            this._updateStatusCheckOut(data, id);
          }
        });
      });
    });
  },

  async _updateStokAfterDibatalkan(stokCount, id) {
    const getProdukbyId = await editProduct._fetchDataByIdProduct(id);
    const stok = Math.floor(getProdukbyId.stok);
    const jumlahStok = stok + Math.floor(stokCount);
    const updatedataStok = {
      stok: jumlahStok.toString(),
    };
    try {
      const docRef = doc(db, 'products', id);
      await updateDoc(docRef, updatedataStok);
    } catch (error) {
      flassMessage('error', 'Error', `Error${error}`);
    }
  },

  async hapusDataCheckout() {
    const hapusCheckout = document.querySelectorAll('#hapusCheckout');
    hapusCheckout.forEach((btnHapusChekout) => {
      btnHapusChekout.addEventListener('click', (e) => {
        e.preventDefault();
        const idCheckout = btnHapusChekout.getAttribute('data-id');
        Swal.fire({
          title: 'Checkout data akan dihapus? ',
          showCancelButton: true,
          confirmButtonText: 'Batalkan',
        }).then((result) => {
          if (result.isConfirmed) {
            this._deleteDataCheckOut(idCheckout);
          }
        });
      });
    });
  },

  // for delete data checkout by id
  async _deleteDataCheckOut(id) {
    try {
      const docRef = doc(db, 'checkouts', id);
      await deleteDoc(docRef);
      flassMessage('success', 'Berhasil!', 'Data Checkout Dihapus');
    } catch (error) {
      flassMessage('error', 'Error', `Error${error}`);
    }
  },

  // for update status checkout
  async _updateStatusCheckOut(data, idCheckOut) {
    try {
      const docRef = doc(db, 'checkouts', idCheckOut);
      await updateDoc(docRef, data);
      if (data.status === 'dikirim') {
        flassMessage('success', 'Berhasil!', 'Produk akan dikirim');
        setTimeout(() => {
          location.reload();
        }, 1000);
      } else if (data.status === 'dibatalkan') {
        flassMessage('success', 'Berhasil!', 'Produk sedang dibatalkan');
        setTimeout(() => {
          location.reload();
        }, 1000);
      } else {
        flassMessage('success', 'Berhasil!', 'Produk sedang dikemas');
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    } catch (error) {
      flassMessage('error', 'Error!', `error:${error}`);
    }
  },
};

export default RekapProdukSeller;
