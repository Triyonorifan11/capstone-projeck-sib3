/* eslint-disable class-methods-use-this */
import { adminRoutes } from '../../routes/routes';
import UrlParser from '../../routes/url-parser';

class AdminApp {
  constructor({ header, aside, maincontent }) {
    this._header = header;
    this._aside = aside;
    this._maincontent = maincontent;
  }

  _loaderActive() {
    const loader = document.querySelector('#js-preloader');
    loader.classList.remove('loaded');
  }

  _loaderHide() {
    setTimeout(() => {
      const loader = document.querySelector('#js-preloader');
      loader.classList.add('loaded');
    }, 250);
  }

  _logoutAdmin() {
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('user_RTproject');
      window.location.href = '../';
    });
  }

  async renderPage() {
    this._loaderActive();
    this._logoutAdmin();
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = adminRoutes[url];
      this._maincontent.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      this._maincontent.innerHTML = `<h1>${error}</h1>`;
    } finally {
      this._loaderHide();
    }
  }
}

export default AdminApp;
