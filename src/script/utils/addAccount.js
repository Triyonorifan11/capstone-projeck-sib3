/* eslint-disable no-undef */
import { initializeApp } from 'firebase/app';
import {
  getFirestore, doc, setDoc, query, where, limit, collection, getDocs,
} from 'firebase/firestore';
import { customAlphabet } from 'nanoid';
import CryptoJS from 'crypto-js';

import firebaseConfig from '../global/firebase-config';
import flassMessage from './flassMessage';
import { escapeHtml } from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const encrypt = (value) => {
  const passAES = CryptoJS.AES.encrypt(value, value);
  return passAES.toString();
};

const registerUserInAdmin = {
  async init() {
    await this._registerLoginMethod();
  },

  async _registerLoginMethod() {
    const userResgis = document.getElementById('userRole');

    const email = document.querySelector('#emailRegister');

    const namaLengkap = document.querySelector('#nama_lengkap');
    const kecamatan = document.querySelector('#kecamatan');
    const nohpwa = document.querySelector('#no_hp_wa');
    const tgllahir = document.querySelector('#tgl_lahir');
    const password = document.querySelector('#password');

    const passwordconfirm = document.querySelector('#password_confirm');
    const register = document.getElementById('register');
    const btnsubmit = document.getElementById('btn-submit');

    // for register
    register.addEventListener('submit', async (e) => {
      e.preventDefault();

      const provinsi = $('#datalistOptions').find(':selected').val();
      const cityId = $('#kabupatenData').find(':selected').attr('data-idcity');
      const city = $('#kabupatenData').find(':selected').val();

      if (password.value.length < 6) {
        flassMessage('info', 'Password terlalu pendek', 'Password harus lebih 6 karakter');
        return;
      }

      if (password.value !== passwordconfirm.value) {
        flassMessage('question', 'Password tidak sama', 'Silahkan ulangi password');
      } else {
        const data = {
          user: userResgis.value,
          email: escapeHtml(email.value),
          namalengkap: escapeHtml(namaLengkap.value),
          provinsi: escapeHtml(provinsi),
          kabupaten: escapeHtml(city),
          city_id: escapeHtml(cityId),
          kecamatan: escapeHtml(kecamatan.value),
          no_hp_wa: escapeHtml(nohpwa.value),
          tgl_lahir: escapeHtml(tgllahir.value),
          password: encrypt(password.value),
          status: 'Active',
        };
        console.log(data);
        btnsubmit.classList.add('disabled');
        btnsubmit.innerText = 'loading..';
        await this._insertData(data);
      }
    });
  },

  async _checkemail(email, id = null) {
    let q;
    if (id) {
      q = query(collection(db, 'users'), where('email', '==', email), where('id', '==', id), limit(1));
    } else {
      q = query(collection(db, 'users'), where('email', '==', email), limit(1));
    }

    const docSnap = await getDocs(q);
    if (docSnap.size > 0) {
      const docindex = docSnap.docs[0];
      const user = docindex.data();
      user.id = docindex.id;
      return user;
    }
    return null;
  },

  // insert for resgister
  async _insertData(user) {
    try {
      const checkEmail = await this._checkemail(user.email);
      if (checkEmail) {
        flassMessage('info', 'Email telah terdaftar', 'Silahkan Login!');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        const nanoid = customAlphabet('1234567890abcdef', 17);
        const idUser = `user_${nanoid()}`;
        await setDoc(doc(db, 'users', idUser), user);
        if (user.user === 'seller') {
          const dataDashboard = {
            jumlah_barang: 0,
            jumlah_pembeli: 0,
            jumlah_pendapatan: 0,
          };
          await setDoc(doc(db, 'dashboardSellers', idUser), dataDashboard);
        }
        flassMessage('success', 'Berhasil Daftar', 'Silahkan Login!');
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      }
    } catch (error) {
      flassMessage('error', 'Gagal Daftar', `Error: ${error}`);
    }
  },
};

export default registerUserInAdmin;
