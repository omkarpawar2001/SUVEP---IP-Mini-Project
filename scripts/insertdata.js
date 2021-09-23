import { db } from './firebase_config.js'
document.getElementById('submit').onclick = insert;

function insert() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobileno").value;
    var address = document.getElementById("address").value;
    if (document.getElementById("flexRadioDefault1").checked == true) {
      var type = "Seller";
    } else if (document.getElementById("flexRadioDefault2").checked == true) {
      var type = "Buyer";
    } else if (document.getElementById("flexRadioDefault3").checked == true) {
      var type = "Advertiser";
    } else if (document.getElementById("flexRadioDefault4").checked == true) {
      var type = "Distributer";
    }
    console.log("Name ", name);
    console.log("Email ", email);
    console.log("Mobile ", mobile);
    console.log("Address ", address);
    console.log("Type ", type);

    const user_data = {
        Name: name,
        Email: email,
        MobileNo: mobile,
        Address: address,
        Type: type,
    }

    const insert = db.collection("users")
      .doc(email)
      .set(user_data)
      .then(function () {
        console.log("Added to the database");
      });
    
    insert.then(
      () => {
        alert("User Registered Succesfully with email id ", email);
      },
      (error) => {
        console.log("error", error);
      }
    );
    

}
