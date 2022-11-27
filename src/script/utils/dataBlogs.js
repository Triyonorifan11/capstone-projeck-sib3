/* eslint-disable no-unused-vars */
import {
  query, where, collection, getFirestore, getDocs, doc, getDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../global/firebase-config';
import { getUserInfo } from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const dataPosts = {

  async _fetchAllDataPosts() {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    return querySnapshot;
  },
};

export default dataPosts;
