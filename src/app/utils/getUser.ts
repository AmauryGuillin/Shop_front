export default function getUser(): string | null {
  return window.localStorage.getItem('auth_token');
}
