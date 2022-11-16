import 'regenerator-runtime';
import '../styles/homepage.css';
import '../styles/about-blog.css';

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
