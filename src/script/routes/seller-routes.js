import DashboardSeller from '../views/seller/pages/dashboard';
import Profile from '../views/seller/pages/profile';
import DataPenjualan from '../views/seller/pages/dataPenjualan';
import tambahDataPenjualan from '../views/seller/pages/tambahDataPenjualan';

const sellerRoutes = {
  '/': DashboardSeller,
  '/profile': Profile,
  '/dataseller': DataPenjualan,
  '/addsales': tambahDataPenjualan,
};

export default sellerRoutes;
