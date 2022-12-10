/* eslint-disable no-unused-vars */
import dataAccount from '../../../utils/dataAccounts';
import dataProduct from '../../../utils/dataProducts';

/* eslint-disable no-undef */
const DashboardAdmin = {

  async render() {
    return `
    <div class="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section dashboard">
      <div class="row">

        <div class="col-xxl-4 col-md-6">
          <div class="card info-card sales-card">

            <div class="card-body">
              <h5 class="card-title">Total Akun</h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-person-check"></i>
                </div>
                <div class="ps-3">
                  <h6 id='totalAkun'>145</h6>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card info-card revenue-card">

            <div class="card-body">
              <h5 class="card-title">Total Barang</h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-box-seam"></i>
                </div>
                <div class="ps-3">
                  <h6 id='totalBarang'>$3,264</h6>

                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="col-xxl-4 col-xl-12">

          <div class="card info-card customers-card">

            <div class="card-body">
              <h5 class="card-title">Total Checkout</h5>

              <div class="d-flex align-items-center">
                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i class="bi bi-cart-check"></i>
                </div>
                <div class="ps-3">
                  <h6 id='totalCheckout'>1244</h6>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div class="row">

        <!-- Left side columns -->
        <div class="col-lg-6">
          <div class="row">

          <!-- Website Traffic -->
          <div class="card">
            <div class="card-body pb-0">
              <h5 class="card-title">Diagram Akun <span>| Perbandingan Role</span></h5>

              <div id="diagramAkun" style="min-height: 400px;" class="echart"></div>

            </div>
          </div><!-- End Website Traffic -->

          </div>
        </div><!-- End Left side columns -->

        <!-- Right side columns -->
        <div class="col-lg-6">

          <!-- Website Traffic -->
          <div class="card">
            <div class="card-body pb-0">
              <h5 class="card-title">Diagram Barang <span>| Perbandingan Kategori</span></h5>

              <div id="diagramBarang" style="min-height: 400px;" class="echart"></div>

            </div>
          </div><!-- End Website Traffic -->
        </div><!-- End Right side columns -->

      </div>
    </section>
      `;
  },

  async afterRender() {
    // akun
    const fetchedDataAccount = await dataAccount._fetchAllDataAccount();
    const arrAccount = [];
    fetchedDataAccount.forEach((d) => {
      const data = d.data();
      data.id = d.id;
      arrAccount.push(data);
      // console.log(data);
    });
    console.log(arrAccount);
    let jumlahBuyer = 0;
    let jumlahSeller = 0;
    arrAccount.forEach((d) => {
      if (Object.keys(d).find((key) => d[key] === 'buyer')) { // cari key dalam object
        jumlahBuyer += 1;
      } else {
        jumlahSeller += 1;
      }
    });
    console.log(jumlahBuyer, 'buyer');
    console.log(jumlahSeller, 'seller');

    // barang
    const fetchedDataBarang = await dataProduct._fetchAllDataProduct();
    const arrBarang = [];
    fetchedDataBarang.forEach((d) => {
      const data = d.data();
      data.id = d.id;
      arrBarang.push(data);
      // console.log(data);
    });
    let oraganik = 0;
    let kaca = 0;
    let limbah = 0;
    let alumunium = 0;
    let besilogam = 0;
    let elektronik = 0;
    let plastik = 0;
    arrBarang.forEach((d) => {
      if (Object.keys(d).find((key) => d[key] === 'Sampah Organik')) {
        oraganik += 1;
      } if (Object.keys(d).find((key) => d[key] === 'Sampah Kaca')) {
        kaca += 1;
      } if (Object.keys(d).find((key) => d[key] === 'Sampah Limbah')) {
        limbah += 1;
      } if (Object.keys(d).find((key) => d[key] === 'Sampah Alumunium')) {
        alumunium += 1;
      } if (Object.keys(d).find((key) => d[key] === 'Sampah Besi dan Logam')) {
        besilogam += 1;
      } if (Object.keys(d).find((key) => d[key] === 'Sampah Elektronik')) {
        elektronik += 1;
      } if (Object.keys(d).find((key) => d[key] === 'Sampah Plastik')) {
        plastik += 1;
      }
    });
    console.log(jumlahBuyer, 'buyer');
    console.log(jumlahSeller, 'seller');

    echarts.init(document.querySelector('#diagramAkun')).setOption({
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [{
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [{
          value: jumlahBuyer,
          name: 'Buyer',
        },
        {
          value: jumlahSeller,
          name: 'jumlahSeller',
        },
        ],
      }],
    });

    echarts.init(document.querySelector('#diagramBarang')).setOption({
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [{
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [{
          value: oraganik,
          name: 'Organik',
        },
        {
          value: kaca,
          name: 'Kaca',
        },
        {
          value: limbah,
          name: 'Limbah',
        },
        {
          value: alumunium,
          name: 'Alumunium',
        },
        {
          value: besilogam,
          name: 'Besi dan Logam',
        },
        {
          value: elektronik,
          name: 'Elektronik',
        },
        {
          value: plastik,
          name: 'Plastik',
        },
        ],
      }],
    });
  },
};

export default DashboardAdmin;
