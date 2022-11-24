import {
  doc, getDoc, getFirestore,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../global/firebase-config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const editProduct = {
  async init(idProduk) {
    const fetchdata = await this._fetchDataByIdProduct(idProduk);
    return fetchdata;
  },

  async _fetchDataByIdProduct(idProduk) {
    const getId = idProduk;

    const docRef = doc(db, 'products', `${getId}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  },
};

export default editProduct;
