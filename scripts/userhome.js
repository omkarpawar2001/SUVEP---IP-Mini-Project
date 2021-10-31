import { db, storage } from "./firebase_config.js";
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
      }
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
}

{/* <script>
            var up = document.getElementById('GFG_UP');
            var down = document.getElementById('GFG_DOWN');
            var div = document.getElementById('GFG_DIV');
            up.innerHTML = "Click on button to remove the element.";
              
            function GFG_Fun() {
                div.parentNode.removeChild(div);
                down.innerHTML = "Element is removed."; 
            }
        </script>  */}