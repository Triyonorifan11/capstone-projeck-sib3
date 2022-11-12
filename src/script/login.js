import 'regenerator-runtime';
import '../styles/login.css';
import '../styles/homepage.css';

window.addEventListener('load', () => {
  const loader = document.querySelector('#js-preloader');
  loader.classList.remove('loaded');
  setTimeout(() => {
    loader.classList.add('loaded');
  }, 2000);
});

const datalist = document.querySelector('#datalistOptions');
fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
  .then((response) => response.json())
  .then((provinces) => provinces.forEach((provinsi) => {
    datalist.innerHTML += `<option value="${provinsi.name}">`;
  }));
