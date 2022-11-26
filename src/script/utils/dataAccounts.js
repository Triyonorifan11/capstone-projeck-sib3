import {
  query, where, collection, getFirestore, getDocs, doc, getDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../global/firebase-config';
// eslint-disable-next-line no-unused-vars
import { getUserInfo } from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const dataAccount = {
  async init() {
    const getdata = await this._fetchDataProduct();
    return getdata;
  },

  async _fetchDataProduct() {
    const idUser = getUserInfo().id;
    const q = query(collection(db, 'products'), where('id_user', '==', idUser));
    const docSnap = await getDocs(q);
    return docSnap;
  },

  async _fetchAllDataAccount() { // get all account data without the admin
    const querySnapshot = await getDocs(query(collection(db, 'users'), where('user', '!=', 'admin')));
    return querySnapshot;
  },

  async _fetchSellerDataAccount() { // get all account data without the admin
    const querySnapshot = await getDocs(query(collection(db, 'users'), where('user', '==', 'seller')));
    return querySnapshot;
  },

  async _fetchUserNameById(idUser) { // get account data based on id
    const q = doc(db, 'users', idUser);
    const docSnap = await getDoc(q);
    return docSnap.data();
  },
};

export default dataAccount;
