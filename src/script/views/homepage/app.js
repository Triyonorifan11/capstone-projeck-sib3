/* eslint-disable class-methods-use-this */
// console.log('for home preference');

import { homepageRoutes } from '../../routes/routes';
import UrlParser from '../../routes/url-parser';

class AppHomepage {
  constructor({ header, maincontent }) {
    this._header = header;
    this._maincontent = maincontent;
    // this._initialAppShell();
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
      const page = homepageRoutes[url];
      console.log('kode renderpage AdminApp jalan..');
      this._maincontent.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      this._maincontent.innerHTML = `<h1>${error}</h1>`;
    } finally {
      this._loaderHide();
    }
  }
}

export default AppHomepage;
