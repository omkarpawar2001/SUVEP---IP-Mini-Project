import { db } from "./firebase_config.js";
document.getElementById("submit").onclick = insert;

function insert() {

  // console.log("Hello");
  // const q = query(collection(db, "users"), where("capital", "==", true));

  // const querySnapshot = getDocs(q);
  // querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  // });
//   var email = document.getElementById("email").value;
//   var pwd = document.getElementById("password").value;

  // //   if (document.getElementById("flexRadioDefault1").checked == true) {
  // //     var type = "Seller";
  // //   } else if (document.getElementById("flexRadioDefault2").checked == true) {
  // //     var type = "Buyer";
  // //   } else if (document.getElementById("flexRadioDefault3").checked == true) {
  // //     var type = "Advertiser";
  // //   } else if (document.getElementById("flexRadioDefault4").checked == true) {
  // //     var type = "Distributer";
  // //   }
//   console.log("Email ", email);
//     console.log("Password ", pwd);
    


  //   const user_data = {
  //     Name: name,
  //     Email: email,
  //     MobileNo: mobile,
  //     Address: address,
  //     Type: type,
  //   };

  //   // display(name, email, mobile, address, type);

  //   var x = registervalid(name, email, mobile, address);
  //   console.log(x);
  //   if (x == true) {
  //     console.log("Inside if");
  //     const insert = db
  //       .collection("users")
  //       .doc(email)
  //       .set(user_data)
  //       .then(function () {
  //         console.log("Added to the database");
  //       });
  //     insert.then(
  //       () => {
  //         Swal.fire(
  //           "Congratulations!",
  //           "You have been succesfully registered..!",
  //           "success"
  //         ).then(() => {
  //           location.reload();
  //         });
  //       },
  //       (error) => {
  //         Swal.fire({
  //           icon: "error",
  //           title: "Oops...",
  //           text: "Something went wrong!",
  //         });
  //       }
  //     );
  //   }
}
