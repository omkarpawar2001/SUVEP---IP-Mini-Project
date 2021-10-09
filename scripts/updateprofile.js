import { db } from './firebase_config.js'
import {setCookieLogin} from './cookiestore.js'

document.getElementById('submit').onclick = insert;

function insert() {
  var name = document.getElementById("fullname").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var address = document.getElementById("address1").value;
  var type = document.getElementById("type1").value;
  console.log(name);


  const user_data = {
    Name: name,
    Email: email,
    MobileNo: mobile,
    Address: address,
    Type: type,
  };



  const insert = db
    .collection("users")
    .doc(email)
    .set(user_data)
    .then(function () {
      console.log("Added to the database");
    });
 
  insert.then(
    () => {

      Swal.fire(
        'Congratulations!',
        'Your profile has been updated succesfully..!',
        'success'
      ).then(
        () => {
          setCookieLogin(email,name,mobile,address,type);
          location.reload();
        }
      )
    },
    (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  );
}

