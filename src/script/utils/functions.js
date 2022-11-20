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

export { isLogin, getUserInfo };
