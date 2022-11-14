/* eslint-disable no-undef */
const AccountsAdmin = {

  async render() {
    return `
      <h1>Accounts</h1>
          `;
  },

  async afterRender() {
    console.log('afterrender accounts');
  },
};

export default AccountsAdmin;
