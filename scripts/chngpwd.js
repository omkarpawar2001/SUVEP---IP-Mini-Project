import { getCookieLogin, setCookieLogin } from "./cookiestore.js";
import { storage, db } from "./firebase_config.js";
document.getElementById("submit").onclick = display;
var user;
var mobile;
var address;
var type;

function display() {
    var email = getCookieLogin("email");
    var name = getCookieLogin("username");
  var current = document.getElementById("current").value;
  var newpass = document.getElementById("new").value;
  var confirmpass = document.getElementById("newconfirm").value;
  console.log(current, newpass, confirmpass);

  db.collection("auth")
    .doc(email)
    .get()
    .then((querySnapshot) => {
      let data = querySnapshot.data();
      if (current == data.Password && newpass!="" && confirmpass!="" &&newpass==confirmpass ) {
        const auth = {
          Name: name,
          Email: email,
          Password: newpass,
        };
        db.collection("auth")
          .doc(email)
          .set(auth)
          .then(function () {
            Swal.fire(
              "Congratulations!",
              "Your password has been updated succesfully..!!",
              "success"
            );
          })
          .catch((err) => {
            console.log(`Error: ${err}`);
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please check all details once again!",
        });
      }
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });

  //   // return user;

  //   // window.location.href = "/dash.html";
  //   // document.getElementById("data").innerHTML = email;
  //   // console.log(email);
}
export { display };
