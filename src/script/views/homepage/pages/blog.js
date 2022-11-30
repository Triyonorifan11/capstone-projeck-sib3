// import { allArticles, elements } from '../../../../public/assets/js/blog-creator';
// import allArticles from '../../../../public/assets/js/blog-creator';
// import '../../../../public/assets/js/blog-creator';

import dataPosts from '../../../utils/dataBlogs';

const Blog = {

  async render() {
    return `
    <!-- Blog -->
    <div class="container main-container mt-5" id="blog">
      <header id="header">
        <div class="row">
          <div class="col-sm-12 head-column">
            <h1 class="fw-bold text-center" style="color: #012970;">Blog</h1>
          </div>

          <div class="col-sm-12 filter-group-wrapper">
            <div class="filter-group">
              <button class="filter-button" id="all-articles">All</button>
              <button class="filter-button" id="artikel">Artikel</button>
              <button class="filter-button" id="berita">Berita</button>
              <button class="filter-button" id="blogs">Blogs</button>
            </div>
          </div>
        </div>
      </header>


      <section class="mt-5 mb-2">

        <div class="row">
          <div class="d-flex justify-content-center">
            <div class="article-display-container"></div>
          </div>
        </div>

      </section>
    </div>

    <div id="postsList">
    </div>
    
    `;
  },

  async afterRender() {
    console.log('blog');
    const fetchedBlog = await dataPosts._fetchAllDataPosts();
    const postsList = document.getElementById('postsList');

    fetchedBlog.forEach((d) => {
      const data = d.data();
      data.id = d.id;

      postsList.innerHTML += `
      <div class="blog-card">
    <div class="meta">
      <div class="photo" style="background-image: url(${data.foto})"></div>
      <ul class="details">
        <li class="author">${data.kategori}</li>
        <li class="date">${data.tgl_dibuat}</li>
        <li class="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="description">
      <h1>${data.judul}</h1>
      <h2>Nasional</h2>
      <p>${data.deskripsi}</p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>`;
    });
  },
};

export default Blog;
