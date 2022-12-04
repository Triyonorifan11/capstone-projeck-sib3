// import Blog from './blog';
import UrlParser from '../../../routes/url-parser';
import addBlogs from '../../../utils/addBlogs';
import dataPosts from '../../../utils/dataBlogs';
import { formatDate } from '../../../utils/functions';

const DetailBlog = {
  async render() {
    return `
      <section class="container deskripsi my-5 mt-3" id="container">
        
    </section>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const container = document.getElementById('container');
    const dataPost = await dataPosts._fetchDataPostsByIdPost(url.id);
    // const fetchedBlog = await dataPosts._fetchAllDataPosts();
    // const postsDetail = document.getElementById('postsDetail');
    // const blogContainer = document.querySelector('#data');
    // blogContainer.innerHTML = Blog(data);
    // fetchedBlog.forEach((d) => {
    //   const data = d.data();
    //   data.id = d.id;

    container.innerHTML += `
    <div class="row mt-5">
      <div class="col-md-5 p-5">
          <div class="d-flex justify-content-center align-items-center">
            <img class="img-fluid" src="${dataPost.foto}" width="80%"/>
          </div>
      </div>

      <div class="col-md-7">
          <h3 class="tittle py-4 fw-bold">${dataPost.judul}</h3>
          <h2>${formatDate(dataPost.tgl_dibuat)}</h2>
          <h2>${dataPost.kategori}</h2>
          <h4 class="mt-4 mb-2">Deskripsi Produk</h4>
          <p>${dataPost.deskripsi}</p>
      </div>
    </div>
        `;
    await addBlogs.addToDatabase(url.id, dataPost);
  },
};

export default DetailBlog;
