// import Blog from './blog';
import UrlParser from '../../../routes/url-parser';
import dataPosts from '../../../utils/dataBlogs';
import { formatDate } from '../../../utils/functions';

const DetailBlog = {
  async render() {
    return `
    <div class="blog-detail">
        <div id="data" class="data"></div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const fetchedBlog = await dataPosts._fetchAllDataPosts();
    const postsDetail = document.getElementById('postsDetail');
    // const blogContainer = document.querySelector('#data');
    // blogContainer.innerHTML = Blog(data);
    fetchedBlog.forEach((d) => {
      const data = d.data();
      data.id = d.id;

      postsDetail.innerHTML += `
        <div class="content">
            <div class="bg-section">
            <h2 align="center">${data.judul}</h2>
        </div>
        <img class="blog__poster" src="${data.foto}" alt="${data.judul}" />
        <div class="blog__info">
            <h3>Information</h3>
            <h4><i class="fa-solid fa-medal"></i>&nbsp; Tanggal</h4>
            <p> ⭐️ ${formatDate(data.tgl_dibuat)}</p><br>
            <h4><i class="fa-solid fa-magnifying-glass"></i>&nbsp; Categories</h4>
            <p>${data.kategori}</p><br>
        </div><br><br><br>
        <div class="blog__overview">
            <h3>Description</h3>
            <p>${data.deskripsi}</p>
        </div>
        `;
    });

    console.log(url.id);
  },
};

export default DetailBlog;
