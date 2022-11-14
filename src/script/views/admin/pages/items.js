/* eslint-disable no-undef */
const ItemsAdmin = {

  async render() {
    return `
        <h1>Items</h1>
            `;
  },

  async afterRender() {
    console.log('afterrender items');
  },
};

export default ItemsAdmin;
