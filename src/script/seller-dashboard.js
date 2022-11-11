import 'regenerator-runtime';
import App from './views/seller/app';

const app = new App({
  header: document.querySelector('#header'),
  aside: document.querySelector('#sidebar'),
  maincontent: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
