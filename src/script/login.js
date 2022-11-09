import 'regenerator-runtime';
import '../styles/login.css';

console.log('this for login');
const datalist = document.querySelector('#datalistOptions');
fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
  .then((response) => response.json())
  .then((provinces) => provinces.forEach((provinsi) => {
    datalist.innerHTML += `<option value="${provinsi.name}">`;
  }));
