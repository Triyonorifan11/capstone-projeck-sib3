/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */

// import CONFIG from '../../globals/config';

class Article {
  constructor(id, img, name, date, desc, tag) {
    this.id = id,
    this.img = img,
    this.name = name,
    this.date = date,
    this.desc = desc,
    this.tag = tag;
  }
}

const allArticles = [
  (title1 = new Article(
    1,
    'https://akcdn.detik.net.id/community/media/visual/2022/09/14/ilustrasi-sampah-plastik_43.jpeg?w=700&q=90',
    'Judul1',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...',
    'artikel',
  )),
  (title2 = new Article(
    2,
    'https://img.antaranews.com/cache/800x533/2022/11/11/antarafoto-kerja-bakti-gabungan-dki-jakarta-di-kali-ciliwung-101122-sth-5.jpg',
    'Judul2',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...',
    'artikel',
  )),
  (title3 = new Article(
    3,
    'https://statik.tempo.co/data/2019/01/03/id_808711/808711_720.jpg',
    'Judul3',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...',
    'blog',
  )),
  (title4 = new Article(
    4,
    'https://akcdn.detik.net.id/visual/2022/10/25/pantai-kuta-bali-mulai-diserbu-sampah_169.jpeg?w=650',
    'Judul4',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...',
    'artikel',
  )),
  (title5 = new Article(
    5,
    'https://static.republika.co.id/uploads/images/inpicture_slide/041528700-1591015513-830-556.jpg',
    'Judul5',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...',
    'artikel',
  )),
  (title6 = new Article(
    6,
    'https://asset.kompas.com/crops/uq2UQq6_B1ZsLEOwXmlvJIfMXvk=/0x0:1999x1333/750x500/data/photo/2020/11/20/5fb6b6519418c.png',
    'Judul6',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...',
    'berita',
  )),
  (title7 = new Article(
    7,
    'https://akcdn.detik.net.id/community/media/visual/2022/02/24/tumpukan-sampah-mencemari-lokasi-proyek-tanggul-laut-raksasa-giant-sea-wall-di-kalibaru-cilincing-jakut-wildan-ndetikcom_169.jpeg?w=700&q=90',
    'Judul7',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...',
    'berita',
  )),
  (title8 = new Article(
    8,
    'https://img.antaranews.com/cache/800x533/2022/06/21/pexels-tom-fisk-3186574.jpg.webp',
    'Judul8',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...',
    'berita',
  )),
  (title9 = new Article(
    9,
    'https://static.republika.co.id/uploads/images/inpicture_slide/foto-udara-tumpukan-sampah-di-daerah-aliran-kali-cikarang_220727174648-480.jpg',
    'Judul9',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...',
    'blog',
  )),
  (title10 = new Article(
    10,
    'https://akcdn.detik.net.id/community/media/visual/2019/03/12/496ca098-13ab-42a2-9082-b51736fb57f3.jpeg?w=700&q=90',
    'Judul10',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ...',
    'blog',
  )),
];

const elements = {
  articleContainer: document.querySelector('.article-display-container'),
  menuItem: document.querySelector('.menu-item'),
  menuItemImg: document.querySelector('.menu-item-image'),
  menuTitle: document.querySelector('.menu-copy-header-title'),
  menuDate: document.querySelector('.date'),
  menuDesc: document.querySelector('.menu-copy-body'),
  allBtn: document.querySelector('#all-articles'),
  breakBtn: document.querySelector('#artikel'),
  lnchBtn: document.querySelector('#berita'),
  shksBtn: document.querySelector('#blogs'),
};

elements.allBtn.addEventListener('click', () => {
  renderArticles(allArticles);
});

elements.breakBtn.addEventListener('click', () => {
  filterArticles(tag = 'artikel');
});

elements.lnchBtn.addEventListener('click', () => {
  filterArticles(tag = 'berita');
});

elements.shksBtn.addEventListener('click', () => {
  filterArticles(tag = 'blog');
});

function renderArticles(articles) {
    elements.articleContainer.innerHTML = '';
    for (article of articles) {
    const newArticle = `
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${article.img}" class="img-fluid rounded-start" alt="${article.name}" width="100%" style="object-fit: cover;">
            </div>
            <div class="col-md-8">
              <div class="card-body p-3">
                <h5 class="card-title fs-3">${article.name}</h5>
                <small class="text-muted">${article.date}</small>
                <p class="card-text">${article.desc}</p>
                <div class="d-grid gap-2 d-md-block">
                  <a href="about.html" class="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
    elements.articleContainer.insertAdjacentHTML('beforeend', newArticle);
  }
}

function filterArticles(taggie) {
  const filterList = allArticles.filter((article) => article.tag === taggie);
  renderArticles(filterList);
}

(function init() {
  renderArticles(allArticles);
}());

export default { allArticles, elements };
