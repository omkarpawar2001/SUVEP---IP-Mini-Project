import { storage } from "./firebase_config.js";
import { getCookieLogin } from "./cookiestore.js";

window.onload = dashpic;



function dashpic() {
  // var url = document.location.href,
  //   params = url.split('?')[1].split('&'),
  //   data = {}, tmp;
  // for (var i = 0, l = params.length; i < l; i++) {
  //   tmp = params[i].split('=');
  //   data[tmp[0]] = tmp[1];
  // }

  document.getElementById("data").innerHTML = getCookieLogin("username");
  document.getElementById("sidename").innerHTML = getCookieLogin("username");
  document.getElementById("sidetype").innerHTML = getCookieLogin("type");
  const email = getCookieLogin("email");
  storage
    .ref(email + "/profileimg")
    .getDownloadURL()
    .then((url) => {
      console.log("url", url);
      document.getElementById("picsm").setAttribute("src", url);
      document.getElementById("piclg").setAttribute("src", url);
    });
}
