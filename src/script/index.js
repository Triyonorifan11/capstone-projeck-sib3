import 'regenerator-runtime';
import '../styles/homepage.css';

console.log('this for preference');
window.addEventListener('load', () => {
  const loader = document.querySelector('#js-preloader');
  loader.classList.add('loaded');
  setTimeout(() => {
    loader.classList.remove('loaded');
  }, 2000);
});
