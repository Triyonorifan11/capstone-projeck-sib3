import { formatRupiah } from '../../../utils/functions';
const formEditAkun = (data) => `
<div class="row">
<div class="col-md-4 ">
    <img src="" alt="${data.namalengkap}" title="foto data ${data.namalengkap}" id="profilepic" class="rounded" style="object-fit: cover;width: 80%;">
</div>
<div class="col-md-8">
    <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Nama Lengkap</label>
    <div class="mb-3">
        <input name="fullName" type="text" class="form-control" autocomplete="off" id="fullName" value="${data.namalengkap}" required>
    </div>

    <label for="provinsi" class="col-md-4 col-lg-3 form-label">Provinsi</label>
    <div class="input-group mb-3">
        <select class="form-select" id="datalistOptions" name="provinsi" aria-label="Pilih Provinsi" required>
        <option data-idprov="null" value="null" disabled selected>Pilih Provinsi</options>
        </select>
    </div>  
      
    <label for="kabupaten" class="col-md-4 col-lg-3 form-label">Kabupaten/Kota</label>
    <div class="input-group mb-3">
        <select class="form-select" id="kabupatenData" name="kabupaten" aria-label="Pilih Kabupaten/Kota" required>
        <option data-idcity="null" value="null" disabled selected>Pilih Kab/Kota</options>
        </select>
    </div>

    <label for="kecamatan" class="col-md-4 col-lg-3 col-form-label">Kecamatan</label>
    <div class="input-group mb-3">
        <input name="kecamatan" type="text" class="form-control" autocomplete="off" id="edit_kecamatan" value="${data.kecamatan}" required>
    </div>

    <div class="mb-3">
        <label for="nomorhp" class="col-md-4 col-lg-3 col-form-label">Nomor Hp</label>
        <input name="nomorhp" type="text" class="form-control" autocomplete="off" id="nomorhp" value="${data.no_hp_wa}">
    </div>
    <div class="my-3">
        <label for="editFoto" class="form-label">Ganti foto</label>
        <input class="form-control" type="file" id="editFoto" name="editFoto" accept=".jpg,.jpeg,.png">
        <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
    </div>
</div>

<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditAkun">Update data</button>
</div>
</div>
`;

const formEditProduk = (produk) => `

<div class="row">
<div class="col-md-6">
    <img src="${produk.foto}" alt="${produk.nama_product}" title="foto produk ${produk.nama_product}" class="rounded" style="object-fit: cover;width: 100%;">
    <div class="my-3">
        <label for="editFotoProduk" class="form-label">Ganti foto</label>
        <input class="form-control" type="file" id="editFotoProduk" name="editFotoProduk" accept=".jpg,.jpeg,.png">
        <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
    </div>
    
</div>
<div class="col-md-6">
    <div class="mb-3">
        <label for="namaBarang" class="form-label">Nama</label>
        <input type="text" class="form-control" name="namaBarang" id="namaBarang" aria-label="Nama barang" placeholder="Sampah Plastik" value="${produk.nama_product}" required>
    </div>
    <label for="beratBarang" class="form-label">Berat Sampah</label>
    <div class="input-group mb-3">
        <input type="number" class="form-control" name="beratBarang" value="${produk.berat_product}" id="beratBarang" placeholder="3" aria-label="Berat barang" aria-describedby="basic-addon2" required>
        <span class="input-group-text" id="basic-addon2">Kg</span>
    </div>
    <div class="mb-3">
        <label for="jenisBarang" class="form-label">Jenis Sampah</label>
        <select class="form-select" id="jenisBarang" name="jenisBarang" aria-label="Jenis sampah" required>
            <option selected value="${produk.jenis_barang}">${produk.jenis_barang}</option>
            <option value="Sampah Organik">Sampah Organik</option>
            <option value="Sampah Kaca">Sampah Kaca</option>
            <option value="Sampah Limbah">Sampah Limbah</option>
            <option value="Sampah Aluminium">Sampah Aluminium</option>
            <option value="Sampah Besi dan Logam">Sampah Besi dan Logam</option>
            <option value="Sampah Elektronik">Sampah Elektronik</option>
            <option value="Sampah Plastik">Sampah Plastik</option>
        </select>
    </div>
    <label for="stokBarang" class="form-label">Stok</label>
    <div class="input-group mb-3">
        <input type="number" class="form-control" value="${produk.stok}" name="stokBarang" id="stokBarang" placeholder="2" aria-label="Stok barang" required>
        <span class="input-group-text" id="basic-addon2">pack</span>
    </div>
    <label for="hargaBarang" class="form-label">Harga</label>
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon2">Rp</span>
        <input type="number" class="form-control" value="${produk.harga}" name="hargaBarang" id="hargaBarang" placeholder="13000" aria-label="Berat barang" aria-describedby="basic-addon2" required>
    </div>
</div>
<div class="mb-3">
  <label for="deskripsi" class="form-label">Deskripsi Produk</label>
  <textarea class="form-control" id="deskripsi" placeholder="Deskripsi Produk" rows="4">${produk.deskripsi}</textarea>
</div>
<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditProduk">Update produk</button>
</div>
</div>
`;

