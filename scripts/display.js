import { db } from "./firebase_config.js";
document.getElementById("submit").onclick = display;
var user;
var mobile;
var address;
var type;



async function setCookie(email) {
  console.log("Inside setcookie");
  // db.collection("users")
  //   .doc(email)
  //   .get()
  //   .then((querySnapshot) => {
  //     let data = querySnapshot.data();
  //     console.log(data);
  //     user = data.Name;
  //     mobile = data.MobileNo;
  //     address = data.Address;
  //     type = data.Type;
  //     // console.log(user, mobile, address);
  //     document.cookie = "email = " + email;
  //     document.cookie = "username = " + user;
  //     document.cookie = "mobile = " + mobile;
  //     document.cookie = "address = " + address;
  //     document.cookie = "type =" + type;
  //     console.log(document.cookie);
  //     return Promise.resolve(1);

  //   })
  //   .catch((err) => {
  //     console.log(`Error: ${err}`);
  //     return Promise.resolve(0);

  //   });
}
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
        // setCookie(email).then(() => {
        //   setCookie(email);
        //   console.log(document.cookie);
        //   var url = "/dash.html?name=" + user;
        //   document.location.href = url;
        // });
        db.collection("users")
          .doc(email)
          .get()
          .then((querySnapshot) => {
            let data = querySnapshot.data();
            console.log(data);
            user = data.Name;
            mobile = data.MobileNo;
            address = data.Address;
            type = data.Type;
            // console.log(user, mobile, address);
            document.cookie = "email = " + email;
            document.cookie = "username = " + user;
            document.cookie = "mobile = " + mobile;
            document.cookie = "address = " + address;
            document.cookie = "type =" + type;
            console.log(document.cookie);
            var url = "/dash.html?name=" + user;
            document.location.href = url;
          })
          .catch((err) => {
            console.log(`Error: ${err}`);
            return Promise.resolve(0);
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
