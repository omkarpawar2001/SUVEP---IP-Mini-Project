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
  var email = document.getElementById("email").value;
  var pwd = document.getElementById("password").value;

  // //   if (document.getElementById("flexRadioDefault1").checked == true) {
  // //     var type = "Seller";
  // //   } else if (document.getElementById("flexRadioDefault2").checked == true) {
  // //     var type = "Buyer";
  // //   } else if (document.getElementById("flexRadioDefault3").checked == true) {
  // //     var type = "Advertiser";
  // //   } else if (document.getElementById("flexRadioDefault4").checked == true) {
  // //     var type = "Distributer";
  // //   }
  console.log("Email ", email);
  console.log("Password ", pwd);
  const cars = [];
  db.collection("auth")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        
        cars.push(data.Email);
        
      });
      
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });

}
