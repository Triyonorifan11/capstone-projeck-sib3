import 'regenerator-runtime';
import AdminApp from './views/admin/app';
import '../styles/homepage.css';

const loader = document.querySelector('#js-preloader');
const appAdmin = new AdminApp({
  header: document.querySelector('#header'),
  aside: document.querySelector('#sidebar'),
  maincontent: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('body').classList.remove('toggle-sidebar');
  loader.classList.remove('loaded');
  setTimeout(() => {
    loader.classList.add('loaded');
    appAdmin.renderPage();
  }, 500);
});

window.addEventListener('load', () => {
  loader.classList.remove('loaded');
  setTimeout(() => {
    loader.classList.add('loaded');
    appAdmin.renderPage();
  }, 1000);
});
