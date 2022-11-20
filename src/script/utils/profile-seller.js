import {
  doc, getDoc, getFirestore, updateDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../global/firebase-config';
import flassMessage from './flassMessage';
import { getUserInfo, escapeHtml, uploadFile } from './functions';

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
    const fullname = document.getElementById('fullName');
    fullname.value = temp.namalengkap;

    document.getElementById('provinsi').innerText = temp.provinsi;
    const prov = document.getElementById('edit_provinsi');
    prov.value = temp.provinsi;

    document.getElementById('kabupaten').innerText = temp.kabupaten;
    const kab = document.getElementById('edit_kabupaten');
    kab.value = temp.kabupaten;

    document.getElementById('kecamatan').innerText = temp.kecamatan;
    const kec = document.getElementById('edit_kecamatan');
    kec.value = temp.kecamatan;

    document.getElementById('no_hp_wa').innerText = temp.no_hp_wa;
    const noHp = document.getElementById('nomorhp');
    noHp.value = temp.no_hp_wa;

    document.getElementById('email').innerText = temp.email;
    document.getElementById('edit_email').value = temp.email;

    document.getElementById('nameUser').innerText = temp.namalengkap;

    const status = document.getElementById('status');
    status.innerText = temp.status;
    if (temp.status === 'Active') {
      status.classList.add('text-bg-success');
    }

    const imgProfile = document.querySelector('.imgprofile');
    const editimgprofile = document.querySelector('.editimgprofile');
    if (temp.fotoprofile) {
      imgProfile.setAttribute('src', temp.fotoprofile);
      editimgprofile.setAttribute('src', temp.fotoprofile);
      document.querySelector('.imgnav').setAttribute('src', temp.fotoprofile);
    } else {
      imgProfile.setAttribute('src', '../../assets/img/profile-img.png');
      editimgprofile.setAttribute('src', '../../assets/img/profile-img.png');
      document.querySelector('.imgnav').setAttribute('src', '../../assets/img/profile-img.png');
    }

    const editFoto = document.getElementById('editFoto');
    editFoto.addEventListener('change', async (e) => {
      e.preventDefault();
      await uploadFile(e.target.files[0], getUserInfo().id).then((url) => {
        const data = {};
        console.log(url);
        data.id = getUserInfo().id;
        data.fotoprofile = url;
        this._updateProfile(data);
      });
    });

    const submitEdit = document.getElementById('editProfile');
    submitEdit.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = {
        namalengkap: escapeHtml(fullname.value),
        provinsi: escapeHtml(prov.value),
        kabupaten: escapeHtml(kab.value),
        kecamatan: escapeHtml(kec.value),
        no_hp_wa: escapeHtml(noHp.value),
      };
      data.id = getUserInfo().id;
      await this._updateProfile(data);
    });
  },

  async _updateProfile(user) {
    try {
      const docRef = doc(db, 'users', user.id);
      // eslint-disable-next-line no-param-reassign
      delete user.id;
      await updateDoc(docRef, user);
      flassMessage('success', 'Berhasil!', 'Profile berhasil di edit');
      await this._fetchprofile();
    } catch (error) {
      flassMessage('error', 'Error!', `error:${error}`);
    }
  },
};

export default profileSeller;
