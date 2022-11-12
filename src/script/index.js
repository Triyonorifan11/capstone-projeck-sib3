import 'regenerator-runtime';
import '../styles/homepage.css';

console.log('this for preference');
const loader = document.querySelector('#js-preloader');

window.addEventListener('load', () => {
  console.log('loading..');
  setTimeout(() => {
    loader.classList.add('loaded');
    console.log('finish');
  }, 2400);
});
