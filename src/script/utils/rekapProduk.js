import { initializeApp } from 'firebase/app';
import {
  getFirestore, query, where, collection, getDocs, doc, getDoc,
} from 'firebase/firestore';
import firebaseConfig from '../global/firebase-config';
import { getUserInfo } from './functions';
import dataProduct from './dataProducts';
import flassMessage from './flassMessage';

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

  async fetchDataRekapById(id) {
    const docRef = doc(db, 'checkouts', `${id}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  },

  async getRealDataCheckout(data) {
    const realData = {};
    const databuye = await dataProduct._fetchUserNameById(data.id_buyer);
    const databarang = await dataProduct._fetchDataProductByIdProduk(data.id_barang);
    realData.namaPembeli = databuye.namalengkap;
    realData.namaBarang = databarang.nama_product;
    realData.fotoBarang = databarang.foto;
    realData.stokTersedia = Math.floor(databarang.stok);
    realData.stokDiminta = data.total_beli;
    if (realData.stokDiminta > realData.stokTersedia) {
      flassMessage('info', 'Maaf!', 'Tidak Dapat Kemas barang. Stok tidak mencukupi');
    }
    return realData;
  },
};

export default RekapProdukSeller;
