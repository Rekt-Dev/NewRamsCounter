export let LOGGED_IN = false;

export function login(userName, password) {
  //not real data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      LOGGED_IN = true;
      resolve(LOGGED_IN);
    }, 250);
  });
}

export function logout() {
  LOGGED_IN = false;
}
