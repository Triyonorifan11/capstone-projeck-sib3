const Checkout = {

  async render() {
    return `
    <div class="container main-container mt-5" id="blog">
        <div class="col-sm-12 head-column">
            <h1 class="fw-bold text-center" style="color: #012970;">Checkout</h1>
        </div>
    </div>`;
  },

  async afterRender() {
    console.log('after render checkout');
  },
};

export default Checkout;
