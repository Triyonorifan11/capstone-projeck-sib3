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

  async _fetchDataTransactions() {
    const querySnapshot = await getDocs(query(collection(db, 'checkouts'), where('status', '!=', 'dibatalkan'), orderBy('status')));
    return querySnapshot;
  },

  async _fetchCancelledDataTransactions() {
    const querySnapshot = await getDocs(query(collection(db, 'checkouts'), where('status', '==', 'dibatalkan')));
    return querySnapshot;
  },
};

export default dataTransactions;
