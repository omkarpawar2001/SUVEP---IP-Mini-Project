import { cartData } from "./cartdata.js";
import { db, storage } from "./firebase_config.js";

var pic,title,quantity,price;
db.collection("users")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
        const userdata = doc.data();
        title = userdata.Name;
        quantity = 4;
        price = "999"
        storage
          .ref(userdata.Email + "/profileimg")
          .getDownloadURL()
            .then((url) => {
                console.log(url);
                cartData(url, title, quantity, price);
          });
        
    });
      
      
    // console.log(emails);
    // console.log($("#table td").closest("tr").length);
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });

