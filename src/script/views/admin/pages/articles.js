/* eslint-disable no-undef */
const ArticlesAdmin = {

  async render() {
    return `
    <h1>Articles</h1>
        `;
  },

  async afterRender() {
    console.log('afterrender articles');
  },
};

export default ArticlesAdmin;
