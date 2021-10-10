document.getElementById("logout").onclick = deleteCookies;

function setCookieLogin(email, user, mobile, address, type) {
    document.cookie = "email = " + email;
    document.cookie = "username = " + user;
    document.cookie = "mobile = " + mobile;
    document.cookie = "address = " + address;
    document.cookie = "type =" + type;
}
function getCookieLogin(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function deleteCookies() {
  var allCookies = document.cookie.split(";");

  // The "expire" attribute of every cookie is
  // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
  for (var i = 0; i < allCookies.length; i++)
    document.cookie = allCookies[i] + "=;expires=" + new Date(0).toUTCString();

  displayCookies.innerHTML = document.cookie;
}

export { setCookieLogin, getCookieLogin, deleteCookies };