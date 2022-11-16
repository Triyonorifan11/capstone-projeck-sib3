import 'regenerator-runtime';
import '../styles/home.css';
import '../styles/about-blog.css';
import AppHomepage from './views/homepage/app';

const loader = document.querySelector('#js-preloader');
const homepageApp = new AppHomepage({
  header: document.querySelector('#header'),
  maincontent: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('body').classList.remove('toggle-sidebar');
  loader.classList.remove('loaded');
  setTimeout(() => {
    loader.classList.add('loaded');
    homepageApp.renderPage();
  }, 500);
});

window.addEventListener('load', () => {
  loader.classList.remove('loaded');
  setTimeout(() => {
    loader.classList.add('loaded');
    homepageApp.renderPage();
  }, 1000);
});
