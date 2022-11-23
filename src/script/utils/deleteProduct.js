/* eslint-disable no-undef */
const deleteProduct = {
  async init() {
    await this._btndeleteClik();
  },

  async _btndeleteClik() {
    const deleteProduk = document.querySelectorAll('#deleteProduk');
    deleteProduk.forEach((btndelete) => {
      btndelete.addEventListener('click', (e) => {
        e.preventDefault();
        Swal.fire({
          title: 'Do you want to save the changes?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Save',
          denyButtonText: 'Don\'t save',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success');
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info');
          }
        });
      });
    });
    // deleteProduk.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   Swal.fire({
    //     title: 'Yakin akan menghapus produk ini?',
    //     showCancelButton: true,
    //     confirmButtonText: 'Hapus',
    //   }).then((result) => {
    //     /* Read more about isConfirmed, isDenied below */
    //     if (result.isConfirmed) {
    //       Swal.fire('Saved!', '', 'success');
    //     } else if (result.isDenied) {
    //       Swal.fire('Changes are not saved', '', 'info');
    //     }
    //   });
    // });
  },
};

export default deleteProduct;
