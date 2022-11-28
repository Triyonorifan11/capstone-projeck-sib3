import { initializeApp } from 'firebase/app';
import {
  getFirestore, doc, getDoc,
} from 'firebase/firestore';
import firebaseConfig from '../global/firebase-config';
import { getUserInfo } from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DataDashboardSeller = {
  async init() {
    const data = await this._fetchDataSeller();
    return data;
  },

  async _fetchDataSeller() {
    const idSeller = getUserInfo().id;
    const q = doc(db, 'dashboardSellers', idSeller);
    const docSnap = await getDoc(q);
    return docSnap.data();
  },
};

export default DataDashboardSeller;
