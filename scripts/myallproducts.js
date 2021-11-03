import { getCookieLogin } from "./cookiestore.js";
import { db,storage } from "./firebase_config.js";

window.onload = allproducts;

var email = getCookieLogin("email");

db.collection("users")
  .doc(email)
  .get()
  .then((querySnapshot) => {
    let data = querySnapshot.data();
    if (data.Type != "Seller") {
      var mypro = document.getElementById("myproducts");
      mypro.parentNode.removeChild(mypro);
      var mydash = document.getElementById("mydashboard");
      mydash.parentNode.removeChild(mydash);
    } else if (data.Type == "Seller") {
      var mycart = document.getElementById("mycart");
      mycart.parentNode.removeChild(mycart);
    }
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
var count = 0;
function allproducts() {
  document.getElementById("data").innerHTML = getCookieLogin("username");
  const email = getCookieLogin("email");
  storage
    .ref(email + "/profileimg")
    .getDownloadURL()
    .then((url) => {
      console.log("url", url);
      document.getElementById("picsm").setAttribute("src", url);
    });
  db.collection("products")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const userdata = doc.data();
        console.log(userdata.ProdPic);
        if (userdata.SellerEmail == email) {
          count++;
          console.log(userdata.SellerEmail);
          console.log(email);
          createCard(
            userdata.ProdPic,
            userdata.ProdName,
            userdata.ProdDesc,
            userdata.ProdPrice
          );
        }
      });
      console.log(count)
      if (count == 0) {
        
        var noproduct = document.getElementById("noproduct");
        noproduct.innerHTML = "No products to display. Please upload a product first."
      }
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });

  // Working Code Down here
  //
}

function createCard(img1, title, desc, price) {
  var htmldiv = document.getElementById("mainrow");
  var maindiv = document.createElement("div");
  var carddiv = document.createElement("div");
  var img = document.createElement("img");
  var cardbody = document.createElement("div");
  var h5 = document.createElement("h5");
  var h52 = document.createElement("h5");
  var atag = document.createElement("a");
  var pcardtext = document.createElement("p");
  var divrow = document.createElement("div");
  var divcol = document.createElement("div");
  var pricetag = document.createElement("p");

  maindiv.setAttribute("class", "col-12 col-md-6 col-lg-4");
  carddiv.setAttribute("class", "card mb-4");
  img.setAttribute("class", "card-img-top");
  img.setAttribute("src", img1);
  img.setAttribute("style", "    height: 500px;");
  cardbody.setAttribute("class", "card-body");
  h5.setAttribute("class", "card-title");
  h5.setAttribute(
    "style",
    "overflow: hidden;  text-overflow: ellipsis; white-space: nowrap;"
  );
  pcardtext.setAttribute("class", "card-text");
  pcardtext.setAttribute(
    "style",
    "overflow: hidden;  text-overflow: ellipsis; white-space: nowrap;"
  );
  divrow.setAttribute("class", "row");
  divcol.setAttribute("class", "col");
  pricetag.setAttribute("class", "font-weight-bold");

  pricetag.innerHTML = "₹ " + price + " /-";
  h52.appendChild(pricetag);
  divcol.appendChild(h52);

  divrow.appendChild(divcol);
  pcardtext.innerHTML = desc;

  atag.innerHTML = title;
  atag.setAttribute("href", "product-user.html?product=" + title);
  h5.appendChild(atag);

  cardbody.appendChild(h5);
  cardbody.appendChild(pcardtext);
  cardbody.appendChild(divrow);

  carddiv.appendChild(img);
  carddiv.appendChild(cardbody);

  maindiv.appendChild(carddiv);

  htmldiv.appendChild(maindiv);
}

