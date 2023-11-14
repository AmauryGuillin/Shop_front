export default function userLogout() {
  window.localStorage.removeItem('auth_token');
}
