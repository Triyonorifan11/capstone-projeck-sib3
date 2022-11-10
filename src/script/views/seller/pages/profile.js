const Profile = {
  async render() {
    return `
    <div class="pagetitle">
      <h1>Profile</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#/">Home</a></li>
          <li class="breadcrumb-item active">Profile</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->
      `;
  },

  async afterRender() {
    console.log('profile');
  },
};

export default Profile;
