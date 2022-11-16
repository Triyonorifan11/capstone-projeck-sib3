/* eslint-disable class-methods-use-this */
import UrlParser from '../../routes/url-parser';
import { sellerDashboardRoutes } from '../../routes/routes';

class App {
  constructor({ header, aside, maincontent }) {
    this._header = header;
    this._aside = aside;
    this._maincontent = maincontent;
    // this._initialAppShell();
  }

  _loaderActive() {
    const loader = document.querySelector('#js-preloader');
    loader.classList.remove('loaded');
  }

  _logoutSeller() {
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('user_RTproject');
      window.location.href = '../../';
    });
  }

  _loaderHide() {
    setTimeout(() => {
      const loader = document.querySelector('#js-preloader');
      loader.classList.add('loaded');
    }, 2000);
  }

  async renderPage() {
    this._loaderActive();
    this._logoutSeller();
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = sellerDashboardRoutes[url];
      this._maincontent.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      this._maincontent.innerHTML = `<h1>${error}</h1>`;
    } finally {
      this._loaderHide();
    }
  }
}

export default App;
