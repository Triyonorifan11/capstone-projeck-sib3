import 'regenerator-runtime';
import '../styles/homepage.css';
import '../styles/about-blog.css';

console.log('seller index');

const loader = document.querySelector('#js-preloader');
window.addEventListener('load', () => {
  loader.classList.remove('loaded');
  setTimeout(() => {
    loader.classList.add('loaded');
  }, 2000);
});