const formEditBlog = (blog) => `
<div class="row">
    <div class="col-md-6">
        <img src="${blog.foto}" alt="gambar postingan" title="foto tentang ${blog.judul}" class="img-fluid rounded img-thumbnail" style="object-fit: cover;width: 100%; max-height: 450px;">
    </div>

    <div class="col-md-6">
        <div class="mb-3">
            <label for="judul" class="form-label">Nama Blog <span class="text-danger">*</span></label>
            <input type="text" required name="judul" class="form-control" id="judul" placeholder="Judul Blog" value="${blog.judul}">
        </div>
        <div class="mb-3">
          <label for="deskripsi" class="form-label">Konten Blog <span class="text-danger">*</span></label>
          <textarea class="form-control" id="deskripsi" name="deskripsi">${blog.deskripsi}</textarea>
        </div>
    </div>

    <div class="col-md-12">
        <div class="mb-3">
            <label for="foto" class="form-label">Gambar <span class="text-danger">*</span></label>
            <input class="form-control" type="file" id="foto" name="foto">
          </div>
        <div class="mb-3">
          <label for="kategori" class="form-label">Kategori <span class="text-danger">*</span></label>
          <select id="kategori" class="form-select" name="kategori">
            <option value="berita">Berita</option>
            <option value="blog">Blog</option>
            <option value="artikel">Artikel</option>
          </select>
        </div>
        <div class="mb-3">
            <button type="submit" id="btn-submit" class="btn btn-primary">Edit</button>
        </div>
    </div>
</div>
`;

const formEditTransaksi = (produk, seller, transaksi) => `

<div class="row">
<div class="col-md-6">
    <img src="${produk.foto}" alt="${produk.nama_product}" title="foto produk ${produk.nama_product}" class="rounded" style="object-fit: cover;width: 100%;">
</div>
<div class="col-md-6">
    <div class="mb-3">
        <h3 class="fw-bold">Nama Barang</h3>
        <h5 id="produkDetail" value="${transaksi.id_barang}">${produk.nama_product}</h5>
    </div>
    <div class="mb-3">
        <h3 class="fw-bold">Penjual</h3>
        <h5>${seller.namalengkap}</h5>
    </div>
    <div class="mb-3">
        <h3 class="fw-bold">Stok yang Tersisa</h3>
        <h5>${produk.stok} Pack</h5>
    </div>
    <h3 ><label for="stokRequest" class="form-label fw-bold">Stok yang Diminta</label></h3>
    <div class="input-group mb-3">
        <input type="number" class="form-control" value="${transaksi.total_beli}" prev-value="${transaksi.total_beli}" name="stokRequest" id="stokBarang" placeholder="2" aria-label="Stok yang Diminta" max=${produk.stok} required>
        <span class="input-group-text" id="basic-addon2">pack</span>
    </div>
    <div class="mb-3">
        <h3 class="fw-bold">Harga Satuan</h3>
        <h5 value="${produk.harga}" id="hargaproduk">Rp ${formatRupiah(produk.harga.toString())}</h5>
    </div>
    <div class="mb-3">
        <h3><label for="status" class="form-label fw-bold">Status</label></h3>
        <select class="form-select" id="status" name="status" aria-label="Status" style="text-transform: capitalize;" required>
            <option selected value="${transaksi.status}" disabled>${transaksi.status}</option>
            <option value="diminta">Diminta</option>
            <option value="sedang dikemas">Sedang Dikemas</option>
            <option value="dibatalkan">Batalkan</option>
        </select>
    </div>
</div>
<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditTransaksi">Update Data</button>
</div>
</div>
`;

export { formEditAkun, formEditProduk, formEditBlog, formEditTransaksi };