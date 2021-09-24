import { db } from './firebase_config.js'
import {contactvalid} from './validations.js'

document.getElementById('submit').onclick = insert;

function insert() {
  console.log("Inside function");
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var queries = document.getElementById("queries").value;
 
  console.log("Name ", name);
  console.log("Email ", email);
  console.log("Queries ", queries);

  const user_data = {
    Name: name,
    Email: email,
    Queries: queries,
  };

  // display(name, email);

  var x = contactvalid(name, email,queries);
  console.log(x);
  if (x == true) {
    console.log("Inside if");
    const insert =  db
      .collection("queries")
      .doc(email)
      .set(user_data)
      .then(function () {
        console.log("Added to the database");
      });
    insert.then(
      () => {
        alert("Queries Registered Succesfully with email id ", email);
        location.reload();

      },
      (error) => {
        console.log("error", error);
      }
    );
  }
}


