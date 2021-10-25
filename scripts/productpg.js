import { getCookieLogin } from "./cookiestore.js";
import { db, storage } from "./firebase_config.js";
window.onload = productpg;
var btn = document.getElementById("addtocart");
btn.onclick = addToCart;

function productpg() {
  //     var params=[];
  //   console.log("inside function");
  //   var parser = document.createElement("a");
  //   parser.href = window.location.url;
  //   var query = parser.search.substring(1);
  //   var vars = query.split("?");
  //   for (var i = 0; i < vars.length; i++) {
  //     var pair = vars[i].split("=");
  //     params[pair[0]] = decodeURIComponent(pair[1]);
  //   }
  //   console.log(params);
  var mainimg = document.getElementById("mainimg");
  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");
  var img3 = document.getElementById("img3");
  var title = document.getElementById("name");
  var desc = document.getElementById("desc");
  var price = document.getElementById("price");
  let urlString = window.location.href;

  let paramString = urlString.split("?")[1];

  let queryString = new URLSearchParams(paramString);

  for (let pair of queryString.entries()) {
    console.log("Key is:" + pair[0]);
    console.log("Value is:" + pair[1]);

    db.collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
            const userdata = doc.data();
            if (userdata.ProdName == pair[1]) {
                title.innerHTML = userdata.ProdName;
                price.innerHTML = "₹ " + userdata.ProdPrice + " /-";
                desc.innerHTML = userdata.ProdDesc;
                console.log(pair[1])
              storage
                .ref(userdata.SellerEmail + "/products/"+pair[1]+"/productimg1")
                .getDownloadURL()
                .then((url) => {
                  console.log("url", url);
                    mainimg.setAttribute("src", url);
                    img1.setAttribute("src", url);
                });
                storage
                  .ref(
                    userdata.SellerEmail +
                      "/products/" +
                      pair[1] +
                      "/productimg2"
                  )
                  .getDownloadURL()
                  .then((url) => {
                    console.log("url", url);
                    img2.setAttribute("src", url);
                  });
                storage
                  .ref(
                    userdata.SellerEmail +
                      "/products/" +
                      pair[1] +
                      "/productimg3"
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

function addToCart() {
  console.log("Clicked");
  var email = getCookieLogin("email");
  var prodname = document.getElementById("name").innerHTML;
  db.collection("products")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const userdata = doc.data();
        console.log(userdata.ProdName);
        console.log(prodname);
        if (userdata.ProdName == prodname) {
          var productdata = {
            ProdPic: userdata.ProdPic,
            ProdName: userdata.ProdName,
            Quantity: 1,
            Price: userdata.ProdPrice,
          };
          const insert = db
            .collection("cart")
            .doc("All Products")
            .collection("email")
            .doc(prodname)
            .set(productdata)
            .then(function () {});
          insert.then(
            () => {
              Swal.fire(
                "Congratulations!",
                "Your product has been added to your cart succesfully..!",
                "success"
              ).then(() => {
                location.reload();
              });
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
        console.log(userdata.ProdPic);
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}
