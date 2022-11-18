import 'regenerator-runtime';
import '../styles/home.css';
import '../styles/about-blog.css';
import AppHomepage from './views/homepage/app';

const homepageApp = new AppHomepage({
  header: document.querySelector('#header'),
  maincontent: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  homepageApp.renderPage();
});

window.addEventListener('load', () => {
  homepageApp.renderPage();
});
