import { initializeApp } from 'firebase/app';
import {
  getFirestore, doc, setDoc, query, where, limit, collection, getDocs,
} from 'firebase/firestore';
import { customAlphabet } from 'nanoid';
import CryptoJS from 'crypto-js';

import firebaseConfig from '../global/firebase-config';
import flassMessage from './flassMessage';
import { escapeHtml, redirect } from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const encrypt = (value) => {
  const passAES = CryptoJS.AES.encrypt(value, value);
  return passAES.toString();
};

const decrypt = (dbpass, value) => {
  const passAES = CryptoJS.AES.decrypt(dbpass, value);
  return passAES.toString(CryptoJS.enc.Utf8);
};

const registerUser = {
  async init() {
    await this._registerLoginMethod();
  },

  async _registerLoginMethod() {
    const userResgis = document.querySelector('#user');
    const email = document.querySelector('#emailRegister');
    const emaillogin = document.querySelector('#email');
    const namaLengkap = document.querySelector('#nama_lengkap');
    const provinsi = document.querySelector('#provinsi');
    const kabupaten = document.querySelector('#kabupaten');
    const kecamatan = document.querySelector('#kecamatan');
    const nohpwa = document.querySelector('#no_hp_wa');
    const tgllahir = document.querySelector('#tgl_lahir');
    const password = document.querySelector('#password');
    const passwordlogin = document.querySelector('#yourPassword');
    const passwordconfirm = document.querySelector('#password_confirm');
    const register = document.getElementById('register');
    const btnsubmit = document.getElementById('btn-submit');
    const login = document.getElementById('login');
    const btnlogin = document.getElementById('btnLogin');

    // for login
    login.addEventListener('submit', async (e) => {
      e.preventDefault();
      const dataLogin = {
        emailLogin: escapeHtml(emaillogin.value),
        passwordLogin: escapeHtml(passwordlogin.value),
      };
      btnlogin.classList.add('disabled');
      btnlogin.innerText = 'loading..';
      await this._loginUser(dataLogin);
    });

    // for register
    register.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (password.value.length < 6) {
        flassMessage('info', 'Password terlalu pendek', 'Password harus lebih 6 karakter');
        return;
      }

      if (password.value !== passwordconfirm.value) {
        flassMessage('question', 'Password tidak sama', 'Silahkan ulangi password');
      } else {
        const data = {
          user: escapeHtml(userResgis.value),
          email: escapeHtml(email.value),
          namalengkap: escapeHtml(namaLengkap.value),
          provinsi: escapeHtml(provinsi.value),
          kabupaten: escapeHtml(kabupaten.value),
          kecamatan: escapeHtml(kecamatan.value),
          no_hp_wa: escapeHtml(nohpwa.value),
          tgl_lahir: escapeHtml(tgllahir.value),
          password: encrypt(escapeHtml(password.value)),
          status: 'Active',
        };
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

  // for login method
  async _loginUser(user) {
    const checkEmail = await this._checkemail(user.emailLogin);
    if (checkEmail) {
      const decryptPassDb = decrypt(checkEmail.password, user.passwordLogin);
      if (decryptPassDb === user.passwordLogin) {
        if (checkEmail.user === 'seller') {
          localStorage.setItem('user_RTproject', JSON.stringify(checkEmail));
          redirect('seller/dashboard/');
        } else if (checkEmail.user === 'buyer') {
          localStorage.setItem('user_RTproject', JSON.stringify(checkEmail));
          redirect('./');
        } else if (checkEmail.user === 'admin') {
          localStorage.setItem('user_RTproject', JSON.stringify(checkEmail));
          redirect('admin/');
        } else {
          flassMessage('error', 'User tidak valid', 'Silahkan Daftar!');
          redirect('login.html');
        }
      } else {
        flassMessage('error', 'Password tidak valid', 'Silahkan coba lagi!');
        redirect('login.html');
      }
    } else {
      flassMessage('error', 'Email tidak terdaftar', 'Silahkan daftar!');
      redirect('login.html');
    }
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
        await setDoc(doc(db, 'users', `user_${nanoid()}`), user);
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

export default registerUser;
