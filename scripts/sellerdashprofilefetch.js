import { storage } from "./firebase_config.js";
import { getCookieLogin } from "./cookiestore.js";
import { db } from "./firebase_config.js";

window.onload = dashpic;

function dashpic() {
  var email = getCookieLogin('email');
  db.collection("users")
    .doc(email)
    .get()
    .then((querySnapshot) => {
      let data = querySnapshot.data();
      if (data.Type != "Seller") {
        var mypro = document.getElementById("myproducts");
        mypro.parentNode.removeChild(mypro);
        var mydash = document.getElementById("mydashboard");
        mydash.parentNode.removeChild(mydash);
      } else if (data.Type == "Seller") {
        var mycart = document.getElementById("mycart");
        mycart.parentNode.removeChild(mycart);
      }
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
  // var url = document.location.href,
  //   params = url.split('?')[1].split('&'),
  //   data = {}, tmp;
  // for (var i = 0, l = params.length; i < l; i++) {
  //   tmp = params[i].split('=');
  //   data[tmp[0]] = tmp[1];

    var ordercount = 0;


  db.collection("orders")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        ordercount++;
      });
      document.getElementById("ordercount").innerHTML = ordercount;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });

  

  document.getElementById("data").innerHTML = getCookieLogin("username");

  storage
    .ref(email + "/profileimg")
    .getDownloadURL()
    .then((url) => {
      console.log("url", url);
      document.getElementById("picsm").setAttribute("src", url);
    });
  
}
