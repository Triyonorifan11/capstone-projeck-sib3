import {
  doc, getDoc, getFirestore,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../global/firebase-config';
import flassMessage from './flassMessage';
import { getUserInfo } from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const profileSeller = {
  async init() {
    await this._fetchprofile();
  },

  async _getDataUser(id) {
    const docRef = doc(db, 'users', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  },

  async _fetchprofile() {
    const temp = await this._getDataUser(getUserInfo().id);
    document.getElementById('namaLengkap').innerText = temp.namalengkap;
    document.getElementById('fullName').value = temp.namalengkap;
    document.getElementById('provinsi').innerText = temp.provinsi;
    document.getElementById('edit_provinsi').value = temp.provinsi;
    document.getElementById('kabupaten').innerText = temp.kabupaten;
    document.getElementById('edit_kabupaten').value = temp.kabupaten;
    document.getElementById('kecamatan').innerText = temp.kecamatan;
    document.getElementById('edit_kecamatan').value = temp.kecamatan;
    document.getElementById('no_hp_wa').innerText = temp.no_hp_wa;
    document.getElementById('nomorhp').value = temp.no_hp_wa;
    document.getElementById('email').innerText = temp.email;
    document.getElementById('edit_email').value = temp.email;
    document.getElementById('nameUser').innerText = temp.namalengkap;

    const submitEdit = document.getElementById('editProfile');
    submitEdit.addEventListener('submit', async (e) => {
      e.preventDefault();
      console.log(document.getElementById('fullName').value);
      flassMessage('success', 'Update Berhasil', 'Ubah data berhasil');
    });
  },
};

export default profileSeller;
