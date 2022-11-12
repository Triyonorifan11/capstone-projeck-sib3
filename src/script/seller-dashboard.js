import 'regenerator-runtime';
import App from './views/seller/app';
import '../styles/homepage.css';

const app = new App({
  header: document.querySelector('#header'),
  aside: document.querySelector('#sidebar'),
  maincontent: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('body').classList.remove('toggle-sidebar');
  const loader = document.querySelector('#js-preloader');
  loader.classList.remove('loaded');
  setTimeout(() => {
    loader.classList.add('loaded');
    app.renderPage();
  }, 500);
});

window.addEventListener('load', () => {
  const loader = document.querySelector('#js-preloader');
  loader.classList.remove('loaded');
  setTimeout(() => {
    loader.classList.add('loaded');
    app.renderPage();
  }, 1000);
});
