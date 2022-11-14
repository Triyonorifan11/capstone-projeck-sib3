/* eslint-disable no-undef */
const BlogsAdmin = {

  async render() {
    return `
    <div class="mb-3" >
      <button type="button" class="btn btn-primary btn" data-bs-toggle="modal" data-bs-target="#addBlog">Tambah Blog</button>
    </div>

    <div class="card mb-12"  >
      <div class="row g-0">
        <div class="col-md-4">
          <img src="https://img.antaranews.com/cache/800x533/2022/11/11/antarafoto-kerja-bakti-gabungan-dki-jakarta-di-kali-ciliwung-101122-sth-5.jpg" style="width: 100%; height: 100%; max-height: 250px; object-fit: cover; object-position: center;" class="img-fluid" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 id="titleBlog" class="card-title" style="margin-bottom: 0; padding: 10px 0 0 0; font-weight:bold; font-size: 25px; color: black;">Judul Blog</h5>
            <p id="dateBlog" class="card-text"><small class="text-muted">3 Agustus 2022</small></p>
            <p class="card-text" id="mainBlog" style="overflow: hidden; max-height:100px; ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="row justify-content-between">
              <div class="col-4 align-self-center">
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
              <div class="col-4 align-self-center text-end"  >
                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editBlog">Edit</button>
                <button type="button" class="btn btn-outline-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-12"  >
      <div class="row g-0">
        <div class="col-md-4">
          <img src="https://img.antaranews.com/cache/800x533/2022/11/11/antarafoto-kerja-bakti-gabungan-dki-jakarta-di-kali-ciliwung-101122-sth-5.jpg" style="width: 100%; height: 100%; max-height: 250px; object-fit: cover; object-position: center;" class="img-fluid" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 id="titleBlog" class="card-title" style="margin-bottom: 0; padding: 10px 0 0 0; font-weight:bold; font-size: 25px; color: black;">Judul Blog</h5>
            <p id="dateBlog" class="card-text"><small class="text-muted">3 Agustus 2022</small></p>
            <p class="card-text" id="mainBlog" style="overflow: hidden; max-height:100px; ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="row justify-content-between">
              <div class="col-4 align-self-center">
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
              <div class="col-4 align-self-center text-end"  >
                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editBlog">Edit</button>
                <button type="button" class="btn btn-outline-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal Edit Blog -->
<div class="modal fade" id="editBlog" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="editBlogLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content" id="form-edit">
                <form action="#" id="register" method="post">
                    <div class="modal-header border-0 border-top border-4 border-primary">
                        <h1 class="modal-title fs-5" id="editBlogLabel">Edit Blog</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body border-top">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label for="blogName" class="form-label">Nama Blog <span
                                            class="text-danger">*</span></label>
                                    <input type="text" required name="blogName" class="form-control" id="blogName"
                                        placeholder="Judul Blog">
                                </div>
                                <div class="mb-3">
                                  <label for="blogContent" class="form-label">Konten Blog <span
                                  class="text-danger">*</span></label>
                                  <textarea class="form-control" id="blogContent" rows="8"></textarea>
                                </div>
                                <div class="mb-3">
                                  <label for="blogGambar" class="form-label">Gambar <span
                                  class="text-danger">*</span></label>
                                  <input class="form-control" type="file" id="blogGambar">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" id="btn-submit" class="btn btn-primary">Edit</button>
                    </div>
                </form>
            </div>
        </div>
</div>

<!-- Modal Add Blog -->
<div class="modal fade" id="addBlog" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="addBlogLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content" id="form-edit">
                <form action="#" id="register" method="post">
                    <div class="modal-header border-0 border-top border-4 border-primary">
                        <h1 class="modal-title fs-5" id="addBlogLabel">Tambah Blog</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body border-top">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label for="blogName" class="form-label">Nama Blog <span
                                            class="text-danger">*</span></label>
                                    <input type="text" required name="blogName" class="form-control" id="blogName"
                                        placeholder="Judul Blog">
                                </div>
                                <div class="mb-3">
                                  <label for="blogContent" class="form-label">Konten Blog <span
                                  class="text-danger">*</span></label>
                                  <textarea class="form-control" id="blogContent" rows="8"></textarea>
                                </div>
                                <div class="mb-3">
                                  <label for="blogGambar" class="form-label">Gambar <span
                                  class="text-danger">*</span></label>
                                  <input class="form-control" type="file" id="blogGambar">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" id="btn-submit" class="btn btn-primary">Edit</button>
                    </div>
                </form>
            </div>
        </div>
</div>
    
    `;
  },

  async afterRender() {
    console.log('afterrender blogs');
  },
};

export default BlogsAdmin;
