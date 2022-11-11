import 'regenerator-runtime';
import '../styles/homepage.css';
import App from './views/seller/app';

const loader = document.querySelector('#js-preloader');

const app = new App({
  header: document.querySelector('#header'),
  aside: document.querySelector('#sidebar'),
  maincontent: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  loader.classList.add('loaded');
  app.renderPage();
});

window.addEventListener('load', () => {
  loader.classList.add('loaded');
  app.renderPage();
});
