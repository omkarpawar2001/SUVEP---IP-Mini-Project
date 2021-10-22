import { db, storage } from "./firebase_config.js";
import { productvalid } from "./validations.js";
import { getCookieLogin } from "./cookiestore.js";

document.getElementById("submit").onclick = insert;

function insert() {
  var productcount = document.getElementById("filefield").files.length;
  var name = document.getElementById("prodname").value;
  var price = document.getElementById("prodprice").value;
  var desc = document.getElementById("proddesc").value;
  var file1 = document.getElementById("filefield").files[0];
  var file2 = document.getElementById("filefield").files[1];
  var file3 = document.getElementById("filefield").files[2];
  var valid = productvalid(productcount, name, price, desc);
  if (valid == true) {
    var email = getCookieLogin("email");
    const prod_data = {
      ProdName: name,
      ProdPrice: price,
      ProdDesc: desc,
    };
    db.collection("products").doc(email)
      .collection("All Products").doc(name)
      .set(prod_data)
      .then(function () {
        console.log("Added to the database");
      });
    const storeageref = storage.ref();

    const upload1 = storeageref.child(email + "/" + name + "/productimg1");
    upload1.put(file1);
    const upload2 = storeageref.child(email + "/" + name + "/productimg2");
    upload2.put(file2);
    const upload3 = storeageref.child(email + "/" + name + "/productimg3");
    const task = upload3.put(file3);

    task.then(
      Swal.fire(
        "Status",
        "Product added to your profile succesfully..!",
        "success"
      ),
      (error) => {
        console.log("error", error);
      }
    );

    //   console.log("Inside function");
    //   var name = document.getElementById("name").value;
    //   var email = document.getElementById("email").value;
    //   var queries = document.getElementById("queries").value;

    //   console.log("Name ", name);
    //   console.log("Email ", email);
    //   console.log("Queries ", queries);

    //   const user_data = {
    //     Name: name,
    //     Email: email,
    //     Queries: queries,
    //   };

    //   // display(name, email);

    //   var x = contactvalid(name, email, queries);
    //   console.log(x);
    //   if (x == true) {
    //     console.log("Inside if");
    //     const insert = db
    //       .collection("queries")
    //       .doc(email)
    //       .set(user_data)
    //       .then(function () {
    //         console.log("Added to the database");
    //       });
    //     insert.then(
    //       () => {
    //         Swal.fire(
    //           "Status",
    //           "Your query has been succesfully registered..!",
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
}
