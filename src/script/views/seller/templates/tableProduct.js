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
            <a href="#/edit/${data.id_produk}" class="btn btn-sm btn-secondary rounded-circle" title="Edit"><i class="bi bi-pencil-square"></i></a>
            <a href="#/delete/${data.id_produk}" class="btn btn-sm btn-danger rounded-circle" title="Delete"><i class="bi bi-trash"></i></a>
        </td>
    </tr>
`;

export default createRowTableProduct;
