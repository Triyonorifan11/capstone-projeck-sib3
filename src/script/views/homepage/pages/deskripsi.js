const Deskripsi = {
  async render() {
    return `
      <section class="deskripsi my-5 pt-5">
        <div class="row mt-5">
            <div class="col-lg05 col-md-12 col-12">
                <img class="img-fluid w-100" src="./download.jpg" alt="" />
            </div>

            <div class="col-lg-6 col-md-12 col-12">
                <h6>Home / Sampah</h6>
                <h3 class="py-4">Sampah Botol</h3>
                <h2>Rp 15.000</h2>
                <input type="number" value="1" />
                <button class="buy-btn">Add to Cart</button>\
                <h4 class="mt-5 mb-5">Deskripsi Produk</h4>
                <span
                    >Sampah botol plastik merupakan bahan padat buangan dari kegiatan manusia yang sudah terpakai. Sampah merupakan konsekuensi dari adanya aktivitas manusia yang begitu kompleks dari mulai bangun tidur hingga tidur lagi, manusia pasti
                    menghasilkan buangan atau sampah. Oleh karena itu pengelolaan sampah tidak terlepas dari gaya hidup masyarakat. Jika sampah tersebut terus dibiarkan, tentu akan menimbulkan dampak serius bagi lingkungan yang mengakibatkan pencemaran
                    udara,tanah dan dapat menyebabkan banjir.
                </span>
            </div>
        </div>
    </section>`;
  },

  async afterRender() {
    console.log("after render deskripsi");
  },
};

export default Deskripsi;
