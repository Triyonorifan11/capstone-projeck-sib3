import 'regenerator-runtime';
import '../styles/homepage.css';
import '../styles/about-blog.css';
import HomepageApp from './views/homepage/app';

console.log('seller index');

const dashboardlink = document.getElementById('dashboardlink');
function isLogin() {
  const userRT = localStorage.getItem('user_RTproject');
  const data = JSON.parse(userRT);
  if (!userRT) {
    dashboardlink.innerHTML = 'Login';
    dashboardlink.href = './login.html';
  } else if ((data.user !== 'seller') || (data.user !== 'admin') || data.user !== 'buyer') {
    dashboardlink.href = './login.html';
    dashboardlink.innerHTML = 'Login';
  }

  if (userRT) {
    if (data.user === 'seller') {
      dashboardlink.innerHTML = 'Dashboard';
      dashboardlink.href = './seller/dashboard/';
    } else if (data.user === 'buyer') {
      dashboardlink.innerHTML = 'Dashboard';
      dashboardlink.href = './buyer/';
    } else if (data.user === 'admin') {
      dashboardlink.innerHTML = 'Dashboard';
      dashboardlink.href = './admin/';
    } else {
      dashboardlink.innerHTML = 'Login';
      dashboardlink.href = './login.html';
    }
  }
}

const loader = document.querySelector('#js-preloader');
window.addEventListener('load', () => {
  isLogin();
  loader.classList.remove('loaded');
  setTimeout(() => {
    loader.classList.add('loaded');
  }, 2000);
});

const appHomepage = new HomepageApp({
  header: document.querySelector('#header'),
  // aside: document.querySelector('#sidebar'),
  maincontent: document.querySelector('#home'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('body').classList.remove('toggle-sidebar');
  loader.classList.remove('loaded');
  setTimeout(() => {
    // loader.classList.add('loaded');
    appHomepage.renderPage();
  }, 500);
});

window.addEventListener('load', () => {
  loader.classList.remove('loaded');
  setTimeout(() => {
    loader.classList.add('loaded');
    appHomepage.renderPage();
  }, 1000);
});
