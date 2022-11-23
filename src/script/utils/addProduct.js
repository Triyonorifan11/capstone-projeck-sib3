/* eslint-disable prefer-destructuring */
import { initializeApp } from 'firebase/app';
import {
  getFirestore, doc, setDoc,
} from 'firebase/firestore';
import { customAlphabet } from 'nanoid';
import firebaseConfig from '../global/firebase-config';
import flassMessage from './flassMessage';
import {
  getUserInfo, escapeHtml, uploadFile, redirect,
} from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let fileimage;
const addProduct = {
  async init() {
    await this._getDataForm();
  },

  async _getDataForm() {
    const namaBarang = document.querySelector('#namaBarang');
    const beratBarang = document.querySelector('#beratBarang');
    const jenisBarang = document.querySelector('#jenisBarang');
    const stokBarang = document.querySelector('#stokBarang');
    const hargaBarang = document.querySelector('#hargaBarang');
    const fotoBarang = document.getElementById('fotoBarang');
    const deskripsiProduk = document.querySelector('#deskripsi');
    const btnTambah = document.getElementById('btnTambah');
    const formAddProduct = document.getElementById('addProduct');

    fotoBarang.addEventListener('change', async (e) => {
      e.preventDefault();
      fileimage = e.target.files[0];
    });

    formAddProduct.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnTambah.innerText = 'Mohon tunggu ...';
      btnTambah.classList.add('disabled');
      const dataproduct = {
        nama_product: escapeHtml(namaBarang.value),
        berat_product: escapeHtml(beratBarang.value),
        jenis_barang: escapeHtml(jenisBarang.value),
        stok: escapeHtml(stokBarang.value),
        harga: escapeHtml(hargaBarang.value),
        deskripsi: escapeHtml(deskripsiProduk.value),
        id_user: getUserInfo().id,
        tgl_dibuat: new Date().toISOString(),
        tgl_diupdate: new Date().toISOString(),
      };
      const nanoid = customAlphabet('1234567890abcdef', 17);
      const idProduk = `product_${nanoid()}`;
      await uploadFile(fileimage, idProduk).then((url) => {
        dataproduct.foto = url;
      });
      await this._insertDataProduct(dataproduct, idProduk);
    });
  },

  async _insertDataProduct(data, id) {
    try {
      await setDoc(doc(db, 'products', id), data);
      flassMessage('success', 'Berhasil!', 'Tambah data produk berhasil!');
      redirect('#/dataseller');
    } catch (error) {
      flassMessage('error', 'Gagal Tambah', `Error= ${error}`);
    }
  },
};

export default addProduct;
