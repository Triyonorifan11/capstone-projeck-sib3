import 'regenerator-runtime';
import '../styles/homepage.css';
import '../styles/about-blog.css';

console.log('seller index');

function isLoginSeller() {
  const userRT = localStorage.getItem('user_RTproject');
  const data = JSON.parse(userRT);
  if (!userRT) {
    window.location.href = '../login.html';
  }

  if (data.user !== 'seller') {
    window.location.href = '../login.html';
  }
}

const loader = document.querySelector('#js-preloader');
window.addEventListener('load', () => {
  isLoginSeller();
  loader.classList.remove('loaded');
  setTimeout(() => {
    loader.classList.add('loaded');
  }, 2000);
});
