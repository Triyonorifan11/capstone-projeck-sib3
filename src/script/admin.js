import 'regenerator-runtime';
import AdminApp from './views/admin/app';
import '../styles/homepage.css';

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

window.addEventListener('hashchange', () => {
  const loader = document.querySelector('#js-preloader');
  loader.classList.add('loaded');
  setTimeout(() => {
    loader.classList.remove('loaded');
    appAdmin.renderPage();
  }, 500);
});

window.addEventListener('load', () => {
  const loader = document.querySelector('#js-preloader');
  loader.classList.add('loaded');
  setTimeout(() => {
    loader.classList.remove('loaded');
    appAdmin.renderPage();
  }, 1000);
});
