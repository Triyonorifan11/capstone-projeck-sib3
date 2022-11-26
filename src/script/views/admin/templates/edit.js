const formEditAkun = (data) => `
<div class="row">
<div class="col-md-6">
    <img src="${data.fotoprofile}" alt="${data.namalengkap}" title="foto data ${data.namalengkap}" class="rounded" style="object-fit: cover;width: 80%;">
</div>
<div class="col-md-6">
    <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Nama Lengkap</label>
    <div class="mb-3">
        <input name="fullName" type="text" class="form-control" autocomplete="off" id="fullName" value="${data.namalengkap}" required>
    </div>
    <label for="edit_provinsi" class="col-md-4 col-lg-3 col-form-label">Provinsi</label>
    <div class="input-group mb-3">
        <input class="form-control" required name="provinsi" list="datalistOptions" autocomplete="off" required
                                        id="edit_provinsi" placeholder="Provinsi" value="${data.provinsi}">
                                    <datalist id="datalistOptions">
                                    </datalist>
    </div>
    <label for="kabupaten" class="col-md-4 col-lg-3 col-form-label">Kabupaten</label>
    <div class="input-group mb-3">
        <input name="kabupaten" type="text" class="form-control" autocomplete="off" id="edit_kabupaten" value="${data.kabupaten}" required>
    </div>
    <label for="kecamatan" class="col-md-4 col-lg-3 col-form-label">Kecamatan</label>
    <div class="input-group mb-3">
        <input name="kecamatan" type="text" class="form-control" autocomplete="off" id="edit_kecamatan" value="${data.kecamatan}" required>
    </div>
    <div class="mb-3">
        <label for="nomorhp" class="col-md-4 col-lg-3 col-form-label">Nomor Hp/WhatsApp</label>
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

const tes = ``;

export { formEditAkun, tes };