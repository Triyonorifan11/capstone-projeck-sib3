/* eslint-disable class-methods-use-this */
import adminRoutes from '../../routes/admin-routes';
import UrlParser from '../../routes/url-parser';

class AdminApp {
  constructor({ header, aside, maincontent }) {
    this._header = header;
    this._aside = aside;
    this._maincontent = maincontent;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = adminRoutes[url];
    console.log('kode renderpage AdminApp jalan..');
    this._maincontent.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default AdminApp;
