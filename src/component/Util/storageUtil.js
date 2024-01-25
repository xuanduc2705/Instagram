export function saveTokenToSessionStorage(token) {
    sessionStorage.setItem("token", token);
  }
  
  export function getTokenFromSessionStorage() {
    return sessionStorage.getItem("token");
  }
  
  export function removeTokenFromSessionStorage() {
    sessionStorage.removeItem("token");
  }