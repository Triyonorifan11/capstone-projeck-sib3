/* eslint-disable class-methods-use-this */
import UrlParser from '../../routes/url-parser';
import { loginRoutes } from '../../routes/routes';

class AppLogin {
  constructor({ maincontent }) {
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
    }, 2000);
  }

  async renderPage() {
    this._loaderActive();
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = loginRoutes[url];
      this._maincontent.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      this._maincontent.innerHTML = `<h1>${error}</h1>`;
    } finally {
      this._loaderHide();
    }
  }
}

export default AppLogin;
