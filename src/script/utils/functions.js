function isLogin() {
  if (localStorage.getItem('user_RTproject')) {
    return true;
  }
  return false;
}

function getUserInfo() {
  if (isLogin()) {
    return JSON.parse(localStorage.getItem('user_RTproject'));
  }
  return null;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function redirect(page) {
  setTimeout(() => {
    window.location.href = `./${page}`;
  }, 2000);
}

export {
  isLogin, getUserInfo, escapeHtml, redirect,
};
