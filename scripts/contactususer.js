import { getCookieLogin } from "./cookiestore.js";
import { storage } from "./firebase_config.js";

window.onload = loadData();
function loadData() {
    document.getElementById("data").innerHTML = getCookieLogin("username");
    const email = getCookieLogin("email");
    storage
      .ref(email + "/profileimg")
      .getDownloadURL()
      .then((url) => {
        console.log("url", url);
        document.getElementById("picsm").setAttribute("src", url);
      });
    document.getElementById("name").value = getCookieLogin("username");
    // document.getElementById("name").value = "O";
    document.getElementById("email").value = getCookieLogin("email");
}