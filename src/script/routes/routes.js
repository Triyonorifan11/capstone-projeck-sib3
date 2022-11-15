// login
import mainLogin from '../views/login/page/main-login';

// dashboard seller
import DashboardSeller from '../views/seller/pages/dashboard';
import Profile from '../views/seller/pages/profile';
import DataPenjualan from '../views/seller/pages/dataPenjualan';
import tambahDataPenjualan from '../views/seller/pages/tambahDataPenjualan';

// admin
import DashboardAdmin from '../views/admin/pages/dashboard';
import BlogsAdmin from '../views/admin/pages/blogs';
import AccountsAdmin from '../views/admin/pages/accounts';
import ProductsAdmin from '../views/admin/pages/products';
import TransactionsAdmin from '../views/admin/pages/transactions';

// homepage
import About from '../views/homepage/pages/about';
// import Home from '../views/homepage/pages/home';

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
  '/blogs': BlogsAdmin,
  '/accounts': AccountsAdmin,
  '/items': ProductsAdmin,
  '/transactions': TransactionsAdmin,
};

// homepage dashboard routes
const homepageRoutes = {
  // '/': home,
  '/about': About,
};

export {
  loginRoutes, sellerDashboardRoutes, adminRoutes, homepageRoutes,
};
