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
      <div class="blog-card" style="background-color:#AEBDCA;">
        <div class="meta">
          <div class="photo" style="background-image: url(${data.foto})"></div>
          <ul class="details">
            <li class="author">${data.kategori}</li>
            <li class="date">${data.tgl_dibuat}</li>
          </ul>
        </div>
        <div class="description">
          <h1>${data.judul}</h1>
          <p class="read-more">
            <a href="#">Read More</a>
          </p>
          <p class="detail">${data.deskripsi}</p>
        </div>
      </div>`;
    });
  },
};

export default Blog;
