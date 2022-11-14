// login
import mainLogin from '../views/login/page/main-login';

// dashboard seller
import DashboardSeller from '../views/seller/pages/dashboard';
import Profile from '../views/seller/pages/profile';
import DataPenjualan from '../views/seller/pages/dataPenjualan';
import tambahDataPenjualan from '../views/seller/pages/tambahDataPenjualan';

// admin dashboard
import DashboardAdmin from '../views/admin/pages/dashboard';

// login routes
const loginRoutes = {
  '/': mainLogin,
};

// seller dashboard routes
const sellerDashboardRoutes = {
  '/': DashboardSeller,
  '/profile': Profile,
  '/dataseller': DataPenjualan,
  '/addsales': tambahDataPenjualan,
};

// admin dashboard routes
const adminRoutes = {
  '/': DashboardAdmin,
  // '/articles': ArticleAdmin,
  // '/accounts': AccountsAdmin,
  // '/items': ItemsAdmin,
  // '/transactions': TransactionAdmin,
};

export { loginRoutes, sellerDashboardRoutes, adminRoutes };
