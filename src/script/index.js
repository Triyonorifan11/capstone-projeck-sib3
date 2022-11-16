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
    dashboardlink.getAttribute('href');
  } else if ((data.user !== 'seller') || (data.user !== 'admin') || data.user !== 'buyer') {
    dashboardlink.innerHTML = 'Login';
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
