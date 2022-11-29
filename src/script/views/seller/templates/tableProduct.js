import { formatDate, formatRupiah } from '../../../utils/functions';

const createRowTableProduct = (data, i) => `
    <tr class="odd">
        <th scope="row"><a href="#">${i}</a></th>
        <td><img src="${data.foto}" alt="${data.nama_product}" class="rounded" style="object-fit: cover;width: 150px;"></td>
        <td><span class="text-primary">${data.nama_product}</span></td>
        <td>Rp${formatRupiah(data.harga)}</td>
        <td><span class="badge bg-success">${data.stok}</span></td>
        <td><span class="badge bg-secondary">${formatDate(data.tgl_diupdate)}</span></td>
        <td>
            <a href="#/update/${data.id_produk}" class="btn btn-sm btn-secondary rounded-circle" title="Edit Produk" id="editProduk"><i class="bi bi-pencil-square"></i></a>
            <a href="#/delete/${data.id_produk}" class="btn btn-sm btn-danger rounded-circle" title="Delete Produk" id="deleteProduk" data-id="${data.id_produk}"><i class="bi bi-trash"></i></a>
        </td>
    </tr>
`;

const createTableCheckoutInDashboard = (data, i) => `
    <tr>
        <th scope="row"><a href="#">${i}</a></th>
        <td><a href="#/checkout/${data.id_checkout}" class="link-primary">${data.id_checkout}</a></td>
        <td>${data.total_beli}</td>
        <td>Rp${formatRupiah(data.total_harga.toString())}</td>
        <td><span class="badge ${data.bedge}" id="statuspengiriman">${data.status}</span></td>
    </tr>
`;

const createTableCheckoutInDataCheckOut = (data, i) => `
    <tr>
        <th scope="row"><a href="#">${i}</a></th>
        <td><a href="#/checkout/${data.id_checkout}" class="link-primary">${data.id_checkout}</a></td>
        <td>${data.total_beli}</td>
        <td>Rp${formatRupiah(data.total_harga.toString())}</td>
        <td><span class="badge ${data.bedge}" id="statuspengiriman">${data.status}</span></td>
        <td>
            <button type="button" class="btn btn-sm btn-primary rounded-circle" title="Kirim Barang" id="kirimBarang"><i class="bi bi-send-plus"></i></button>
        </td>
    </tr>
`;

const formEditProduk = (produk) => `
<label class="form-label">Last Update : <span class="badge bg-secondary mb-3">${formatDate(produk.tgl_diupdate)}</span></label>
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
        <label for="jeniBarang" class="form-label">Jenis Sampah</label>
        <select class="form-select" id="jenisBarang" name="jenisBarang" aria-label="Jenis sampah" required>
            <option selected value="${produk.jenis_barang}">${produk.jenis_barang}</option>
            <option value="Sampah Organik">Sampah Organik</option>
            <option value="Sampah Anorganik">Sampah Anorganik</option>
            <option value="Sampah B3">Sampah B3</option>
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

export {
  formEditProduk, createRowTableProduct, createTableCheckoutInDashboard, createTableCheckoutInDataCheckOut,
};
