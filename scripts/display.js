import { db } from "./firebase_config.js";
document.getElementById("submit").onclick = display;
var user;
function display() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;


  db.collection("auth")
    .doc(email)
    .get()
    .then((querySnapshot) => {

      let data = querySnapshot.data();
      if (pass == data.Password) {
        user = data.Name;
        console.log(user);
        var url = "/dash.html?name=" + user;
        document.location.href = url;
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
