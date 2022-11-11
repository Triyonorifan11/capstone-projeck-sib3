/* eslint-disable no-undef */
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
    
      <section class="section dashboard">
        <div class="row">
          <!-- Left side columns -->
          <div class="col-lg-12">
            <div class="row">
              <!-- Recent Sales -->
              <div class="col-12">
              
                <div class="card recent-sales overflow-auto">
                  <div class="card-body">
                    <h5 class="card-title">
                    Recent Sales
                    <a href="#tambahDataPenjualan" class="btn btn-primary ms-4"><i class="bi bi-plus-circle"></i> Tambah Data</a>
                    </h5>
                    
                    <table class="table table-borderless" id="dataseller2">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Customer</th>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Status</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row"><a href="#">#2457</a></th>
                          <td>Brandon Jacob</td>
                          <td><a href="#" class="text-primary">At praesentium minu</a></td>
                          <td>$64</td>
                          <td><span class="badge bg-success">Approved</span></td>
                          <td>
                            <a href="#" class="btn btn-sm btn-secondary rounded-circle" title="Edit"><i class="bi bi-pencil-square"></i></a>
                            <a href="#" class="btn btn-sm btn-danger rounded-circle" title="Delete"><i class="bi bi-trash"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row"><a href="#">#2147</a></th>
                          <td>Bridie Kessler</td>
                          <td><a href="#" class="text-primary">Blanditiis dolor omnis similique</a></td>
                          <td>$47</td>
                          <td><span class="badge bg-warning">Pending</span></td>
                          <td>
                            <a href="#" class="btn btn-sm btn-secondary rounded-circle" title="Edit"><i class="bi bi-pencil-square"></i></a>
                            <a href="#" class="btn btn-sm btn-danger rounded-circle" title="Delete"><i class="bi bi-trash"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row"><a href="#">#2049</a></th>
                          <td>Ashleigh Langosh</td>
                          <td><a href="#" class="text-primary">At recusandae consectetur</a></td>
                          <td>$147</td>
                          <td><span class="badge bg-success">Approved</span></td>
                          <td>
                            <a href="#" class="btn btn-sm btn-secondary rounded-circle" title="Edit"><i class="bi bi-pencil-square"></i></a>
                            <a href="#" class="btn btn-sm btn-danger rounded-circle" title="Delete"><i class="bi bi-trash"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row"><a href="#">#2644</a></th>
                          <td>Angus Grady</td>
                          <td><a href="#" class="text-primar">Ut voluptatem id earum et</a></td>
                          <td>$67</td>
                          <td><span class="badge bg-danger">Rejected</span></td>
                          <td>
                            <a href="#" class="btn btn-sm btn-secondary rounded-circle" title="Edit"><i class="bi bi-pencil-square"></i></a>
                            <a href="#" class="btn btn-sm btn-danger rounded-circle" title="Delete"><i class="bi bi-trash"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row"><a href="#">#2644</a></th>
                          <td>Raheem Lehner</td>
                          <td><a href="#" class="text-primary">Sunt similique distinctio</a></td>
                          <td>$165</td>
                          <td><span class="badge bg-success">Approved</span></td>
                          <td>
                            <a href="#" class="btn btn-sm btn-secondary rounded-circle" title="Edit"><i class="bi bi-pencil-square"></i></a>
                            <a href="#" class="btn btn-sm btn-danger rounded-circle" title="Delete"><i class="bi bi-trash"></i></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                  </div>

                </div>
              </div><!-- End Recent Sales -->
            </div>
          </div><!-- End Left side columns -->

        </div>
      </section>
    
      `;
  },

  async afterRender() {
    $('#dataseller2').DataTable();
  },
};

export default DataPenjualan;
