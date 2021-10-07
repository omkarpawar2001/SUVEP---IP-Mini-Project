function setCookieLogin(email,user,mobile,address,type) {
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

export { setCookieLogin, getCookieLogin };