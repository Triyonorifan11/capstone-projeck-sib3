import {
  query, where, collection, getFirestore, getDocs, doc, getDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../global/firebase-config';
import { getUserInfo } from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const dataProduct = {
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

  async _fetchAllDataProduct() { // digunakan untuk get all product di homepage
    const tempArr = [];
    const querySnapshot = await getDocs(collection(db, 'products'));
    querySnapshot.forEach((d) => {
      tempArr.push(d.data());
    });
    return tempArr;
  },

  async _fetchUserNameById(idUser) { // digunakan untuk convert user id ke nama di homepage
    const q = doc(db, 'users', idUser);
    const docSnap = await getDoc(q);
    return docSnap.data();
  },
};

export default dataProduct;
