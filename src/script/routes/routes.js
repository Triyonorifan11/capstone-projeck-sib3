// login
import mainLogin from '../views/login/page/main-login';

// dashboard seller
import DashboardSeller from '../views/seller/pages/dashboard';
import Profile from '../views/seller/pages/profile';
import DataPenjualan from '../views/seller/pages/dataPenjualan';
import tambahDataPenjualan from '../views/seller/pages/tambahDataPenjualan';
import editDataPenjualan from '../views/seller/pages/editDataPenjualan';
import DataCheckout from '../views/seller/pages/dataCheckout';
import KemasProduk from '../views/seller/pages/kemasProduk';

// admin
import DashboardAdmin from '../views/admin/pages/dashboard';
import BlogsAdmin from '../views/admin/pages/blogs';
import AccountsAdmin from '../views/admin/pages/accounts';
import ProductsAdmin from '../views/admin/pages/products';
import TransactionsAdmin from '../views/admin/pages/transactions';
import editAccountsPage from '../views/admin/pages/editAccountsPage';
import editProductsPage from '../views/admin/pages/editProductsPage';
import editBlogsPage from '../views/admin/pages/editBlogsPage';
import editTransactionsPage from '../views/admin/pages/editTransactionsPage';

// homepage
import Home from '../views/homepage/pages/home';
import Blog from '../views/homepage/pages/blog';
import About from '../views/homepage/pages/about';
import Checkout from '../views/homepage/pages/checkout';
import Deskripsi from '../views/homepage/pages/deskripsi';
import DetailBlog from '../views/homepage/pages/detailBlog';
import Product from '../views/homepage/pages/product';

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
  '/update/:id': editDataPenjualan,
  '/datacheckout': DataCheckout,
  '/checkout/:id': KemasProduk,
};

// admin dashboard routes
const adminRoutes = {
  '/': DashboardAdmin,
  '/blogs': BlogsAdmin,
  '/accounts': AccountsAdmin,
  '/items': ProductsAdmin,
  '/transactions': TransactionsAdmin,
  '/editakun/:id': editAccountsPage,
  '/editproduct/:id': editProductsPage,
  '/editblog/:id': editBlogsPage,
  '/edittransaction/:id': editTransactionsPage,
};

// homepage dashboard routes
const homepageRoutes = {
  '/': Home,
  '/blog': Blog,
  '/about': About,
  '/checkout': Checkout,
  '/product': Product,
  '/deskripsi/:id': Deskripsi,
  '/detailblog/:id': DetailBlog,
};

export {
  loginRoutes, sellerDashboardRoutes, adminRoutes, homepageRoutes,
};
