const About = {

  async render() {
    return `
    <main className='about-wrapper'>
      <div className='container'>
        <div className='about-content-wrapper'>
          <div className='row responsive-about hero-about d-flex pt-3 pb-3 px-md-0'>
            <div className='col-6 m-auto d-flex'>
              <img src="../../assets/img/logo.png" alt="Logo Project" className='d-block mx-lg-auto img-fluid' width='374px' />
            </div>
            <div className='col-6 about-us-head'>
              <h1 >About Reforma Trash</h1>
              <p className='desc-highlight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper neque ut sodales ornare. Pellentesque vel nisi nulla. Proin ultricies nisl nec tristique ultricies. Quisque volutpat diam et mattis auctor. Curabitur ac neque felis. Proin sed rutrum felis. Vestibulum hendrerit purus at odio facilisis, eu commodo nibh varius. Proin dapibus vulputate metus, at luctus orci pellentesque at. Mauris et sollicitudin massa.</p>
            </div>
          </div>

          <div className='row responsive-about hero-about d-flex pt-3 pb-3 px-md-0'>
            <div className='col-6'>
              <img src="../../assets/img/about-us.png" alt="About Us Illustrator" className='d-block mx-lg-auto img-fluid' width='736px' />
            </div>
            <div className='col-6 why-use-head'>
              <h1>Why Use Reforma Trash?</h1>
              <p className='desc-highlight'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper neque ut sodales ornare. Pellentesque vel nisi nulla. Proin ultricies nisl nec tristique ultricies. Quisque volutpat diam et mattis auctor. Curabitur ac neque felis. Proin sed rutrum felis. Vestibulum hendrerit purus at odio facilisis, eu commodo nibh varius. Proin dapibus vulputate metus, at luctus orci pellentesque at. Mauris et sollicitudin massa.</p>
            </div>
          </div>

          <div className='row responsive-about how-to-use-wrapper hero-about d-flex pt-3 pb-3 px-md-0'>
            <div className='col-6'>
              <img src="../../assets/img/how-to-use.png" alt="Step by step Illustrator" className=' d-block mx-lg-auto img-fluid' width='524px' />
            </div>
            <div className='col-6 how-to-use-head'>
              <h1>How To Use?</h1>
              <p className='desc-highlight'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper neque ut sodales ornare. Pellentesque vel nisi nulla. Proin ultricies nisl nec tristique ultricies. Quisque volutpat diam et mattis auctor. Curabitur ac neque felis. Proin sed rutrum felis. Vestibulum hendrerit purus at odio facilisis, eu commodo nibh varius. Proin dapibus vulputate metus, at luctus orci pellentesque at. Mauris et sollicitudin massa.</p>
            </div>
          </div>

          <div className='row our-team-wrapper'>
            <h1 className=''>Our Team</h1>
          </div>
          <p className='our-team-desc desc-highlight'>Mlaku Development Team will continue to strive to develop this system on an ongoing basis so that it can be used for the better</p>

          <div className='row our-team-section responsive-about d-flex row-cols-4'>
            <div className='col px-0'>
              <DeveloperCard
                developerName='Triyono Rifan'
                git_url='https://github.com/'
                linkedin_url='https://www.linkedin.com/in/'
                wa_url='+62'
                ig_url='https://www.instagram.com/'
                dev_image="../../assets/img/logo.png"
              />
            </div>
            <div className='col px-0'>
              <DeveloperCard
                developerName='Lutfi Kamal Ananda'
                git_url='https://github.com/'
                linkedin_url='https://www.linkedin.com/in/'
                wa_url='+62'
                ig_url='https://www.instagram.com/'
                dev_image="../../assets/img/logo.png"
              />
            </div>
            <div className='col px-0'>
              <DeveloperCard
                developerName='Muhammad Syarif Al Husein'
                git_url='https://github.com/'
                linkedin_url='https://www.linkedin.com/in/'
                wa_url='+62'
                ig_url='https://www.instagram.com/'
                dev_image="../../assets/img/logo.png"
              />
            </div>
            <div className='col px-0'>
              <DeveloperCard
                developerName='Hesti Yuana Mahardika'
                git_url='https://github.com/'
                linkedin_url='https://www.linkedin.com/in/'
                wa_url='+62 0882 3609 9236'
                ig_url='https://www.instagram.com/'
                dev_image="../../assets/img/logo.png"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    `;
  },

  async afterRender() {
    console.log('about');
  },
};

export default About;
