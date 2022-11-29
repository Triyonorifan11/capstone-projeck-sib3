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
    const data = [];
    const getiId = getUserInfo().id;
    const q = query(collection(db, 'checkouts'), where('id_seller', '==', getiId));
    const docSnap = await getDocs(q);
    let i = 0;
    docSnap.forEach((doc) => {
      const docData = doc.data();
      // const getNamaByid = await dataProduct._fetchUserNameById(docData.id_buyer);
      // const getNamaProduk = await dataProduct._fetchDataProductByIdProduk(docData.id_barang);
      i += 1;
      const realData = {};
      realData.nomor = i;
      // realData.nama_pembeli = getNamaByid.namalengkap;
      // realData.nama_produk = getNamaProduk.nama_product;
      realData.id_checkout = doc.id;
      realData.total_barang = docData.total_beli;
      realData.total_harga = docData.total_harga;
      data.push(realData);
    });
    return data;
  },
};

export default RekapProdukSeller;
