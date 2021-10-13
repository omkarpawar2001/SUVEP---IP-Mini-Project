import { storage } from "./firebase_config.js";
import { getCookieLogin } from "./cookiestore.js";
import { db } from "./firebase_config.js";

window.onload = dashpic;

function dashpic() {
  // var url = document.location.href,
  //   params = url.split('?')[1].split('&'),
  //   data = {}, tmp;
  // for (var i = 0, l = params.length; i < l; i++) {
  //   tmp = params[i].split('=');
  //   data[tmp[0]] = tmp[1];
  // }
    var usercount=0, ordercount=0, feedcount=0;
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            usercount++;
        });
          document.getElementById("usercount").innerHTML = usercount-1;
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    
    db.collection("queries")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          feedcount++;
        });
        document.getElementById("feedcount").innerHTML = feedcount;
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

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
