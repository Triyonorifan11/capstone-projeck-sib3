/* eslint-disable no-undef */
const TransactionsAdmin = {

  async render() {
    return `
          <h1>Transactions</h1>
              `;
  },

  async afterRender() {
    console.log('afterrender transactions');
  },
};

export default TransactionsAdmin;
