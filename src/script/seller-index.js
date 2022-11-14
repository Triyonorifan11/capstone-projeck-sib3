import 'regenerator-runtime';
import '../styles/homepage.css';
import '../styles/about-blog.css';

console.log('seller index');

function isLoginSeller() {
  if (!localStorage.getItem('user_seller')) {
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
