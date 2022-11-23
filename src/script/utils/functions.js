import {
  getStorage, ref, getDownloadURL, uploadBytes,
} from 'firebase/storage';

function isLogin() {
  if (localStorage.getItem('user_RTproject')) {
    return true;
  }
  return false;
}

function getUserInfo() {
  if (isLogin()) {
    return JSON.parse(localStorage.getItem('user_RTproject'));
  }
  return null;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function redirect(page) {
  setTimeout(() => {
    window.location.href = `./${page}`;
  }, 2000);
}
function getFilename(file, name) {
  const extension = file.name.substring(file.name.lastIndexOf('.') + 1);
  return `${name}.${extension}`;
}
async function uploadFile(file, name) {
  const storage = getStorage();
  const filename = getFilename(file, name);
  const storageRef = ref(storage, filename);
  const uploadImage = await uploadBytes(storageRef, file);
  return getDownloadURL(uploadImage.ref).then((url) => Promise.resolve(url));
}

function formatDate(date) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const dateTemp = new Date(date);
  return dateTemp.toLocaleDateString('id-ID', options);
}

function formatRupiah(angka) {
  let separator = '.';
  const numberString = angka.replace(/[^,\d]/g, '').toString();
  const split = numberString.split(',');
  const sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] !== undefined ? `${rupiah},${split[1]}` : rupiah;
  return rupiah;
}

export {
  isLogin, getUserInfo, escapeHtml, redirect, uploadFile, formatDate, formatRupiah,
};
