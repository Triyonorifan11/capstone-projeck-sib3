import 'regenerator-runtime';
import AdminApp from './views/admin/app';
import '../styles/loader.css';

function isLoginSeller() {
  const userRT = localStorage.getItem('user_RTproject');
  const data = JSON.parse(userRT);
  if (!userRT) {
    window.location.href = '../';
  }
  if (data.user !== 'admin') {
    window.location.href = '../';
  } else {
    document.getElementById('username').innerText = data.namalengkap;
    document.getElementById('namauser').innerText = data.namalengkap;
    document.getElementById('user').innerText = data.user;
    if (data.fotoprofile) {
      document.querySelector('.imgnav').setAttribute('src', data.fotoprofile);
    }
  }
}

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
  isLoginSeller();
  loader.classList.remove('loaded');
  setTimeout(() => {
    loader.classList.add('loaded');
    appAdmin.renderPage();
  }, 1000);
});
