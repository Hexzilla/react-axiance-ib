async function reroute() {
  if (
    JSON.parse(localStorage.getItem('isLoggedIn')) === true
    && JSON.parse(localStorage.getItem('emailVerified')) === true
    && JSON.parse(localStorage.getItem('nullPointId')) !== null
  ) {
    return '/portal';
  } if (
    JSON.parse(localStorage.getItem('isLoggedIn')) === true
    && JSON.parse(localStorage.getItem('emailVerified')) === true
  ) {
    return '/dashboard';
  } if (
    JSON.parse(localStorage.getItem('isLoggedIn')) === true
    && JSON.parse(localStorage.getItem('emailVerified')) === false
  ) {
    return '/verify-email';
  }

  return null;
}

export default { reroute };
