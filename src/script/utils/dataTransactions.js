/* eslint-disable no-unused-vars */
import {
  query, where, collection, getFirestore, getDocs, doc, getDoc, orderBy,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../global/firebase-config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const dataTransactions = {

  async _fetchAllDataTransactions() {
    const querySnapshot = await getDocs(query(collection(db, 'checkouts'), orderBy('status')));
    return querySnapshot;
  },

  async _fetchDataById(id) {
    const q = doc(db, 'checkouts', `${id}`);
    const docSnap = await getDoc(q);
    return docSnap.data();
  },

  async _fetchDataTransactions() {
    const querySnapshot = await getDocs(query(collection(db, 'checkouts'), where('status', '!=', 'dibatalkan'), orderBy('status')));
    return querySnapshot;
  },

  async _fetchDataTransactionsByIdBuyer(idBuyer) {
    const querySnapshot = await getDocs(query(collection(db, 'checkouts'), where('id_buyer', '==', `${idBuyer}`)));
    return querySnapshot;
  },

  async _fetchDataTransactionsByIdSeller(idSeller) {
    const querySnapshot = await getDocs(query(collection(db, 'checkouts'), where('id_seller', '==', `${idSeller}`)));
    return querySnapshot;
  },

  async _fetchCancelledDataTransactions() {
    const querySnapshot = await getDocs(query(collection(db, 'checkouts'), where('status', '==', 'dibatalkan')));
    return querySnapshot;
  },
};

export default dataTransactions;
