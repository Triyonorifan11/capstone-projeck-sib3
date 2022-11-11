import 'regenerator-runtime';
import AdminApp from './views/admin/app';

const appAdmin = new AdminApp({
  header: document.querySelector('#header'),
  aside: document.querySelector('#sidebar'),
  maincontent: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  appAdmin.renderPage();
});

window.addEventListener('load', () => {
  appAdmin.renderPage();
});
