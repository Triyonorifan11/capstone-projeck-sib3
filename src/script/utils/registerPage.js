/* eslint-disable no-alert */
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import { nanoid } from 'nanoid';
import firebaseConfig from '../global/firebase-config';

const registerUser = {
  async init() {
    await this._registerMethod();
  },

  async _registerMethod() {
    initializeApp(firebaseConfig);
    const userResgis = document.querySelector('#user');
    const email = document.querySelector('#emailRegister');
    const namaLengkap = document.querySelector('#nama_lengkap');
    const provinsi = document.querySelector('#provinsi');
    const kabupaten = document.querySelector('#kabupaten');
    const kecamatan = document.querySelector('#kecamatan');
    const nohpwa = document.querySelector('#no_hp_wa');
    const tgllahir = document.querySelector('#tgl_lahir');
    const password = document.querySelector('#password');
    const passwordconfirm = document.querySelector('#password_confirm');
    const register = document.getElementById('register');
    const btnsubmit = document.getElementById('btn-submit');

    register.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnsubmit.innerText = 'loading..';
      if (password.value !== passwordconfirm.value) {
        alert('Password tidak sama.');
        btnsubmit.innerText = 'register';
      } else {
        const data = {
          user: userResgis.value,
          email: email.value,
          namalengkap: namaLengkap.value,
          provinsi: provinsi.value,
          kabupaten: kabupaten.value,
          kecamatan: kecamatan.value,
          no_hp_wa: nohpwa.value,
          tgl_lahir: tgllahir.value,
          password: password.value,
        };
        await this._insertData(data);
      }
    });
  },

  async _insertData(user) {
    try {
      const db = getDatabase();
      const id = nanoid(20);
      const userPath = `${user.user}_${id}`;
      await set(ref(db, `users/${user.user}/${userPath}`), user);
      alert('berhasil register');
      window.location.href = '../login.html';
    } catch (error) {
      alert(`eror:${error}`);
    }
  },
};

export default registerUser;
