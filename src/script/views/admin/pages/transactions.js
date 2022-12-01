import dataTransactions from '../../../utils/dataTransactions';
import { formatRupiah } from '../../../utils/functions';

/* eslint-disable no-undef */
const TransactionsAdmin = {

  async render() {
    return `
          <h1>Transactions</h1>
          
<section class="section accounts">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Data Penjualan</h2>
          <div class="table-responsive">
            <table class="table table-hover" id="transactionTable">
              <thead>
                <tr class="table-secondary">
                  <th scope="col">#</th>
                  <th scope="col">ID Pembelian</th>
                  <th scope="col">Jumlah Barang</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Status</th>
                  <th scope="col" class="no-sort">Action</th>
                </tr>
              </thead>
              <tbody class="align-middle" id="transactionBody">

              </tbody>
            </table>
          </div>
        </div>
      </div>
</section>

<section class="section accounts">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Penjualan yang Dibatalkan Seller</h2>
          <div class="table-responsive">
            <table class="table table-hover" id="transactionTableCancelled">
              <thead>
                <tr class="table-secondary">
                  <th scope="col">#</th>
                  <th scope="col">ID Pembelian</th>
                  <th scope="col">Jumlah Barang</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Status</th>
                  <th scope="col" class="no-sort">Action</th>
                </tr>
              </thead>
              <tbody class="align-middle" id="transactionCancelledBody">

              </tbody>
            </table>
          </div>
        </div>
      </div>
</section>
              `;
  },

  async afterRender() {
    console.log('afterrender transactions');

    const transactionBody = document.getElementById('transactionBody');

    const fetchedTranscations = await dataTransactions._fetchDataTransactions();
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
      <td>${data.total_beli}</td>
      <td>Rp${formatRupiah(data.total_harga.toString())}</td>
      <td><span class="badge ${data.bedge}">${data.status}</span></td>
      <td><button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Edit</button> <button type="button" class="btn btn-outline-danger">Del</button></td>
      </tr>
      `;
      // eslint-disable-next-line no-plusplus
      counter++;
    });

    const fetchDataCheckoutCancelled = await dataTransactions._fetchCancelledDataTransactions();
    const transactionBodyCancelled = document.getElementById('transactionCancelledBody');
    let newcount = 1;

    fetchDataCheckoutCancelled.forEach((d) => {
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

      transactionBodyCancelled.innerHTML += `
      <tr>
      <th scope="row">${newcount}</th>
      <td>${data.id}</td>
      <td>${data.total_beli}</td>
      <td>Rp${formatRupiah(data.total_harga.toString())}</td>
      <td><span class="badge ${data.bedge}">${data.status}</span></td>
      <td><button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Edit</button> <button type="button" class="btn btn-outline-danger">Del</button></td>
      </tr>
      `;
      // eslint-disable-next-line no-plusplus
      newcount++;
    });

    $('#transactionTable').DataTable({
      // eslint-disable-next-line quotes
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
      columnDefs: [{
        targets: 'no-sort',
        orderable: false,
      }],
    });

    $('#transactionTableCancelled').DataTable({
      // eslint-disable-next-line quotes
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
      columnDefs: [{
        targets: 'no-sort',
        orderable: false,
      }],
    });
  },
};

export default TransactionsAdmin;
