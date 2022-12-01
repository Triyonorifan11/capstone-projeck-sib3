import 'regenerator-runtime';
import '../styles/login.css';
import '../styles/loader.css';
import AppLogin from './views/login/app';

const appLogin = new AppLogin({
  maincontent: document.querySelector('#mainlogin'),
});

window.addEventListener('load', () => {
  const loader = document.querySelector('#js-preloader');
  loader.classList.remove('loaded');
  setTimeout(() => {
    loader.classList.add('loaded');
    appLogin.renderPage();
  }, 500);
});
