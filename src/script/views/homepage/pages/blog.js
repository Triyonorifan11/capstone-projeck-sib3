// import { allArticles, elements } from '../../../../public/assets/js/blog-creator';
// import allArticles from '../../../../public/assets/js/blog-creator';
// import '../../../../public/assets/js/blog-creator';

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

    <div class="blog-card">
    <div class="meta">
      <div class="photo" style="background-image: url(https://akcdn.detik.net.id/community/media/visual/2022/09/14/ilustrasi-sampah-plastik_43.jpeg?w=700&q=90)"></div>
      <ul class="details">
        <li class="author"><a href="#">John Doe</a></li>
        <li class="date">Aug. 24, 2015</li>
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
      <h1>Bahaya Asap Bakar Sampah: Gangguan Napas sampai Kanker</h1>
      <h2>Nasional</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
  <div class="blog-card alt">
    <div class="meta">
      <div class="photo" style="background-image: url(https://img.antaranews.com/cache/800x533/2022/11/11/antarafoto-kerja-bakti-gabungan-dki-jakarta-di-kali-ciliwung-101122-sth-5.jpg)"></div>
      <ul class="details">
        <li class="author"><a href="#">Jane Doe</a></li>
        <li class="date">July. 15, 2015</li>
        <li class="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">JavaScript</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="description">
      <h1>Sampah Menumpuk di Pintu Air Menggarai</h1>
      <h2>Nasional</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
  <div class="blog-card">
    <div class="meta">
      <div class="photo" style="background-image: url(https://statik.tempo.co/data/2019/01/03/id_808711/808711_720.jpg)"></div>
      <ul class="details">
        <li class="author"><a href="#">John Doe</a></li>
        <li class="date">Aug. 24, 2015</li>
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
      <h1>Waspada Tahun 2050 Lebih Banyak Sampah Plastik daripada Ikan</h1>
      <h2>Nasional</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
  <div class="blog-card alt">
    <div class="meta">
      <div class="photo" style="background-image: url(https://asset.kompas.com/crops/uq2UQq6_B1ZsLEOwXmlvJIfMXvk=/0x0:1999x1333/750x500/data/photo/2020/11/20/5fb6b6519418c.png)"></div>
      <ul class="details">
        <li class="author"><a href="#">Jane Doe</a></li>
        <li class="date">July. 15, 2015</li>
        <li class="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">JavaScript</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="description">
      <h1>Pantai Kuta Bali Diserbu Sampah</h1>
      <h2>Nasional</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
  <div class="blog-card">
    <div class="meta">
      <div class="photo" style="background-image: url(https://static.republika.co.id/uploads/images/inpicture_slide/041528700-1591015513-830-556.jpg)"></div>
      <ul class="details">
        <li class="author"><a href="#">John Doe</a></li>
        <li class="date">Aug. 24, 2015</li>
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
      <h1>Pilah Sampah Jadi Rupiah</h1>
      <h2>Nasional</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
    </div>
    `;
  },

  async afterRender() {
    console.log('blog');
  },
};

export default Blog;
