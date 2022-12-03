import dataTransactions from '../../../utils/dataTransactions';
import { formatRupiah, getUserInfo } from '../../../utils/functions';

/* eslint-disable no-undef */
const Checkout = {

  async render() {
    return `
    <section class="section mt-5 mx-5 position-relative">
          <div class="table-responsive">
            <table class="table table-hover" id="transactionTable">
              <thead>
                <tr class="table-secondary">
                  <th scope="col">#</th>
                  <th scope="col">ID Pembelian</th>
                  <th scope="col">Jumlah Barang</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col" class="no-sort">Status</th>
                </tr>
              </thead>
              <tbody class="align-middle" id="transactionBody">

              </tbody>
            </table>
          </div>
    </section>`;
  },

  async afterRender() {
    console.log('after render checkout');

    const transactionBody = document.getElementById('transactionBody');
    const idBuyer = getUserInfo().id;
    console.log(idBuyer);

    const fetchedTranscations = await dataTransactions._fetchDataTransactionsByIdBuyer(idBuyer);
    let counter = 1;

    fetchedTranscations.forEach((d) => {
      const data = d.data();
      data.id = d.id;

      if (data.status === 'sedang dikemas') {
        data.bedge = 'text-bg-secondary';
      } else if (data.status === 'dikirim') {
        data.bedge = 'text-bg-primary';
      } else if (data.status === 'selesai') {
        data.kirim = 'disabled';
        data.bedge = 'text-bg-success';
      } else if (data.status === 'dibatalkan') {
        data.bedge = 'text-bg-danger';
      } else {
        data.bedge = 'text-bg-warning';
      }

      transactionBody.innerHTML += `
      <tr>
      <th scope="row">${counter}</th>
      <td>${data.id}</td>
      <td id='totalBeli' product-id='${data.id_barang}'>${data.total_beli}</td>
      <td>Rp${formatRupiah(data.total_harga.toString())}</td>
      <td><span class="badge ${data.bedge}">${data.status}</span></td>
      </tr>
      `;
      // eslint-disable-next-line no-plusplus
      counter++;
    });

    $('#transactionTable').DataTable({
      // eslint-disable-next-line quotes
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
      columnDefs: [{
        targets: 'no-sort',
        orderable: false,
      }],
    });
  },
};

export default Checkout;
