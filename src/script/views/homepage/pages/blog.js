const Blog = {

  async render() {
    return `
    <section class="blog-posts grid-system">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="all-blog-posts">
              <div class="row">
                <div class="col-lg-6">
                  <div class="blog-post">
                    <div class="blog-thumb">
                      <img src="https://akcdn.detik.net.id/community/media/visual/2022/09/14/ilustrasi-sampah-plastik_43.jpeg?w=700&q=90" alt="">
                    </div>
                    <div class="down-content">
                      <a href="homepage/post-details.html"><h4>Judul 1</h4></a>
                      <ul class="post-info">
                        <li><a href="#">Admin</a></li>
                        <li><a href="#">May 31, 2020</a></li>
                        <li><a href="#">12 Comments</a></li>
                      </ul>
                      <p>Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="blog-post">
                    <div class="blog-thumb">
                      <img src="https://img.antaranews.com/cache/800x533/2022/11/11/antarafoto-kerja-bakti-gabungan-dki-jakarta-di-kali-ciliwung-101122-sth-5.jpg" alt="">
                    </div>
                    <div class="down-content">
                      <a href="homepage/post-details.html"><h4>Judul 2</h4></a>
                      <ul class="post-info">
                        <li><a href="#">Admin</a></li>
                        <li><a href="#">May 22, 2020</a></li>
                        <li><a href="#">26 Comments</a></li>
                      </ul>
                      <p>Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="blog-post">
                    <div class="blog-thumb">
                      <img src="https://statik.tempo.co/data/2019/01/03/id_808711/808711_720.jpg" alt="">
                    </div>
                    <div class="down-content">
                      <a href="post-details.html"><h4>Judul 3</h4></a>
                      <ul class="post-info">
                        <li><a href="#">Admin</a></li>
                        <li><a href="#">May 18, 2020</a></li>
                        <li><a href="#">42 Comments</a></li>
                      </ul>
                      <p>Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="blog-post">
                    <div class="blog-thumb">
                      <img src="https://akcdn.detik.net.id/visual/2022/10/25/pantai-kuta-bali-mulai-diserbu-sampah_169.jpeg?w=650" alt="">
                    </div>
                    <div class="down-content">
                      <a href="post-details.html"><h4>Judul 4</h4></a>
                      <ul class="post-info">
                        <li><a href="#">Admin</a></li>
                        <li><a href="#">May 16, 2020</a></li>
                        <li><a href="#">28 Comments</a></li>
                      </ul>
                      <p>Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="blog-post">
                    <div class="blog-thumb">
                      <img src="https://static.republika.co.id/uploads/images/inpicture_slide/041528700-1591015513-830-556.jpg" alt="">
                    </div>
                    <div class="down-content">
                      <a href="post-details.html"><h4>Judul 5</h4></a>
                      <ul class="post-info">
                        <li><a href="#">Admin</a></li>
                        <li><a href="#">May 12, 2020</a></li>
                        <li><a href="#">16 Comments</a></li>
                      </ul>
                      <p>Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="blog-post">
                    <div class="blog-thumb">
                      <img src="https://asset.kompas.com/crops/uq2UQq6_B1ZsLEOwXmlvJIfMXvk=/0x0:1999x1333/750x500/data/photo/2020/11/20/5fb6b6519418c.png" alt="">
                    </div>
                    <div class="down-content">
                      <a href="post-details.html"><h4>Judul 6</h4></a>
                      <ul class="post-info">
                        <li><a href="#">Admin</a></li>
                        <li><a href="#">May 10, 2020</a></li>
                        <li><a href="#">3 Comments</a></li>
                      </ul>
                      <p>Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <ul class="page-numbers">
                    <li><a href="#">1</a></li>
                    <li class="active"><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    console.log('blog');
  },
};

export default Blog;
