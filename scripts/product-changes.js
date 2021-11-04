import { db, storage } from "./firebase_config.js";
import { productvalid } from "./validations.js";
import { getCookieLogin } from "./cookiestore.js";

window.onload = loading();
document.getElementById("submit").onclick = submitData;
document.getElementById("fileUpload").onchange = updateData;
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var title = document.getElementById("name");
var desc = document.getElementById("desc");
var price = document.getElementById("price");
var select = document.getElementById("inputGroupSelect03");

function loading() {
  //   var mainimg = document.getElementById("mainimg");
  var urlString = window.location.href;
  console.log(urlString);

  var paramString = urlString.split("?")[1];

  var queryString = new URLSearchParams(paramString);
  for (let pair of queryString.entries()) {
    // console.log("Key is:" + pair[0]);
    // console.log("Value is:" + pair[1]);

    db.collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const userdata = doc.data();
          if (userdata.ProdName == pair[1]) {
            title.value = userdata.ProdName;
            price.value = userdata.ProdPrice;
            desc.value = userdata.ProdDesc;
            select.value = userdata.Category;
            console.log(pair[1]);
            storage
              .ref(
                userdata.SellerEmail + "/products/" + pair[1] + "/productimg1"
              )
              .getDownloadURL()
              .then((url) => {
                console.log("url", url);
                // mainimg.setAttribute("src", url);
                img1.setAttribute("src", url);
              });
            storage
              .ref(
                userdata.SellerEmail + "/products/" + pair[1] + "/productimg2"
              )
              .getDownloadURL()
              .then((url) => {
                // console.log("url", url);
                img2.setAttribute("src", url);
              });
            storage
              .ref(
                userdata.SellerEmail + "/products/" + pair[1] + "/productimg3"
              )
              .getDownloadURL()
              .then((url) => {
                console.log("url", url);
                img3.setAttribute("src", url);
              });
          }
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }
}
function readURL1(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#img1").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function readURL2(input) {
  if (input.files && input.files[1]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#img2").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[1]);
  }
}

function readURL3(input) {
  if (input.files && input.files[2]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#img3").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[2]);
  }
}

function updateData() {
  readURL1(document.getElementById("fileUpload"))
  readURL2(document.getElementById("fileUpload"))
  readURL3(document.getElementById("fileUpload"))
}

function submitData() {
  var urlString = window.location.href;
  console.log(urlString);

  var paramString = urlString.split("?")[1];

  var queryString = new URLSearchParams(paramString);
  for (let pair of queryString.entries()) {
    db.collection("products").doc(pair[1]).delete();
    var productcount = document.getElementById("fileUpload").files.length;
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var desc = document.getElementById("desc").value;
    var file1 = document.getElementById("fileUpload").files[0];
    var file2 = document.getElementById("fileUpload").files[1];
      var file3 = document.getElementById("fileUpload").files[2];
      var category = document.getElementById("inputGroupSelect03").value;
    var valid = productvalid(productcount, name, price, desc);

    if (valid == true) {
      var email = getCookieLogin("email");

        const storeageref = storage.ref();
        

      const upload1 = storeageref.child(
        email + "/products/" + name + "/productimg1"
      );
      upload1.put(file1);
      const upload2 = storeageref.child(
        email + "/products/" + name + "/productimg2"
      );
      upload2.put(file2);
      const upload3 = storeageref.child(
        email + "/products/" + name + "/productimg3"
      );
        upload3.put(file3);
        storage.ref(email + "/products/" + name).delete();
      storage
        .ref(email + "/products/" + name + "/productimg1")
        .getDownloadURL()
        .then((url) => {
          console.log("url", url);
          const prod_data = {
            ProdName: name,
            ProdPrice: price,
            Category: category,
            ProdDesc: desc,
            ProdPic: url,
            SellerEmail: email,
          };
          const task = db
            .collection("products")
            .doc(name)
            .set(prod_data)
            .then(function () {
              console.log("Added to the database");
            });
          task.then(
            Swal.fire(
              "Status",
              "Product details updated succesfully..!",
              "success"
            ),
            (error) => {
              console.log("error", error);
            }
          );
        });
    }
  }
}
