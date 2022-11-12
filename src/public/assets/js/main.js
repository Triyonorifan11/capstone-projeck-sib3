/**
* Template Name: NiceAdmin - v2.4.1
* Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    }
    return document.querySelector(el);
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach((e) => e.addEventListener(type, listener));
    } else {
      select(el, all).addEventListener(type, listener);
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  /**
   * Sidebar toggle
   */
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', (e) => {
      select('body').classList.toggle('toggle-sidebar');
    });
  }

  /**
   * Search bar toggle
   */
  if (select('.search-bar-toggle')) {
    on('click', '.search-bar-toggle', (e) => {
      select('.search-bar').classList.toggle('search-bar-show');
    });
  }

  /**
   * Navbar links active state on scroll
   */
  const navbarlinks = select('#navbar .scrollto', true);
  const navbarlinksActive = () => {
    const position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      const section = select(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  };
  window.addEventListener('load', navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  const selectHeader = select('#header');
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled');
      } else {
        selectHeader.classList.remove('header-scrolled');
      }
    };
    window.addEventListener('load', headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  const backtotop = select('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    };
    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Initiate tooltips
   */
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

  /**
   * Initiate quill editors
   */
  if (select('.quill-editor-default')) {
    new Quill('.quill-editor-default', {
      theme: 'snow',
    });
  }

  if (select('.quill-editor-bubble')) {
    new Quill('.quill-editor-bubble', {
      theme: 'bubble',
    });
  }

  if (select('.quill-editor-full')) {
    new Quill('.quill-editor-full', {
      modules: {
        toolbar: [
          [{
            font: [],
          }, {
            size: [],
          }],
          ['bold', 'italic', 'underline', 'strike'],
          [{
            color: [],
          },
          {
            background: [],
          },
          ],
          [{
            script: 'super',
          },
          {
            script: 'sub',
          },
          ],
          [{
            list: 'ordered',
          },
          {
            list: 'bullet',
          },
          {
            indent: '-1',
          },
          {
            indent: '+1',
          },
          ],
          ['direction', {
            align: [],
          }],
          ['link', 'image', 'video'],
          ['clean'],
        ],
      },
      theme: 'snow',
    });
  }

  /**
   * Initiate TinyMCE Editor
   */
  const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;

  

  /**
   * Initiate Bootstrap validation check
   */
  const needsValidation = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(needsValidation)
    .forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });

  /**
   * Initiate Datatables
   */
  const datatables = select('.datatable', true);
  datatables.forEach((datatable) => {
    new simpleDatatables.DataTable(datatable);
  });

  /**
   * Autoresize echart charts
   */
  const mainContainer = select('#main');
  if (mainContainer) {
    setTimeout(() => {
      new ResizeObserver(() => {
        select('.echart', true).forEach((getEchart) => {
          echarts.getInstanceByDom(getEchart).resize();
        });
      }).observe(mainContainer);
    }, 200);
  }
}());

/* Blog */

/* eslint-disable no-sequences */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    'artikel',
  )),
  (title2 = new Article(
    2,
    'https://img.antaranews.com/cache/800x533/2022/11/11/antarafoto-kerja-bakti-gabungan-dki-jakarta-di-kali-ciliwung-101122-sth-5.jpg',
    'Judul2',
    'Tanggal',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    'artikel',
  )),
  (title3 = new Article(
    3,
    'https://statik.tempo.co/data/2019/01/03/id_808711/808711_720.jpg',
    'Judul3',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'blog',
  )),
  (title4 = new Article(
    4,
    'https://akcdn.detik.net.id/visual/2022/10/25/pantai-kuta-bali-mulai-diserbu-sampah_169.jpeg?w=650',
    'Judul4',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'artikel',
  )),
  (title5 = new Article(
    5,
    'https://static.republika.co.id/uploads/images/inpicture_slide/041528700-1591015513-830-556.jpg',
    'Judul5',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'artikel',
  )),
  (title6 = new Article(
    6,
    'https://asset.kompas.com/crops/uq2UQq6_B1ZsLEOwXmlvJIfMXvk=/0x0:1999x1333/750x500/data/photo/2020/11/20/5fb6b6519418c.png',
    'Judul6',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'berita',
  )),
  (title7 = new Article(
    7,
    'https://akcdn.detik.net.id/community/media/visual/2022/02/24/tumpukan-sampah-mencemari-lokasi-proyek-tanggul-laut-raksasa-giant-sea-wall-di-kalibaru-cilincing-jakut-wildan-ndetikcom_169.jpeg?w=700&q=90',
    'Judul7',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'berita',
  )),
  (title8 = new Article(
    8,
    'https://img.antaranews.com/cache/800x533/2022/06/21/pexels-tom-fisk-3186574.jpg.webp',
    'Judul8',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'berita',
  )),
  (title9 = new Article(
    9,
    'https://static.republika.co.id/uploads/images/inpicture_slide/foto-udara-tumpukan-sampah-di-daerah-aliran-kali-cikarang_220727174648-480.jpg',
    'Judul9',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'blog',
  )),
  (title10 = new Article(
    10,
    'https://akcdn.detik.net.id/community/media/visual/2019/03/12/496ca098-13ab-42a2-9082-b51736fb57f3.jpeg?w=700&q=90',
    'Judul10',
    'Tanggal',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
        <div class="col-sm-12 col-md-6 menu-item" id="${article.id}">
        <div class="col-sm-5 menu-item-image" style="background-image: url(${article.img});"></div>
        <div class="col-sm-7 menu-copy">
          <div class="menu-copy-header">
            <h5 class="menu-copy-header-title">${article.name}</h5>
            <p class="date">${article.date}</p>
          </div>
          <hr>
          <div class="menu-copy-body">
            <p>${article.desc}</p>
          </div>
          <div class="text-button">
            <a href="about.html">&nbsp; Read More <i class="fa fa-arrow-right"></i></a>
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
