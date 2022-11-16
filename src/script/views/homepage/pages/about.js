const About = {

  async render() {
    return `
    <main className='about-wrapper'>
      <div className='container'>
        <div className='about-content-wrapper'>
          <div className='row responsive-about hero-about d-flex pt-3 pb-3 px-md-0'>
            <div className='col-6 m-auto d-flex'>
              <img src="../../assets/img/logo500.png" alt="Logo Project" class="rounded mx-auto d-block" width='25%' /><br><br>
            </div>
            <div className='col-6 about-us-head'>
              <h1 class="fw-bold text-center" style="color: #012970;">About Reforma Trash</h1>
              <p className='desc-highlight' align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper neque ut sodales ornare. Pellentesque vel nisi nulla. Proin ultricies nisl nec tristique ultricies. Quisque volutpat diam et mattis auctor. Curabitur ac neque felis. Proin sed rutrum felis. Vestibulum hendrerit purus at odio facilisis, eu commodo nibh varius. Proin dapibus vulputate metus, at luctus orci pellentesque at. Mauris et sollicitudin massa.</p>
            </div>
          </div>

          <div className='row responsive-about hero-about d-flex pt-3 pb-3 px-md-0'>
            <div className='col-6'>
              <img src="../../assets/img/about-us.png" alt="About Us Illustrator" class="rounded mx-auto d-block" width='50%' />
            </div>
            <div className='col-6 why-use-head'>
              <h1 class="fw-bold text-center" style="color: #012970;">Why Use Reforma Trash?</h1>
              <p className='desc-highlight' align="justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper neque ut sodales ornare. Pellentesque vel nisi nulla. Proin ultricies nisl nec tristique ultricies. Quisque volutpat diam et mattis auctor. Curabitur ac neque felis. Proin sed rutrum felis. Vestibulum hendrerit purus at odio facilisis, eu commodo nibh varius. Proin dapibus vulputate metus, at luctus orci pellentesque at. Mauris et sollicitudin massa.</p><br><br><br>
            </div>
          </div>

          <div className='row responsive-about how-to-use-wrapper hero-about d-flex pt-3 pb-3 px-md-0'>
            <div className='col-6'>
              <img src="../../assets/img/how-to-use.png" alt="Step by step Illustrator" class="rounded mx-auto d-block" width='50%' /><br><br>
            </div>
            <div className='col-6 how-to-use-head'>
              <h1 class="fw-bold text-center" style="color: #012970;">How To Use?</h1>
              <p className='desc-highlight' align="justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper neque ut sodales ornare. Pellentesque vel nisi nulla. Proin ultricies nisl nec tristique ultricies. Quisque volutpat diam et mattis auctor. Curabitur ac neque felis. Proin sed rutrum felis. Vestibulum hendrerit purus at odio facilisis, eu commodo nibh varius. Proin dapibus vulputate metus, at luctus orci pellentesque at. Mauris et sollicitudin massa.</p><br><br>
            </div>
          </div>
    </main>

    <section class="bg-white shadow" id="about-us">
      <div class="container" style="padding: 7rem 0;">
        <div class="d-grid justify-content-center">
          <h1 class="fw-bold text-center" style="color: #012970;">Our Team</h1>
          <div class="col-12">
            <div class="row">
              <div class="d-flex justify-content-around mt-5 flex-wrap">
                <figure class="member">
                  <div class="image"><img src="./assets/img/mudah.png" alt="sample70" />
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore
                      et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip
                      ex ea commodo consequat."
                    </p>
                  </div>
                  <figcaption>
                    <h4><span> Nutrisha</span></h4>
                    <h5>📍Sukamaju Street, Semarang, Indonesia</h5>
                    <div class="icons"><a href="#"><i class="fa fa-instagram"></i></a><a
                        href="mailto:hestiyuana9@gmail.com">
                        <i class="fa fa-envelope address"></i></a><a href="#"> <i class="fa fa-phone address"></i></a>
                    </div>
                  </figcaption>
                </figure>

                <figure class="member">
                  <div class="image"><img src="./assets/img/mudah.png" alt="sample79" />
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore
                      et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip
                      ex ea commodo consequat."
                    </p>
                  </div>
                  <figcaption>
                    <h4><span>Valentino</span></h4>
                    <h5>📍Sukamaju Street, Semarang, Indonesia</h5>
                    <div class="icons"><a href="#"><i class="fa fa-instagram"></i></a><a
                        href="mailto:hestiyuana9@gmail.com">
                        <i class="fa fa-envelope address"></i></a><a href="#"> <i class="fa fa-phone address"></i></a>
                    </div>
                  </figcaption>
                </figure>

                <figure class="member">
                  <div class="image"><img src="./assets/img/mudah.png" alt="sample80" />
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore
                      et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip
                      ex ea commodo consequat."
                    </p>
                  </div>
                  <figcaption>
                    <h4><span> Soimah</span></h4>
                    <h5>📍Sukamaju Street, Semarang, Indonesia</h5>
                    <div class="icons"><a href="#"><i class="fa fa-instagram"></i></a><a
                        href="mailto:hestiyuana9@gmail.com">
                        <i class="fa fa-envelope address"></i></a><a href="#"> <i class="fa fa-phone address"></i></a>
                    </div>
                  </figcaption>
                </figure>

                <figure class="member">
                  <div class="image"><img src="./assets/img/mudah.png" alt="sample79" />
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore
                      et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip
                      ex ea commodo consequat."
                    </p>
                  </div>
                  <figcaption>
                    <h4><span> Bambang</span></h4>
                    <h5>📍Sukamaju Street, Semarang, Indonesia</h5>
                    <div class="icons"><a href="#"><i class="fa fa-instagram"></i></a><a
                        href="mailto:hestiyuana9@gmail.com">
                        <i class="fa fa-envelope address"></i></a><a href="#"> <i class="fa fa-phone address"></i></a>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    console.log('about');
  },
};

export default About;
