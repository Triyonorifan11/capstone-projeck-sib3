const DataPenjualan = {
  async render() {
    return `
    <div class="pagetitle">
      <h1>Data Penjualan</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#/">Home</a></li>
          <li class="breadcrumb-item active">Data Penjualan</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->
      `;
  },

  async afterRender() {
    console.log('Data penjualan');
  },
};

export default DataPenjualan;
