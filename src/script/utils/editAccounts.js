import {
  doc, getDoc, getFirestore, updateDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../global/firebase-config';
import { uploadFile, escapeHtml } from './functions';
import flassMessage from './flassMessage';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const editAccount = {
  async init(idAkun) {
    const fetchdata = await this._fetchDataByIdAccount(idAkun);
    return fetchdata;
  },

  async getValueInputEdit(id) {
    const editNama = document.querySelector('#fullName');
    const editProvinsi = document.querySelector('#edit_provinsi');
    const editKabupaten = document.querySelector('#edit_kabupaten');
    const editKecamatan = document.querySelector('#edit_kecamatan');
    const editNoHP = document.querySelector('#nomorhp');
    const formEditProduk = document.getElementById('EditProduct');
    const editFoto = document.getElementById('editFoto');
    const btnEditProduk = document.getElementById('btnEditAkun');

    editFoto.addEventListener('change', async (e) => {
      e.preventDefault();
      const fileEditImage = e.target.files[0];
      await uploadFile(fileEditImage, `users/${id}`).then((url) => {
        const data = {};
        data.fotoprofile = url;
        data.tgl_diupdate = new Date().toISOString();
        this._insertEditdata(data, id);
      });
    });
    formEditProduk.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnEditProduk.innerText = 'Mohon tunggu ...';
      btnEditProduk.classList.add('disabled');
      const dataAkun = {
        namalengkap: escapeHtml(editNama.value),
        provinsi: escapeHtml(editProvinsi.value),
        kabupaten: escapeHtml(editKabupaten.value),
        no_hp_wa: escapeHtml(editNoHP.value),
        kecamatan: escapeHtml(editKecamatan.value),
      };
      await this._insertEditdata(dataAkun, id);
    });
  },

  async _insertEditdata(data, idAkun) {
    try {
      const docRef = doc(db, 'users', idAkun);
      await updateDoc(docRef, data);
      flassMessage('success', 'Berhasil!', 'Akun berhasil di edit');
      setTimeout(() => {
        location.reload();
      }, 2000);
    } catch (error) {
      flassMessage('error', 'Error!', `error:${error}`);
    }
  },

  async _fetchDataByIdAccount(idAkun) {
    const docRef = doc(db, 'users', idAkun);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  },
};

export default editAccount;
