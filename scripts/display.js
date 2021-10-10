import { setCookieLogin } from "./cookiestore.js";
import { db } from "./firebase_config.js";
document.getElementById("submit").onclick = display;
var user;
var mobile;
var address;
var type;

function display() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  console.log(email, pass);

  db.collection("auth")
    .doc(email)
    .get()
    .then((querySnapshot) => {

      let data = querySnapshot.data();
      if (pass == data.Password) {
        user = data.Name;
        db.collection("users")
          .doc(email)
          .get()
          .then((querySnapshot) => {
            let data = querySnapshot.data();
            if (data.Type == "Admin") {
              user = data.Name;
              mobile = data.MobileNo;
              address = data.Address;
              type = data.Type;
              // console.log(user, mobile, address);
              setCookieLogin(email, user, mobile, address, type);
              console.log(document.cookie);
              var url = "/dash.html?name=" + user;
              document.location.href = url;
            }
            else {
              
              user = data.Name;
              mobile = data.MobileNo;
              address = data.Address;
              type = data.Type;
              // console.log(user, mobile, address);
              setCookieLogin(email, user, mobile, address, type);
              console.log(document.cookie);
              var url = "/dash.html?name=" + user;
              document.location.href = url;
            }
          })
          .catch((err) => {
            console.log(`Error: ${err}`);
          });


      }
      else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password Mismatch. Kindly re-check your password",
        });
      }


    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });

  // return user;

  // window.location.href = "/dash.html";
  // document.getElementById("data").innerHTML = email;
  // console.log(email);
}
export { display };
