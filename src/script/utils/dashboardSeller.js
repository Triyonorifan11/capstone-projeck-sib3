import { initializeApp } from 'firebase/app';
import {
  getFirestore, doc, getDoc, updateDoc, collection, query, where, getCountFromServer,
} from 'firebase/firestore';
import firebaseConfig from '../global/firebase-config';
import { getUserInfo } from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DataDashboardSeller = {
  async init() {
    const countProduk = await this._getCountProdukSeller();
    const dashboardSeller = await this._fetchDataSeller();
    const pendapatan = dashboardSeller.jumlah_pendapatan;
    const jumlahCheckout = await this._getCountCheckOutByIdSeller();
    const data = {
      jumlahProduk: countProduk,
      jumlahPendapatan: pendapatan,
      jumlahCheckOut: jumlahCheckout,
    };
    return data;
  },

  async _getCountProdukSeller() {
    const idSeller = getUserInfo().id;
    const coll = collection(db, 'products');
    const q = query(coll, where('id_user', '==', idSeller));
    const snap = await getCountFromServer(q);
    return snap.data().count;
  },

  async _getCountCheckOutByIdSeller() {
    const idSeller = getUserInfo().id;
    const coll = collection(db, 'checkouts');
    const q = query(coll, where('id_seller', '==', idSeller));
    const snap = await getCountFromServer(q);
    return snap.data().count;
  },

  async _fetchDataSeller() {
    const idSeller = getUserInfo().id;
    const q = doc(db, 'dashboardSellers', idSeller);
    const docSnap = await getDoc(q);
    return docSnap.data();
  },

  async tambahTotalPendapatan() {
    const idSeller = getUserInfo().id;
    const q = doc(db, 'dashboardSellers', idSeller);
    const docSnap = await getDoc(q);
    const jumlProduk = docSnap.data().jumlah_pendapatan;
    await updateDoc(q, { jumlah_pendapatan: jumlProduk + 1 });
  },

  async kurangTotalPendapatan() {
    const idSeller = getUserInfo().id;
    const q = doc(db, 'dashboardSellers', idSeller);
    const docSnap = await getDoc(q);
    const jumlProduk = docSnap.data().jumlah_pendapatan;
    await updateDoc(q, { jumlah_pendapatan: jumlProduk - 1 });
  },

};

export default DataDashboardSeller;
