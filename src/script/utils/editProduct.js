import {
  doc, getDoc, getFirestore, updateDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../global/firebase-config';
import { uploadFile, escapeHtml } from './functions';
import flassMessage from './flassMessage';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const editProduct = {
  async init(idProduk) {
    const fetchdata = await this._fetchDataByIdProduct(idProduk);
    return fetchdata;
  },

  async getValueInputEdit(id) {
    const editNamaProduk = document.querySelector('#namaBarang');
    const editBeratProduk = document.querySelector('#beratBarang');
    const editJenisProduk = document.querySelector('#jenisBarang');
    const editStokProduk = document.querySelector('#stokBarang');
    const editHargaProduk = document.querySelector('#hargaBarang');
    const editDeskripsiProduk = document.querySelector('#deskripsi');
    const formEditProduk = document.getElementById('EditProduct');
    const editFotoProduk = document.getElementById('editFotoProduk');
    const btnEditProduk = document.getElementById('btnEditProduk');

    editFotoProduk.addEventListener('change', async (e) => {
      e.preventDefault();
      const fileEditImage = e.target.files[0];
      await uploadFile(fileEditImage, `products/${id}`).then((url) => {
        const data = {};
        data.foto = url;
        data.tgl_diupdate = new Date().toISOString();
        this._insertEditdata(data, id);
      });
    });
    formEditProduk.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnEditProduk.innerText = 'Mohon tunggu ...';
      btnEditProduk.classList.add('disabled');
      const dataProduk = {
        nama_product: escapeHtml(editNamaProduk.value),
        berat_product: escapeHtml(editBeratProduk.value),
        jenis_barang: escapeHtml(editJenisProduk.value),
        stok: escapeHtml(editStokProduk.value),
        harga: escapeHtml(editHargaProduk.value),
        deskripsi: editDeskripsiProduk.value,
        tgl_diupdate: new Date().toISOString(),
      };
      await this._insertEditdata(dataProduk, id);
    });
  },

  async _insertEditdata(data, idProduk) {
    try {
      const docRef = doc(db, 'products', idProduk);
      await updateDoc(docRef, data);
      flassMessage('success', 'Berhasil!', 'Produk berhasil di edit');
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      flassMessage('error', 'Error!', `error:${error}`);
    }
  },

  async _fetchDataByIdProduct(idProduk) {
    const getId = idProduk;

    const docRef = doc(db, 'products', `${getId}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  },
};

export default editProduct;
