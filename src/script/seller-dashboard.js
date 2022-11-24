import 'regenerator-runtime';
import App from './views/seller/app';
import '../styles/homepage.css';

function isLoginSeller() {
  const userRT = localStorage.getItem('user_RTproject');
  const data = JSON.parse(userRT);
  if (data.user !== 'seller') {
    window.location.href = '../../';
  }
  if (!userRT) {
    window.location.href = '../../';
  } else {
    document.getElementById('username').innerText = data.namalengkap;
    document.getElementById('namauser').innerText = data.namalengkap;
    document.getElementById('user').innerText = data.user;
    if (data.fotoprofile) {
      document.querySelector('.imgnav').setAttribute('src', data.fotoprofile);
    }
  }
}

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
  isLoginSeller();
  const loader = document.querySelector('#js-preloader');
  loader.classList.remove('loaded');
  setTimeout(() => {
    loader.classList.add('loaded');
    app.renderPage();
  }, 1000);
});
