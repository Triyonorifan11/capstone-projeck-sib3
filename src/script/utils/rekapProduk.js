import { initializeApp } from 'firebase/app';
import {
  getFirestore, query, where, collection, getDocs,
} from 'firebase/firestore';
import firebaseConfig from '../global/firebase-config';
import { getUserInfo } from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const RekapProdukSeller = {
  async init() {
    const getdata = await this._fetcDataRekap();
    return getdata;
  },

  async _fetcDataRekap() { // fetch data from checkout table
    const getiId = getUserInfo().id;
    const q = query(collection(db, 'checkouts'), where('id_seller', '==', getiId));
    const docSnap = await getDocs(q);
    return docSnap;
  },
};

export default RekapProdukSeller;
