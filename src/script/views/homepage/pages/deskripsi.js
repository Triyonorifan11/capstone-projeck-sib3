import UrlParser from '../../../routes/url-parser';

const Deskripsi = {
  async render() {
    return `
      <section class="container deskripsi my-5 mt-3">
        <div class="row mt-5">
            <div class="col-md-5 p-5">
                <div class="d-flex justify-content-center align-items-center">
                  <img class="img-fluid" src="./assets/img/jualbeli.png" width="80%"/>
                </div>
            </div>

            <div class="col-md-7">
                <h3 class="tittle py-4 fw-bold">Sampah Botol Plastik</h3>
                <h2>Rp 15.000</h2>
                <h4 class="mt-4 mb-2">Deskripsi Produk</h4>
                <p>Sampah botol plastik merupakan bahan padat buangan dari kegiatan manusia yang sudah terpakai. Sampah merupakan konsekuensi dari adanya aktivitas manusia yang begitu kompleks dari mulai bangun tidur hingga tidur lagi, manusia pasti
                menghasilkan buangan atau sampah. Oleh karena itu pengelolaan sampah tidak terlepas dari gaya hidup masyarakat. Jika sampah tersebut terus dibiarkan, tentu akan menimbulkan dampak serius bagi lingkungan yang mengakibatkan pencemaran
                udara,tanah dan dapat menyebabkan banjir.</p>
                
                <div class="btn-group my-3" role="group" aria-label="Basic example">
                  <button type="button" id="btnMin" class="btn btn-sm btn-primary"><i class="bi bi-dash-circle"></i></button>
                  <input type="number" class="form-control mx-2" id="totalBeli" value="0">
                  <button type="button" id="btnPlus" class="btn btn-sm btn-primary"><i class="bi bi-plus-circle"></i></button>
                </div>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary" id="btnCheckout" title="checkout" type="button"><i class="bi bi-cart-plus fs-5"></i></button>
                </div>
            </div>
        </div>
    </section>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const btnPlus = document.querySelector('#btnPlus');
    const btnMin = document.querySelector('#btnMin');
    const btnCheckout = document.getElementById('btnCheckout');
    let totalBeli = parseInt(document.querySelector('#totalBeli').value, 10);
    btnPlus.addEventListener('click', (e) => {
      e.preventDefault();
      totalBeli = isNaN(totalBeli) ? 0 : totalBeli;
      totalBeli += 1;
      document.querySelector('#totalBeli').value = totalBeli;
    });

    btnMin.addEventListener('click', (e) => {
      e.preventDefault();
      totalBeli = isNaN(totalBeli) ? 0 : totalBeli;
      totalBeli -= 1;
      document.querySelector('#totalBeli').value = totalBeli;
    });

    btnCheckout.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(totalBeli);
    });

    console.log(url.id);
  },
};

export default Deskripsi;
