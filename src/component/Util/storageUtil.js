export function saveTokenToSessionStorage(token) {
  localStorage.setItem("token", token);
}

export function getTokenFromSessionStorage() {
  return localStorage.getItem("token");
}

export function removeTokenFromSessionStorage() {
  localStorage.removeItem("token");
}
