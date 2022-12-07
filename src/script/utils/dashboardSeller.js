import { initializeApp } from 'firebase/app';
import {
  getFirestore, doc, getDoc, updateDoc, collection, query, where, getCountFromServer,
} from 'firebase/firestore';
import firebaseConfig from '../global/firebase-config';
import dataTransactions from './dataTransactions';
import { getUserInfo } from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DataDashboardSeller = {
  async init() {
    const countProduk = await this._getCountProdukSeller();
    const fetchAllCheckout = await dataTransactions._fetchDataTransactionsByIdSeller(getUserInfo().id);
    let pendapatan = 0;
    fetchAllCheckout.forEach((d) => {
      const data = d.data();

      if (data.status === 'selesai') {
        pendapatan += Math.floor(data.total_harga);
      }
    });
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
    const status = ['diminta', 'sedang dikemas', 'dikirim', 'selesai'];
    const q = query(coll, where('id_seller', '==', idSeller), where('status', 'in', status));
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
