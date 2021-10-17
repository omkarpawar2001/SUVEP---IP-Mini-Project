import { storage, db } from "./firebase_config.js";

function cartData() {
  var div = document.getElementById("cartdata");
//   db.collection("users")
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         const userdata = doc.data();
//         storage
//           .ref(userdata.Email + "/profileimg")
//           .getDownloadURL()
//           .then((url) => {
//             console.log("url", url);
//             //img src code
//           });
//       });
//       // console.log(emails);
//       // console.log($("#table td").closest("tr").length);
//     })
//     .catch((error) => {
//       console.log("Error getting documents: ", error);
//     });
    var divborder = document.createElement("div");
    var divalign = document.createElement("div");
    var divtitle = document.createElement("div");
    var divcol2 = document.createElement("div");
    var col1 = document.createElement("div");
    var col2 = document.createElement("div");
    var col3 = document.createElement("div");
    var imgdiv = document.createElement("div");
    var imgtag = document.createElement("img");
    var btnplus = document.createElement("button");
    var btnminus = document.createElement("button");
    var counttag = document.createElement("a");
    
    


}
