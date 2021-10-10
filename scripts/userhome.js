import { storage } from "./firebase_config.js";
import { getCookieLogin } from "./cookiestore.js";

window.onload = dashpic;

function dashpic() {
  document.getElementById("data").innerHTML = getCookieLogin("username");
  const email = getCookieLogin("email");
  storage
    .ref(email + "/profileimg")
    .getDownloadURL()
    .then((url) => {
      console.log("url", url);
      document.getElementById("picsm").setAttribute("src", url);
    });
}
