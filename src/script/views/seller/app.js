/* eslint-disable class-methods-use-this */
import UrlParser from '../../routes/url-parser';
import sellerRoutes from '../../routes/seller-routes';

class App {
  constructor({ header, aside, maincontent }) {
    this._header = header;
    this._aside = aside;
    this._maincontent = maincontent;
    // this._initialAppShell();
  }

  // _initialAppShell() {
  //   const navlink = this._aside.querySelector('.nav-link');
  //   navlink.addEventListener('click', () => {
  //   //   console.log(navlink);
  //   });
  // }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = sellerRoutes[url];
    this._maincontent.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
