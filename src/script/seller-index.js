import 'regenerator-runtime';
import '../styles/homepage.css';

window.addEventListener('load', () => {
  const loader = document.querySelector('#js-preloader');
  loader.classList.add('loaded');
  setTimeout(() => {
    loader.classList.remove('loaded');
  }, 2000);
});
